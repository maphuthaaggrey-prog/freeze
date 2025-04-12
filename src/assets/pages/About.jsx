import image from '../images/about.jpg'
import { Helmet } from 'react-helmet';
const About = () => {
    return ( 
        <>
              <Helmet>
                    <title>About</title>
            </Helmet>
        <div className="hero-container">
                            <p className="sub-text" style={{ fontSize: "20px", marginBottom: '1em', fontWeight: '700'}}>Respect My Hustle: The Vision and Passion of Freeze</p>
          
    <div className="about">
    <img src={image} className='about-image'></img>
        <p className="sub-text">I'm Rodger Maphutha, born in Ga Masemola in March 2003 — also known as Freeze. I'm a creative entrepreneur with a passion for many things. I design graphics, run my own clothing brand called Respect My Hustle, and I enjoy drawing and photography.
                                <br />
                                
                                <br />
                                Creativity runs deep in my family, and I guess you could say I inherited the talent. Growing up, I was always surrounded by art, music, and design — it’s in my blood. I started drawing at a young age, sketching anything that came to mind, and over time, that love for art naturally evolved into graphic design.
                                <br />
                                
                                <br />
                                Design became more than just a hobby for me — it became a way to express myself and bring ideas to life. Whether it's creating logos, building brand identities, or designing visuals for my clothing line, I put my heart into every project.
                                <br />
                                <br />
                                
                                Outside of design, I also make music. It's another outlet where I get to share my energy and creativity with the world. Every beat, every lyric, every design — they all come from the same place: a deep love for creating.
                                <br />
                                
                                <br />
                                You might wonder why I always say "Respect My Hustle." It's simple: I believe hard work deserves respect. And I'm not just talking about my own efforts, but everyone's. When I say "Respect My Hustle," I'm asking you to recognize the dedication and hustle that goes into chasing dreams. I'm proud of what I do, and I hope you’ll respect that.</p>
                                    
    </div>
    <p className="line">
            <span></span>
            <span></span>
            <span></span>
            <span></span>

        </p>
    <div className="developer">
        <button>Powered. by<a href="/"><p className="dev-logo"><span>Aa</span>ven</p></a></button>
    </div>
    </div>
    </>
     );

}
 
export default About;