import React from 'react';
import './HomeText.scss'

const HomeText = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-count-container">
          <div className="card-count">1</div>
        </div>

        <div className="card-content">
          <h2>Starry Nights: Exploring the Wonders of the Cosmos</h2>
          <p>
          Embark on a mesmerizing journey through the night sky and witness the beauty of distant stars, planets, and galaxies. Discover the mysteries of black holes, supernovae, and cosmic collisions that shape our universe
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-count-container">
          <div className="card-count">2</div>
        </div>
        <div className="card-content">
          <h2>Unveiling the Universe: The Story of Time and Space</h2>
          <p>
          Take a cosmic journey through the depths of time and space. Learn about the birth of stars, the formation of galaxies, and the evolution of the universe. Unravel the secrets of dark matter and dark energy, the enigmatic forces that dominate the cosmos.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-count-container">
          <div className="card-count">3</div>
        </div>
        <div className="card-content">
          <h2>Beyond Our Horizon: The Search for Habitable Worlds</h2>
          <p>
          Delve into the fascinating field of exoplanets and search for habitable worlds beyond our solar system. Discover the potential for alien life and the possibilities of interstellar travel. Join the quest to find Earth-like planets and unlock the mysteries of the universe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeText;
