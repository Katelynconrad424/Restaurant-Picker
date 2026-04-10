import { useState } from "react";
import restaurants from "../data/restaurants";
import ResultCard from "../components/ResultCard";

function Results({ answers, onRestart }) {
  const [randomPick, setRandomPick] = useState(null);

  function getRandomRestaurant() {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
  }

  let bestMatch = null;
  let bestScore = -1;

  for (let i = 0; i < restaurants.length; i++) {
    let currentRestaurant = restaurants[i];
    let score = 0;

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
      <ResultCard
        bestMatch={bestMatch}
        matchDetails={matchDetails}
        onRestart={onRestart}
        onSurprise={() => setRandomPick(getRandomRestaurant())}
        randomPick={randomPick}
      />
    </div>
  );
}

export default Results;
