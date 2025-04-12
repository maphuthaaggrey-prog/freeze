import { useState } from 'react';
import { posters } from '../data/posters';
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';

const Merch = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const merchandise = posters.filter(poster => poster.type === "Merch");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Merchandise</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Merchandise
        </p>
        <p className="sub-text">
          Respect My Hustle is a clothing brand that stands for hard work and ambition.
          The designs are bold, clean, and made to inspire people to chase their dreams.
          Each item is made to look good and feel comfortable.
          The brand shows pride, confidence, and the power of staying true to your hustle.
        </p>

        <br />

        <div className="project-info">
          {merchandise.map((poster, index) => (
            <div key={index} className="project">
              <img
                src={poster.image}
                loading="lazy"
                alt={poster.project}
                className="logo-image"
                onClick={() => handleImageClick(poster.image)}
              />
            </div>
          ))}
        </div>
      </div>


      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <img src={selectedImage} alt="Full Size Merch" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default Merch;
