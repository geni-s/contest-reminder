
# 🔔 CONTEST-REMINDER

Stay Ahead, Conquer Contests with Real-Time Alerts  
![Last Commit](https://img.shields.io/github/last-commit/geni-s/contest-reminder) ![Languages](https://img.shields.io/github/languages/count/geni-s/contest-reminder) ![JavaScript](https://img.shields.io/badge/javascript-71.9%25-yellow)

> Built with the tools and technologies:  
> ![Markdown](https://img.shields.io/badge/Markdown-black?logo=markdown) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)

---

## 📑 Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [License](#license)

---

## 🧾 Overview

**contest-reminder** is a developer-focused tool that automates the retrieval, display, and notification of upcoming coding contests. It simplifies the process of keeping users informed about competitive programming events through real-time data integration and proactive SMS alerts.

---

## 🚀 Getting Started

### ✅ Prerequisites

This project requires the following dependencies:

- Programming Language: JavaScript (Node.js)
- Package Manager: `npm`
- Twilio Account (for SMS sending)

---

### 🛠 Installation

1. **Clone the Repository**

```bash
git clone https://github.com/geni-s/contest-reminder
```

2. **Navigate to Project Directory**

```bash
cd contest-reminder
```

3. **Install Dependencies**

```bash
npm install
```

4. **Create `.env` File**

```env
TWILIO_SID=your_twilio_sid
TWILIO_AUTH=your_twilio_auth_token
TO_PHONE=your_phone_number
```

---

### ▶️ Usage

- **To run the frontend:**

Open `index.html` in your browser to view upcoming contests.

- **To run the reminder backend:**

```bash
node response.js
```

This will check upcoming contests and send SMS reminders 5 minutes before start.

---

## ✨ Features

- Fetch and display upcoming contest information using public APIs
- Automatically check for contests starting soon
- Send SMS alerts using **Twilio API**
- Frontend built with HTML/CSS
- Backend built with Node.js

---

## 📁 Project Structure

```bash
contest-reminder/
├── index.html         # Frontend UI
├── style.css          # Styling (if used)
├── response.js        # Backend reminder logic
├── .env               # Twilio secrets (not committed)
├── README.md          # This file
└── .gitignore         # Prevents .env push
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> _Made with 💻 by [@geni-s](https://github.com/geni-s)_
