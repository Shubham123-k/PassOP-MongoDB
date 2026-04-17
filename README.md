# 🔐 PassOP — Password Manager (MongoDB + React)

PassOP is a full-stack password manager that allows users to securely store, manage, and access credentials with a clean UI and real database integration.

---

## 🚀 Features

* Save website URL, username, and password
* Edit and delete stored credentials
* Copy credentials to clipboard with animation
* Dark / Light mode toggle
* Fully responsive UI
* Persistent storage using MongoDB
* REST API integration (Express.js)

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Toastify
* Lordicon Animations

### Backend

* Node.js
* Express.js
* MongoDB (Native Driver)
* dotenv

---

## 📂 Project Structure

```
PassOP/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Manager.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend/
│   ├── server.js
│   ├── .env
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/Shubham123-k/passop.git
cd passop
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside backend:

```
MONGO_URI=mongodb://localhost:27017/
DB_NAME=passop
PORT=3000
```

Start backend:

```bash
node server.js
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/passwords`     | Fetch all passwords |
| POST   | `/passwords`     | Add new password    |
| DELETE | `/passwords/:id` | Delete password     |

---

## 💡 How It Works

* React frontend communicates with Express backend using Fetch API
* Backend handles requests and interacts with MongoDB
* Password data is stored in a `passwords` collection
* UI updates dynamically after each operation

---

## ⚠️ Disclaimer

This project stores passwords in plain text and is intended for learning purposes only.
Do not use it to store sensitive or real credentials.

---

## 🔗 GitHub

👉 https://github.com/Shubham123-k

---

## 👨‍💻 Author

Shubham K

---

## ⭐ Support

If you like this project, consider giving it a star ⭐
