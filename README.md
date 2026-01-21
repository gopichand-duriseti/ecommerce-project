
# 🛒 Ecommerce Project (React + Vite)

This is a **frontend Ecommerce web application** built using **React** and **Vite**.
The project is organized with a clean and scalable folder structure for easy development and maintenance.

---

## 📁 Project Structure

```
ECOMMERCE-PROJECT/
│
├── ecommerce-backend/     # Backend service (separate folder)
├── node_modules/          # Installed dependencies
├── public/                # Public static files
├── src/
│   ├── assets/            # Images, icons, and static assets
│   ├── components/        # Reusable UI components
│   ├── pages/             # Page-level components (Home, Cart, Product, etc.)
│   ├── utils/             # Utility/helper functions
│   ├── App.css            # App-level styles
│   ├── App.jsx            # Root React component
│   ├── index.css          # Global styles
│   ├── main.jsx           # Application entry point
│   └── starting-code/     # Initial or reference code
│
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry file
├── package.json           # Project metadata & scripts
├── package-lock.json      # Dependency lock file
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run the Development Server
```bash
npm run dev
```

The application will run at:
```
http://localhost:5173/
```

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS**
- **ESLint**

---

## 🔗 Backend

The backend code is available in the `ecommerce-backend` folder.
To display data on the web page, the backend server must be running.

### Run the backend server
Open a **new terminal window** and run:
```bash
cd ecommerce-backend
npm install
npm run dev
```

⚠️ **Important**: Run the backend in a **separate terminal**.
If the backend is not running, data will not appear on the web page.
---

## 📦 Build for Production

```bash
npm run build
```

---

## 🙌 Contribution

Contributions are welcome.
Feel free to fork the repository and submit pull requests.

---

## 📄 License

This project is created for learning and practice purposes.