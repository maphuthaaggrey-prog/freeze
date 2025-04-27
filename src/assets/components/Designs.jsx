import { categories as categoryData } from '../data/categories.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../images/right arrow.png'
import { Helmet } from 'react-helmet';
const Designs = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoryData); 
    }, []);
    return (
        <>       
        <Helmet>
             <title>Designs</title>
        </Helmet>

            <div className="hero-container">
                <p className="sub-text" style={{ fontSize: "20px", marginBottom: '.5em', fontWeight: '800' }}><img src={arrow}></img>Categories</p>
                <p className="sub-text" style={{ marginBottom: '1.2em'}} >Browse by Category and See What I've Designed</p>
                <div className="project-info">
                    {categories.map((project, index) => (
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
                                : project.type === "Portraits"
                                ? `/portraits`
                                : "/"
                            }
                            key={index}
                            >
                            <div className="project">
                                <img src={project.image} loading="lazy" alt={project.project} className="project-image" />
                                <p className="project-name">{project.project}</p>
                                <p className="project-desc">{project.description}</p>
                            </div>
                            </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Designs;
