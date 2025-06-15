const express = require("express");
require("dotenv").config();
const cors = require("cors");
const {chatWithGemini}=require("./utils/geminiChat")

const PORT=process.env.PORT || 3333;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/leads",async(req,res)=>{
    const {name,phone,source,msg}=req.body;

    if(!name || !phone){
        res.json({
            Error:"Name and Phone number are necessary!"
        })
        return
    }
    const chatResult = await chatWithGemini({ name, phone, source, msg });
    res.json({
        msg:"lead processed!",
        chatResult
    })
})


app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
