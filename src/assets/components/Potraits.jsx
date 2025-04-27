import { useState } from 'react';
import { posters } from '../data/posters'; 
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';


const Portraits = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const portraits = posters.filter(poster => poster.type === "Portraits");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Portaits</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Portaits
        </p>
        <p className="sub-text">
          The art covers are made for music projects like singles, albums, and mixtapes. They are used as the main image people see when they play the song.
          Each design shows the style and feeling of the music. They help grab attention and make the music look more professional and exciting.
        </p>

        <br />

        <div className="project-info">
          {portraits.map((poster, index) => (
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
          <img src={selectedImage} alt="Full Size" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default Portraits;
