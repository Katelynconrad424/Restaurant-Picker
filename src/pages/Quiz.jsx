import { useState } from "react";

function Quiz({ onFinish }) {
  const questions = [
    {
      question: "What kind of food are you craving?",
      options: ["mexican", "italian", "japanese", "american", "healthy"],
    },
    {
      question: "What price range sounds best?",
      options: ["cheap", "medium", "expensive"],
    },
    {
      question: "What kind of vibe do you want?",
      options: ["casual", "fancy", "fast"],
    },
    {
      question: "How far do you want to go?",
      options: ["close", "medium", "far"],
    },
    {
      question: "Do you want dine-in or takeout?",
      options: ["dine-in", "takeout"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  function handleNext() {
    if (selectedAnswer === "") return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      onFinish();
    }
  }

  return (
    <div className="quiz-page">
      <div className="quiz-card">
        <p className="question-count">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2 className="quiz-question">{questions[currentQuestion].question}</h2>

        <div className="answer-buttons">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              className={
                selectedAnswer === option
                  ? "answer-button selected"
                  : "answer-button"
              }
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button className="next-button" onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? "See Result" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;
