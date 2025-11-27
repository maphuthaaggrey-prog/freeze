import Hero from '../components/Hero'
import Work from '../components/Work'
import Music from '../components/Music';
import { Helmet } from 'react-helmet';
const Home = () => {
    return ( 
        <>
                          <Helmet>
                     <title>Respect My Hustle</title>
                  </Helmet>
            <Hero />
            <Work />

         </> 
    );
}
 
export default Home;