# 🎨 My Art Gallery

A modern, interactive art gallery web application built with **Vite**, **TypeScript**, **Tailwind CSS**, and **Supabase** — letting users browse, explore, and engage with art pieces in a beautiful UI.

🌐 Live Demo: https://my-art-gallery-pro.vercel.app

---

## 🚀 Features

- 📋 **Browse Art Collections** – View featured art pieces with details.
- 🎨 **Responsive UI** – Designed with Tailwind CSS for great UX on all devices.
- 🔐 **Supabase Backend** – Data storage, authentication, and serverless functions.
- ⚡ **Fast Development** – Built with Vite for ultra-fast bundling and HMR.
- 🛠️ Easily extendable architecture for additional features (e.g., user accounts, likes, comments).

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|------------|
| ⚙️ Build Tool | Vite |
| 🧪 Language | TypeScript |
| 💅 Styling | Tailwind CSS |
| 🗄 Backend/DB | Supabase (PostgreSQL + Auth) |
| 📄 UI | HTML + React (or your chosen framework) |

---

## 📁 Project Structure

my-art-gallery/

  ```bash
   ├── public/ # Static public assets
   ├── src/ # Frontend source code
   ├── supabase/ # Supabase config & migrations
   ├── .env # Environment configs (ignored)
   ├── package.json # Dependencies & scripts
   ├── vite.config.ts # Vite config
   ├── tailwind.config.ts # Tailwind config
   └── README.md # Project README


---

## 🧾 Prerequisites

Make sure you have installed:

- Node.js (v16+)
- npm or yarn
- A Supabase project (for DB, Auth, Storage)

---

## 🔧 Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/Bhanu99517/my-art-gallery.git
   cd my-art-gallery

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install

3. **Configure environment variables**
  Create a .env file in the root:

   ```bash
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_public_anon_key

Replace with your Supabase project keys.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev

Open your browser at http://localhost:5173.

---

##📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

##💬 Contact

Developed by Bhanu99517
GitHub: https://github.com/Bhanu99517
