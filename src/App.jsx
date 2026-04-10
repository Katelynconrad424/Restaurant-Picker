import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import "./index.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [answers, setAnswers] = useState({});

  function goToQuiz() {
    setCurrentPage("quiz");
  }

  function finishQuiz(userAnswers) {
    setAnswers(userAnswers);
    setCurrentPage("results");
  }

  function goHome() {
    setCurrentPage("home");
    setAnswers({});
  }

  return (
    <div>
      {currentPage === "home" && <Home onStart={goToQuiz} />}
      {currentPage === "quiz" && <Quiz onFinish={finishQuiz} />}
      {currentPage === "results" && (
        <Results answers={answers} onRestart={goHome} />
      )}
    </div>
  );
}

export default App;
