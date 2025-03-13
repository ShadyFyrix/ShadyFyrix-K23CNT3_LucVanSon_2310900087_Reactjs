import React, { useState, useEffect, useReducer } from "react";
import { LvsThemeProvider } from "./context/LvsThemeContext";
import LvsAddTodo from "./components/LvsAddTodo";
import LvsTodoList from "./components/LvsTodoList";
import { LvsTodoReducer } from "./reducers/LvsTodoReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const LvsApp = () => {
  const [loading, setLoading] = useState(true);
  const [todos, dispatch] = useReducer(LvsTodoReducer, []);
  const [isAdding, setIsAdding] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
    generateStars();
    document.body.className = darkMode ? "dark-mode" : "light-mode"; // Set theme on load
  }, [darkMode]);

  // Generate Moving Stars
  const generateStars = () => {
    const starContainer = document.createElement("div");
    starContainer.classList.add("stars-container");
    document.body.appendChild(starContainer);

    for (let i = 0; i < 80; i++) {
      const star = document.createElement("div");
      star.classList.add("star");

      const size = Math.random() * 5 + 2; // Random size (2px to 7px)
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      const startX = Math.random() * 100; // Random X position
      star.style.left = `${startX}vw`;

      // Random movement directions (left, right)
      const randomX = (Math.random() - 0.5) * 40; // Random -20px to 20px
      star.style.setProperty("--random-x", `${randomX}px`);

      // Random speed (3s to 8s)
      const speed = Math.random() * 5 + 3;
      star.style.setProperty("--speed", `${speed}s`);

      starContainer.appendChild(star);
    }
  };

  // Toggle Theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  const addTodo = (text) => {
    setIsAdding(true);
    setSuccessMessage("");

    setTimeout(() => {
      dispatch({ type: "ADD_TODO", payload: text });
      setIsAdding(false);
      setSuccessMessage("✅ Add OK!");

      setTimeout(() => setSuccessMessage(""), 2000);
    }, 1000);
  };

  const toggleComplete = (id) => dispatch({ type: "TOGGLE_TODO", payload: id });
  const removeTodo = (id) => dispatch({ type: "REMOVE_TODO", payload: id });

  return (
    <LvsThemeProvider>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        {loading ? (
          <div className="loading-screen">
            <div className="spinner-border text-primary" role="status"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <div className="app-container">
            <div className="todo-container">
              <h1 className="title">
                <i className="fas fa-tasks"></i> Quản Lý Công Việc
              </h1>

              {/* Theme Toggle */}
              <button className="theme-toggle" onClick={toggleTheme}>
                <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
                {darkMode ? " Chuyển sang Sáng" : " Chuyển sang Tối"}
              </button>
              {isAdding && (
                <div className="loading-overlay">
                  <div className="spinner"></div>
                  <p>Đang thêm...</p>
                </div>
              )}

              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}

              <LvsAddTodo addTodo={addTodo} />
              <LvsTodoList
                todos={todos}
                toggleComplete={toggleComplete}
                removeTodo={removeTodo}
              />
            </div>
          </div>
        )}
      </div>
    </LvsThemeProvider>
  );
};

export default LvsApp;
