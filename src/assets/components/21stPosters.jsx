import { useState } from 'react';
import { posters } from '../data/posters';
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';

const BPosters = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const bPosters = posters.filter(poster => poster.type === "21st Posters");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>21st Posters</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> 21st Posters
        </p>
        <p className="sub-text">
          This design celebrates the special moment of turning 21. It feels exciting, joyful, and full of life.
          The design captures the happiness of the event and makes the birthday feel even more memorable.
          It brings out the fun and importance of the day.
        </p>
        
        <br />

        <div className="project-info">
          {bPosters.map((poster, index) => (
            <div key={index} className="project">
              <img
                src={poster.image}
                loading="lazy"
                alt={poster.project}
                className="poster-image"
                onClick={() => handleImageClick(poster.image)}
              />
            </div>
          ))}
        </div>
      </div>


      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <img src={selectedImage} alt="Full Size Poster" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default BPosters;
