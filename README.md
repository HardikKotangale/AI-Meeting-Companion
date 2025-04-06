
# AI Meeting Companion
## 🚀 Commands to Run the React Code

### 1. 📦 Install Vite as a Dev Dependency
```bash
npm install -D vite
```

### 2. 📦 Install Required Dependencies
```bash
npm install react react-dom
npm install react-chartjs-2 chart.js lucide-react
```

### 3. ▶️ Start the Development Server
```bash
npm run dev
```

## Project Structure

```
ai-meeting-companion/
├── client/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AudioUploader.jsx         # Upload audio files
│   │   │   ├── LiveTranscription.jsx     # Show real-time transcription
│   │   │   ├── SummaryPanel.jsx          # Display summaries and TL;DRs
│   │   │   ├── ActionItems.jsx           # Show parsed action items
│   │   │   └── SentimentChart.jsx        # Visualize tone/emotion
│   │   ├── pages/
│   │   │   └── Dashboard.jsx             # Main dashboard view
│   │   ├── services/
│   │   │   └── api.js                    # Axios calls to Flask API
│   │   ├── utils/
│   │   │   └── formatTimestamp.js
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── server/                   # Flask Backend
│   ├── api/
│   │   ├── routes/
│   │   │   ├── upload.py                # Endpoint to upload audio
│   │   │   ├── transcribe.py            # Handles transcription logic
│   │   │   ├── summarize.py             # Summarizes transcripts
│   │   │   ├── action_items.py          # Extracts tasks, owners, deadlines
│   │   │   └── sentiment.py             # Analyzes tone/emotion
│   │   ├── services/
│   │   │   ├── transcription_service.py
│   │   │   ├── summarization_service.py
│   │   │   ├── action_item_service.py
│   │   │   └── sentiment_service.py
│   │   ├── models/
│   │   │   ├── meeting.py
│   │   │   ├── transcript.py
│   │   │   ├── action_item.py
│   │   │   └── sentiment.py
│   │   └── utils/
│   │       └── helpers.py
│   ├── config/
│   │   ├── database.py
│   │   └── settings.py
│   ├── app.py
│   └── requirements.txt
│
├── migrations/               # Flask-Migrate / Alembic DB migrations
├── .env                      # Environment variables (API keys, DB URI)
├── README.md
└── docker-compose.yml        # Optional: manage Postgres + Flask + React together
```
