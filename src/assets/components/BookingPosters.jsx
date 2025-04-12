import { useState } from 'react';
import { posters } from '../data/posters'; 
import arrow from '../images/right arrow.png';
import { Helmet } from 'react-helmet';

const BookingPosters = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const bookingPosters = posters.filter(poster => poster.type === "Booking Posters");

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Helmet>
        <title>Booking Posters</title>
      </Helmet>

      <div className="hero-container">
        <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1.2em', fontWeight: '800' }}>
          <img src={arrow} alt="Arrow" /> Booking Posters
        </p>
        <p className="sub-text">
          Booking posters are made to promote artists and make it easy for people to book them. They show the artist’s name, contact details, and what they offer.
          These posters help artists reach a bigger audience and get more bookings. They make it simple for event planners and fans to connect with the artist.
        </p>

        <br />

        <div className="project-info">
          {bookingPosters.map((poster, index) => (
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

export default BookingPosters;
