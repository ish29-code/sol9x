# 🚀 SOL9X – Full Stack MERN Application

SOL9X is a **production-ready full-stack MERN application** built with secure authentication, email verification, role-based access control, and a modern responsive UI.

🔗 **Live Demo:**  
https://sol9x-frontend-jlih.onrender.com/

💻 **GitHub Repository:**  
https://github.com/ish29-code/sol9x

---

## 📌 Project Overview

SOL9X demonstrates a **real-world authentication system** similar to industry-level applications.  
It includes signup, login, email verification, password recovery, protected routes, and role-based dashboards.

This project was built as an **assignment + interview-ready project**.

---

## ✨ Features

### 🔐 Authentication & Security
- User Signup & Login
- Password hashing using **bcrypt**
- JWT-based authentication
- Email verification before login
- Forgot password & reset password
- Change password for logged-in users

### 👥 Role-Based Access Control
- **Admin**
  - Admin Dashboard
  - Manage students
- **Student**
  - Student Dashboard
  - View & update profile

### 🛡️ Route Protection
- Protected routes using JWT
- Role-based access (Admin / Student)
- Unauthorized users redirected to login

### 📧 Email Integration
- Email verification after signup
- Password reset emails
- Email testing via **Mailtrap**

### 🎨 UI / UX
- Fully responsive design
- Styled using **Tailwind CSS**
- Clean & professional dashboard UI

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Context API
- Axios
- Tailwind CSS
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Nodemailer
- crypto

### Database
- MongoDB Atlas

### Deployment
- **Frontend:** Render
- **Backend:** Render

---
```
## 📁 Project Structure

### Backend

backend/
├── server.js
├── config/
│ ├── db.js
│ └── mail.js
├── models/
│ ├── User.js
│ └── Student.js
├── controllers/
│ ├── authController.js
│ └── studentController.js
├── routes/
│ ├── authRoutes.js
│ └── studentRoutes.js
├── middlewares/
│ ├── authMiddleware.js
│ └── roleMiddleware.js
├── utils/
│ ├── generateToken.js
│ └── sendEmail.js
└── .env

### Frontend
frontend/
├── src/
│ ├── api/
│ │ └── axios.js
│ ├── context/
│ │ └── AuthContext.jsx
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── ProtectedRoute.jsx
│ │ └── RoleRoute.jsx
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── VerifyEmail.jsx
│ │ ├── ForgotPassword.jsx
│ │ ├── ResetPassword.jsx
│ │ ├── AdminDashboard.jsx
│ │ └── StudentDashboard.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css

yaml
Copy code

```

---

## 🔑 Environment Variables

### Backend `.env`
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret

MAILTRAP_HOST=sandbox.smtp.mailtrap.io
MAILTRAP_PORT=587
MAILTRAP_USER=your_mailtrap_user
MAILTRAP_PASS=your_mailtrap_password
```

CLIENT_URL=http://localhost:5173
⚙️ Installation & Setup (Local)
1️⃣ Clone Repository
bash
Copy code
git clone https://github.com/ish29-code/sol9x.git
cd sol9x
2️⃣ Backend Setup
bash
Copy code
cd backend
npm install
npm start
3️⃣ Frontend Setup
bash
Copy code
cd frontend
npm install
npm run dev
🔄 Application Flow
User signs up

Verification email is sent

User verifies email

User logs in

JWT token is generated

User is redirected based on role:

Admin → Admin Dashboard

Student → Student Dashboard

🧠 Learning Outcomes
Implemented full authentication lifecycle

Practical use of JWT & bcrypt

Email verification & password recovery workflow

Clean MERN architecture

Deployment using Render

Debugged real-world issues (CORS, SMTP, env configs)

👩‍💻 Author
Ishika Deshpande
Computer Science Engineering Student
Full Stack MERN Developer

🔗 GitHub: https://github.com/ish29-code

⭐ Final Note
This project follows industry best practices and is suitable for:

Assignments

Internships

Interviews

Thank you for reviewing this project 🙌

yaml
Copy code

---

If you want next, I can:
- ✉️ Write **submission email**
- 🎤 Prepare **interview explanation**
- 📸 Add **screenshots section**
- 📄 Add **API documentation**

Just say the word 💙







