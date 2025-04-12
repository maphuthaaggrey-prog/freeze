import { useState } from 'react';
import { posters } from '../data/posters';
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';


const EventPosters = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const eventPosters = posters.filter(poster => poster.type === "Event Posters");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Event Posters</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Event Posters
        </p>
        <p className="sub-text">
          Event posters are made to promote upcoming shows, parties, or special events.
          They catch people’s attention and show important details like time, date, and place.
          The posters create excitement and help bring more people to the event.
          They are bold, clear, and easy to follow.
        </p>

        <br />

        <div className="project-info">
          {eventPosters.map((poster, index) => (
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

export default EventPosters;
