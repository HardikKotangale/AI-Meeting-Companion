# Nexora: AI-Powered Meeting Companion

Nexora is an intelligent meeting assistant that transcribes audio, summarizes key discussion points, extracts actionable items, and enables users to chat with an AI agent about any part of the meeting.

✨ Built with privacy-first principles, local LLM integration, and a sleek modern UI.

---

## 🚀 Features

### 🎤 Transcription
- Upload or stream meeting audio
- Transcripts loaded from `.txt` files (`public/meeting_summaries/meeting1.txt`)
- Auto-refreshing UI with download support

### 🧠 AI-Powered Summarization
- Local LLM (`llama3` via [Ollama](https://ollama.com)) summarizes the meeting transcript
- Outputs:
  - Detailed Summary
  - Action Item Checklist (task, owner, due date, status)

### 💬 Chat with Nexora
- Natural language QA over the transcript
- Type or ask any follow-up question about the meeting
- Nexora responds concisely using the meeting as context

### 🌐 Tech Stack

| Frontend            | Backend             | AI / Infra        |
|---------------------|---------------------|-------------------|
| React + Vite        | Flask               | Ollama + LLaMA3   |
| Tailwind CSS        | RESTful API         | Whisper (transcribe) |
| Framer Motion       | Google Cloud Storage| Python + OpenCV   |

---

## 📁 Folder Structure

```
nexora/
├── client/                 # React frontend
│   ├── components/         # Shared UI (SectionWrapper, Spinner, ChatBubble)
│   ├── pages/              # TranscriptPage, SummaryPage, ChatPage
│   └── public/meeting_summaries/meeting1.txt
├── server/                 # Flask backend
│   ├── routes/             # APIs for transcription, summarization, upload
│   ├── utils/              # Helper functions
│   └── models/             # Whisper, Chat, Summary models
```

---

## 📦 Installation

### 🔧 1. Clone and Setup

```bash
git clone https://github.com/your-username/nexora.git
cd nexora
```

### 📦 2. Frontend Setup

```bash
cd client
npm install
npm run dev
```

### 🔌 3. Backend Setup

```bash
cd server
pip install -r requirements.txt
python run.py
```

### 🧠 4. Run Ollama Locally

```bash
ollama run llama3
```

> Make sure Ollama is running on `http://localhost:11434`

---

## 🗃️ Transcripts

You can place `.txt` transcripts in:

```
client/public/meeting_summaries/
```

Example:
```
meeting1.txt
meeting2.txt
```

---

## 🛠 Dev Tips

- Adjust loading behavior in each component via `setTimeout` or real async events
- Transcript auto-refresh can be toggled via store (Zustand)
- Chat UI supports Enter to send, animated AI typing, and download

---

## 📦 Deployment

- Use `Vercel`, `Netlify`, or `GCP App Engine` for frontend
- Deploy Flask backend on `GCP Cloud Run` or `Render`
- Run Ollama locally or containerize it using Docker (advanced)

---

## 🔒 Privacy & Local-first AI

Nexora is designed to be privacy-friendly:
- Whisper and LLaMA run **locally**
- Your transcripts never leave your machine
- No third-party cloud dependencies unless explicitly configured

---
