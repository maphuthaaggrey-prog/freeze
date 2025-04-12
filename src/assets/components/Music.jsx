import { music as musicData } from '../data/Music.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/right arrow.png'
import play from '../images/play.png'
import { Helmet } from 'react-helmet';

const Music = () => {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        setMusic(musicData); 
    }, []);
    return ( 
        
    
    <>
                  <Helmet>
                     <title>Music</title>
                  </Helmet>
                <div className="hero-container">
                <p className="sub-text" style={{ fontSize: "20px", marginBottom: '.5em', fontWeight: '800' }}><img src={arrow}></img>Listen to my Music</p>
                <p className="sub-text" style={{ marginBottom: '1.2em'}}>Check out my music and the stories behind each track that reflect my journey and creativity.</p>
                <div className="song-info">
                    {music.map((project, index) => (
                        <Link
                            to={
                                project.type === "Business Posters"
                                ? `/business-posters`
                                : project.type === "Event Posters"
                                ? `/event-posters`
                                : project.type === "Art Covers"
                                ? `/art-covers`
                                : project.type === "Booking Posters"
                                ? `/booking-posters`
                                : project.type === "Logo"
                                ? `/logos`
                                : project.type === "Merch"
                                ? `/merch`
                                : project.type === "Soccer Posters"   
                                ? `/soccer-posters`
                                : project.type === "21st Posters"
                                ? `/21st-posters`
                                : "/"
                            }
                            key={index}
                            >
                            <div className="music">
                                <img src={project.image} loading="lazy" alt={project.project} className="song-image" />
                                <div className="music-info">
                                    <div style={{  maxWidth: '82%'}}>
                                    <p className="music-name">{project.name}</p>
                                    <p className="song-artist">{project.artist}</p>
                                    <p className="song-artist">Prod. {project.producer}</p>
                                    </div>
                                    <div className="music-play">
                                        <img src={play} alt="play" className="play-button" />
                                    </div>
                                </div>
                                <br />
                            </div>
                            </Link>
                    ))}
                </div>
            </div>
    
    </> );
}
 
export default Music;