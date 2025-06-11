# CRM Lite 💼

A lightweight Client Inquiry Management System built with **React**, **Node.js**, and **MongoDB**.

---

## 🚀 Technologies Used

- **Frontend:** React 19, Axios, Vite
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas with Mongoose

---

## ✨ Features

- 📩 Contact form with `name`, `email`, and `message` fields
- ✅ Submits inquiries to a MongoDB database
- 📋 Admin dashboard that lists all submitted inquiries
- 🔄 Change inquiry status via dropdown (`new`, `in-progress`, `resolved`)

---

## 📁 Folder Structure

CRM/
├── client/ # React frontend
├── server/ # Express backend + MongoDB logic
├── package.json # Root file with unified scripts
└── README.md # This file

yaml
Copy code

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd CRM
2. Install dependencies
bash
Copy code
npm install            # for root-level tools (like concurrently)
cd client && npm install
cd ../server && npm install
3. Run the app (frontend + backend)
bash
Copy code
cd ..
npm run dev
This will:

Start the React frontend on http://localhost:5173

Start the Express backend on http://localhost:4000

🔧 Configuration
Make sure your MongoDB URI is correctly set inside:

pgsql
Copy code
server/index.js
Example:

js
Copy code
mongoose.connect('your-mongo-uri', { ... })
🧠 Next Improvements (optional)
🔍 Filter inquiries by status

✏️ Persist status updates to the database

🗑️ Delete inquiries

📤 Export inquiries to CSV

🎨 Improve UI using Bootstrap or Tailwind

🤝 Author
Built with ❤️ by Iddo Avital
 Github profile: https://github.com/iddoavital42

 





