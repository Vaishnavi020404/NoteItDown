ThinkNotes

Project Description:
ThinkNotes is a full-stack notes application built with Node.js and Express. It demonstrates REST API design, CRUD operations, and full-stack architecture.

Project Structure (current):

ThinkNotes/
├── back-end/
│   ├── node_modules/
│   ├── server.js
│   ├── notes-router.js
│   ├── package.json
│   └── package-lock.json
└── README.md
└── DAILY_PROGRESS.md      # Daily updates file


Technologies Used:
Node.js, Express.js
Nodemon for development
Git & GitHub for version control
Postman / curl / DevTools for testing APIs

API Routes:
GET /api/notes → Fetch all notes
POST /api/notes → Create a new note

Setup & Run:

git clone https://github.com/Vaishnavi020404/ThinkNotes.git
cd ThinkNotes/back-end
npm install
npm run dev


Open Postman or browser to test API:
GET → http://localhost:5001/api/notes
POST → http://localhost:5001/api/notes