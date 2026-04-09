# 🏠 BookMyStay – MERN Stack Web Application

## 🚀 Overview

BookMyStay is a fullstack web application designed to simplify the process of listing, exploring, and managing properties.
Users can create, edit, and review listings with secure authentication, image uploads, and interactive UI features — all powered by the MERN (MongoDB, Express, React, Node.js) stack.

---

## ✨ Features

🔐 User Authentication using Passport.js (Login, Register, Logout)
🏡 CRUD Operations for property listings
📸 Image Uploads integrated with Cloudinary
⭐ Review System with rating functionality
💬 Flash Messages for user feedback
🧭 Dynamic Routing & Authorization
⚙️ Error Handling using custom ExpressError middleware

---

## 🛠️ Tech Stack

| Category              | Technologies                                   |
| --------------------- | ---------------------------------------------- |
| Frontend              | HTML, CSS, JavaScript, EJS (Templating Engine) |
| Backend               | Node.js, Express.js                            |
| Database              | MongoDB, Mongoose                              |
| Authentication        | Passport.js, Express-Session                   |
| Cloud & File Handling | Cloudinary, Multer                             |
| Utilities             | Method-Override, Connect-Flash, EJS-Mate       |

---

## 🧩 Project Structure

```
BookMyStay/
│
├── models/           # Mongoose models (Listing, Review, User)
├── routes/           # Express routes for listings, reviews, auth
├── controllers/      # Business logic separated per module
├── views/            # EJS templates for frontend
├── public/           # Static assets (CSS, JS, Images)
├── utils/            # Custom utilities & error handlers
├── app.js            # Main entry file
├── package.json
└── README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/yourusername/BookMyStay.git
cd BookMyStay
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Create a `.env` File

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MONGO_URL=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
```

### 4️⃣ Run the Application

```
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📚 Future Improvements

💬 Add real-time chat between users
📍 Integrate Google Maps API for location-based listings
🌐 Convert EJS frontend to React
📱 Improve mobile responsiveness

---

## 👨‍💻 Author

Kunal Hande
🎓 B.E. Information Technology | Matoshri College of Engineering, Nashik

---

## 🌐 📫 Connect With Me
🌐 GitHub: [https://github.com/Kunalhande](https://github.com/Kunalhande)
💼 LinkedIn: [https://www.linkedin.com/in/kunal-hande-a7546b230](https://www.linkedin.com/in/kunal-hande-a7546b230)
📧 Email: [kunalhand30@gmail.com](mailto:kunalhand30@gmail.com)

---


