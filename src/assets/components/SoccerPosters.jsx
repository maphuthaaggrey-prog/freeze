import { useState } from 'react';
import { posters } from '../data/posters';
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';

const SoccerPosters = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const soccerPosters = posters.filter(poster => poster.type === "Soccer Posters");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Soccer Posters</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Soccer Posters
        </p>
        <p className="sub-text">
          The soccer posters are full of energy and team spirit. They are made to get fans excited for upcoming matches and events.
          Each poster highlights the teams, the game times, and the action to come. They help build excitement and bring people together for the love of the game.
        </p>

        <br />

        <div className="project-info">
          {soccerPosters.map((poster, index) => (
            <div key={index} className="project">
              <img
                src={poster.image}
                loading="lazy"
                alt={poster.project}
                className="soccer-image"
                onClick={() => handleImageClick(poster.image)}
              />
            </div>
          ))}
        </div>
      </div>


      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <img src={selectedImage} alt="Full Size Soccer Poster" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default SoccerPosters;
