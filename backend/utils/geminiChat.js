require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const path = require("path");
const fs = require("fs");

const API_KEY = process.env.GEMINI_API_KEY;

const chatWithGemini = async (lead, industry = "real_estate") => {
  const configPath = path.join(__dirname, `../config/${industry}.json`);
  const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
  const systemPrompt = config.systemPrompt;

  const userPrompt = `Hey! You’ve got a new lead. Here’s what we know so far:

- Name: ${lead.name}
- Phone: ${lead.phone}
- Source: ${lead.source || "Not mentioned"}
- Message from lead: ${lead.msg || "No message provided"}

Your task:
Start a friendly, natural-sounding conversation and collect the following info from the lead:
- Intent
- Budget
- Location
- Urgency

Respond ONLY with a valid JSON object in this format:
{
  "transcript": ["user question", "lead response", "..."],
  "classification": "Hot" | "Cold" | "Invalid",
  "metadata": {
    "intent": "...",
    "budget": "...",
    "location": "...",
    "urgency": "..."
  }
}
NO extra commentary or explanation. Only valid JSON.`;

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: systemPrompt }],
        },
      ],
    });

    const result = await chat.sendMessage(userPrompt);
    let raw = result.response.text();

    console.log("Model response:", raw);

    raw = raw.trim().replace(/^```(?:json)?\s*/i, "").replace(/```$/, "").trim();

    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError.message);
      return {
        transcript: ["Failed to parse JSON response from model."],
        classification: "Invalid",
        metadata: {},
      };
    }

    const leadsFile = path.join(__dirname, "../results/leads.json");
    let leads = [];

    try {
      leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
    } catch (e) {
      leads = [];
    }

    leads.push(parsed);
    fs.writeFileSync(leadsFile, JSON.stringify(leads,null,2)); 
    return parsed;
  } catch (error) {
    console.error("Error in chatWithGemini:", error.message);
    return {
      transcript: [error.message],
      classification: "Invalid",
      metadata: {},
    };
  }
};

module.exports = {
  chatWithGemini,
};
