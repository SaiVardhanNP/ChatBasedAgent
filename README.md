# Lead Qualification Bot

A conversational AI-powered chatbot designed to qualify real estate leads in a WhatsApp-style interface. It classifies leads as **Hot**, **Cold**, or **Invalid** and extracts metadata such as location, budget, intent, and urgency in real time.

## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Gemini API for LLM-driven classification
- **Interface**: WhatsApp-style chat UI

## Features
- Classifies leads based on intent and urgency using Gemini LLM
- Extracts metadata (location, budget, interest level)
- Real-time WhatsApp-style chat UI with live messaging
- Form-driven lead input with dynamic conversation generation
- Modular backend with clean file separation

## Project Structure
```
CHAT-BASED-AGENT/
├── backend/
│   ├── config/          # Classification rules
│   ├── data/           # Data storage
│   ├── results/        # Output results
│   ├── utils/          # Utility functions
│   ├── index.js        # Backend entry point
│   └── package.json    # Backend dependencies
├── frontend/
│   ├── public/         # Static assets
│   ├── src/
│   │   ├── assets/     # Images and styles
│   │   ├── components/
│   │   │   └── chat/   # Chat UI components
│   │   ├── pages/      # Page components
│   │   ├── App.jsx     # Main React app
│   │   └── main.jsx    # Frontend entry point
└── README.md           # Project documentation
```

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/SaiVardhanNP/ChatBasedAgent.git
cd ChatBasedAgent
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in `/backend/utils/` with your Gemini API key:
  ```
  GEMINI_API_KEY=your_gemini_api_key_here
  ```
- Start the backend server:
  ```bash
  node index.js
  ```
- Backend runs at: `http://localhost:3000`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
- Frontend runs at: `http://localhost:5173`

## Sample Input & Output

**Input:**
```json
{
  "name": "Rohit Sharma",
  "source": "Website",
  "message": "Looking to buy a flat in Pune"
}
```

**Output:**
```json
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
```

## Future Improvements
- Lead history with downloadable reports
- Dashboard for visualizing classification insights
- Email/SMS notifications for Hot leads
- User authentication and role-based access

## Author
**Sai Vardhan Nyalapatla**  
- Email: [saivardhan.nyalapatla55@gmail.com](mailto:saivardhan.nyalapatla55@gmail.com)  
- GitHub: [SaiVardhanNP](https://github.com/SaiVardhanNP)  
- LinkedIn: [Sai Vardhan Nyalapatla](https://linkedin.com/in/sai-vardhan-nyalapatla-492767340)

## License
This project is licensed under the MIT License.
