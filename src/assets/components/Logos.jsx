import { useState } from 'react';
import { posters } from '../data/posters';
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';


const Logos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const logos = posters.filter(poster => poster.type === "Logo");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Logos</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Logos
        </p>
        <p className="sub-text">
          This page shows a collection of logos designed for different brands.
          Each logo is simple, strong, and easy to remember.
          The designs show the brand’s style and help people connect with it quickly.
          Each logo stands out and tells a clear story about the brand.
        </p>

        <br />

        <div className="project-info">
          {logos.map((poster, index) => (
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
          <img src={selectedImage} alt="Full Size Logo" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default Logos;
