function QuestionCard({
  question,
  options,
  selectedAnswer,
  setSelectedAnswer,
  handleNext,
  isLastQuestion,
}) {
  return (
    <>
      <h2 className="quiz-question">{question}</h2>

      <div className="answer-buttons">
        {options.map((option) => (
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

      <button
        className="next-button"
        onClick={handleNext}
        disabled={selectedAnswer === ""}
      >
        {isLastQuestion ? "See Result" : "Next"}
      </button>
    </>
  );
}

export default QuestionCard;
