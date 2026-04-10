import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  function goToQuiz() {
    setCurrentPage("quiz");
  }

  function goToResults() {
    setCurrentPage("results");
  }

  function goHome() {
    setCurrentPage("home");
  }

  return (
    <div>
      {currentPage === "home" && <Home onStart={goToQuiz} />}
      {currentPage === "quiz" && <Quiz onFinish={goToResults} />}
      {currentPage === "results" && <Results onRestart={goHome} />}
    </div>
  );
}

export default App;
