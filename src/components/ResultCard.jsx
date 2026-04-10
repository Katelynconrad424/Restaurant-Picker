function ResultCard({
  bestMatch,
  matchDetails,
  onRestart,
  onSurprise,
  randomPick,
}) {
  return (
    <div className="results-card">
      <h1 className="results-title">Your Match 🍽️</h1>

      {bestMatch ? (
        <>
          <h2 className="restaurant-name">{bestMatch.name}</h2>

          <img
            src={bestMatch.image}
            alt={bestMatch.name}
            className="restaurant-image"
          />

          <p className="results-text">
            We picked this for you because it matches your preference for{" "}
            <strong>{matchDetails.join(", ")}</strong>.
          </p>

          <div className="restaurant-details">
            <p>
              <strong>Cuisine:</strong> {bestMatch.cuisine}
            </p>
            <p>
              <strong>Price:</strong> {bestMatch.price}
            </p>
            <p>
              <strong>Vibe:</strong> {bestMatch.vibe}
            </p>
            <p>
              <strong>Distance:</strong> {bestMatch.distance}
            </p>
            <p>
              <strong>Dine Type:</strong> {bestMatch.dineType}
            </p>
          </div>
        </>
      ) : (
        <p>No match found.</p>
      )}

      <button className="restart-button" onClick={onRestart}>
        Try Again
      </button>

      <button
        className="restart-button"
        style={{ marginTop: "10px" }}
        onClick={onSurprise}
      >
        Surprise Me 🎲
      </button>

      {randomPick && (
        <div style={{ marginTop: "20px" }}>
          <h3>Random Pick:</h3>
          <p>{randomPick.name}</p>
        </div>
      )}
    </div>
  );
}

export default ResultCard;
