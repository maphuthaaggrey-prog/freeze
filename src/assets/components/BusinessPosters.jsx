import { useState } from 'react';
import { posters } from '../data/posters'; 
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';


const BusinessPosters = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const businessPosters = posters.filter(poster => poster.type === "Business Posters");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Business Posters</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Business Posters
        </p>
        <p className="sub-text">
          The business posters are made to help companies promote their services and offers. They are clear, strong, and made to pull people in.
          Each poster highlights the key message and makes it easy for people to take action. They are eye-catching and easy to understand at first glance.
        </p>

        <br />

        <div className="project-info">
          {businessPosters.map((poster, index) => (
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

      {/* Modal to show full-size image */}
      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <img src={selectedImage} alt="Full Size" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default BusinessPosters;
