import os

# Define the folder structure
folders = [
    "client/public",
    " /client/src/components",
    " /client/src/pages",
    " /client/src/services",
    " /client/src/utils",
    
    " /server/api/routes",
    " /server/api/services",
    " /server/api/models",
    " /server/api/utils",
    " /server/config",

    " /migrations"
]

# Create the folders
for folder in folders:
    os.makedirs(folder, exist_ok=True)

# Create placeholder files
files = [
    " /client/src/components/AudioUploader.jsx",
    " /client/src/components/LiveTranscription.jsx",
    " /client/src/components/SummaryPanel.jsx",
    " /client/src/components/ActionItems.jsx",
    " /client/src/components/SentimentChart.jsx",
    " /client/src/pages/Dashboard.jsx",
    " /client/src/services/api.js",
    " /client/src/utils/formatTimestamp.js",
    " /client/src/App.jsx",
    " /client/src/index.js",
    " /client/package.json",

    " /server/api/routes/upload.py",
    " /server/api/routes/transcribe.py",
    " /server/api/routes/summarize.py",
    " /server/api/routes/action_items.py",
    " /server/api/routes/sentiment.py",
    " /server/api/services/transcription_service.py",
    " /server/api/services/summarization_service.py",
    " /server/api/services/action_item_service.py",
    " /server/api/services/sentiment_service.py",
    " /server/api/models/meeting.py",
    " /server/api/models/transcript.py",
    " /server/api/models/action_item.py",
    " /server/api/models/sentiment.py",
    " /server/api/utils/helpers.py",
    " /server/config/database.py",
    " /server/config/settings.py",
    " /server/app.py",
    " /server/requirements.txt",
    " /.env",
    " /README.md",
    " /docker-compose.yml"
]

# Create empty files
for file in files:
    with open(file, 'w') as f:
        pass

"Folder structure with placeholders created successfully."
