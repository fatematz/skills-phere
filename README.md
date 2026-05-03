# Skills-Phere

A modern online learning platform where learners can discover courses, learn from top instructors, and grow their skills — all in one place.

---

## 🔗 Live Site

[skills-phere.vercel.app](https://skills-phere.vercel.app)

---

## 📖 Short Description

SkillSphere is a full-stack online course platform built with Next.js. Users can browse structured courses, view instructor profiles, and manage their own accounts with secure authentication. The platform is designed to be fast, responsive, and beginner-friendly.

---

## 🛠️ Technologies Used

- **Next.js 16** — App Router, Server Components
- **React 19** — UI Components
- **Tailwind CSS v4** — Styling
- **DaisyUI** — UI Component Library
- **Better Auth** — Authentication (Login & Register)
- **MongoDB** — Database
- **Animate.css** — Animations
- **Swiper.js** — Card Sliders
- **Lucide React** — Icons
- **React Toastify** — Toast Notifications
- **React Hook Form** — Form Handling

---

## ✨ Key Features

### 1. 🔐 Secure Authentication
Users can register and log in securely using Better Auth. Protected routes ensure only logged-in users can access course details and their profile page.

### 2. 📚 Course Browser with Details
Browse top-rated courses sorted by rating. Each course has a dedicated details page showing duration, level, instructor, curriculum, and description.

### 3. 👤 Editable User Profile
Users can view and update their profile name and photo URL directly from their profile page — with a clean UI and instant toast feedback on save.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.js
│   ├── layout.js
│   ├── auth/
│   │   ├── login/
│   │   └── register/
│   ├── profile/
│   └── courseCard/
├── components/
│   ├── Banner.jsx
│   ├── TopCourse.jsx
│   ├── TopInstructors.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
└── courses.json
```
