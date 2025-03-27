import React, { Suspense } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import { TodoProvider } from "./context/TodoContext";
import Home from "./components/Home";
import About from "./components/About";
import Stats from "./components/Stats";
import LoadingSpinner from "./components/LoadingSpinner";
import "./App.css";

const App: React.FC = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
        <div className="app">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </TodoProvider>
  );
};

export default App; 