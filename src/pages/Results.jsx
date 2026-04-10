import restaurants from "../data/restaurants";

function Results({ answers, onRestart }) {
  let bestMatch = null;
  let bestScore = -1;

  for (let i = 0; i < restaurants.length; i++) {
    let currentRestaurant = restaurants[i];
    let score = 0;

    if (currentRestaurant.cuisine === answers.cuisine) {
      score = score + 1;
    }

    if (currentRestaurant.price === answers.price) {
      score = score + 1;
    }

    if (currentRestaurant.vibe === answers.vibe) {
      score = score + 1;
    }

    if (currentRestaurant.distance === answers.distance) {
      score = score + 1;
    }

    if (currentRestaurant.dineType === answers.dineType) {
      score = score + 1;
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = currentRestaurant;
    }
  }

  return (
    <div className="results-page">
      <div className="results-card">
        <h1 className="results-title">Your Match 🍽️</h1>

        {bestMatch ? (
          <>
            <h2 className="restaurant-name">{bestMatch.name}</h2>
            <p className="results-text">
              This restaurant matches your preferences the best based on your
              answers.
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
          <p className="results-text">No match found.</p>
        )}

        <button className="restart-button" onClick={onRestart}>
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Results;
