function Home({ onStart }) {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1 className="home-title">BiteFinder 🍽️</h1>
        <p className="home-text">
          Can’t decide where to eat? Answer a few quick questions and get a
          restaurant suggestion made just for you.
        </p>

        <button className="start-button" onClick={onStart}>
          Find My Food
        </button>
      </div>
    </div>
  );
}

export default Home;
