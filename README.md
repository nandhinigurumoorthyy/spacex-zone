# 🛰️ SpaceX Zone Webapp

A responsive React + TypeScript + TailwindCSS application that fetches data from the [SpaceX API](https://github.com/r-spacex/SpaceX-API/tree/master/docs) and displays information about **rockets, launches, and history**.

---

## 🔗 Demo

👉 [Live Demo](https://your-demo-link.vercel.app)

---



## ✨ Features

* **Home Page**: Overview with SpaceX company info, upcoming launches, and navigation.
* **Rockets Page**:

  * List of all rockets with images, descriptions, and search/filter by name.
  * Detail page for each rocket with full technical details.
* **Launches Page**:

  * Past and upcoming launches displayed with mission details.
  * Click on a launch to view more information.
* **History Page**: Timeline of important SpaceX events.
* **Routing**: Implemented with `react-router-dom`.

---

## 🛠️ Tech Stack

* [React 18](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [TailwindCSS](https://tailwindcss.com/)
* [Vite](https://vitejs.dev/)
* [React Router](https://reactrouter.com/)
* [SpaceX REST API](https://github.com/r-spacex/SpaceX-API/tree/master/docs)
  
---

## 📂 Project Structure

```
src/
 ├─ components/       # Reusable UI components
 ├─ hooks/            # Custom hooks (e.g. useFetch)
 ├─ pages/            # Main pages: Home, Rockets, Launches, History
 ├─ types/            # TypeScript type definitions (Rocket, Launch, etc.)
 ├─ App.tsx           # App entry with routing
 ├─ main.tsx          # React DOM entry
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/nandhinigurumoorthyy/spacex-zone.git
cd spacex-info-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

---

## 📜 License

This project uses public SpaceX API data. Not affiliated with SpaceX.

