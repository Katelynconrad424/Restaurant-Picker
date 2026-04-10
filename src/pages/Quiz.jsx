import { useState } from "react";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

function Quiz({ onFinish }) {
  const questions = [
    {
      key: "cuisine",
      question: "What kind of food are you craving?",
      options: ["mexican", "italian", "japanese", "american", "healthy"],
    },
    {
      key: "price",
      question: "What price range sounds best?",
      options: ["cheap", "medium", "expensive"],
    },
    {
      key: "vibe",
      question: "What kind of vibe do you want?",
      options: ["casual", "fancy", "fast"],
    },
    {
      key: "distance",
      question: "How far do you want to go?",
      options: ["close", "medium", "far"],
    },
    {
      key: "dineType",
      question: "Do you want dine-in or takeout?",
      options: ["dine-in", "takeout"],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [userAnswers, setUserAnswers] = useState({});

  function handleNext() {
    if (selectedAnswer === "") return;

    const currentKey = questions[currentQuestion].key;

    const updatedAnswers = {
      ...userAnswers,
      [currentKey]: selectedAnswer,
    };

    setUserAnswers(updatedAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    } else {
      onFinish(updatedAnswers);
    }
  }

  return (
    <div className="quiz-page">
      <div className="quiz-card">
        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />

        <QuestionCard
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          handleNext={handleNext}
          isLastQuestion={currentQuestion === questions.length - 1}
        />
      </div>
    </div>
  );
}

export default Quiz;
