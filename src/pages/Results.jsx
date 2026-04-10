import { useState } from "react";
import restaurants from "../data/restaurants";

function Results({ answers, onRestart }) {
  const [randomPick, setRandomPick] = useState(null);

  function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
  }

  let bestMatch = null;
  let bestScore = -1;

  // find best match
  for (let i = 0; i < restaurants.length; i++) {
    let currentRestaurant = restaurants[i];
    let score = 0;

    // make cuisine more important
    if (currentRestaurant.cuisine === answers.cuisine) {
      score = score + 3;
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

  // build explanation (only show matching parts)
  let matchDetails = [];

  if (bestMatch) {
    if (bestMatch.cuisine === answers.cuisine) {
      matchDetails.push(answers.cuisine + " food");
    }
    if (bestMatch.price === answers.price) {
      matchDetails.push(answers.price + " price");
    }
    if (bestMatch.vibe === answers.vibe) {
      matchDetails.push(answers.vibe + " vibe");
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
          onClick={() => setRandomPick(getRandomRestaurant())}
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
    </div>
  );
}

export default Results;
