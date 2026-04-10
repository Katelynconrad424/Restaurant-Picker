function ProgressBar({ currentQuestion, totalQuestions }) {
  const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="progress-container">
      <p className="question-count">
        Question {currentQuestion + 1} of {totalQuestions}
      </p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
