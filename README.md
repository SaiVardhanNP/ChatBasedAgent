
# Lead Qualification Bot

An AI-powered WhatsApp-style chatbot built using **React + TailwindCSS** (frontend) and **Node.js + Gemini API** (backend) to qualify real estate leads. It classifies leads as **Hot**, **Cold**, or **Invalid**, and extracts key metadata like location, budget, intent, and urgency.

---

## 📁 Project Structure

CHAT-BASED-AGENT/
├── backend/
│   ├── config/
│   │   ├── automobile.json
│   │   ├── education.json
│   │   ├── insurance.json
│   │   └── real_estate.json
│   ├── data/
│   ├── results/
│   │   ├── classificationresult.json
│   │   └── leads.json
│   ├── utils/
│   │   └── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── node_modules/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       │   └── chat/
│       │       ├── ChatBox.jsx
│       │       ├── ChatInput.jsx
│       │       ├── ChatMessage.jsx
│       │       └── ChatWindow.jsx
│       ├── pages/
│       │   ├── ChatPage.jsx
│       │   └── LeadForm.jsx
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js


---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SaiVardhanNP/ChatBasedAgent.git


cd backend
npm install


GEMINI_API_KEY=your_gemini_api_key_here


node index.js

Server runs at: http://localhost:3000


cd ../frontend
npm install

npm run dev



---

##  Sample Input

{
  "name": "Rohit Sharma",
  "source": "Website",
  "message": "Looking to buy a flat in Pune"
}

## Sample Output

{
  "response": "Hi Rohit! Thanks for reaching out. Could you share which city/location you're looking for?",
  "classification": "Hot",
  "metadata": {
    "intent": "buy",
    "location": "Pune",
    "budget": "Not mentioned",
    "urgency": "Not mentioned"
  }
}






