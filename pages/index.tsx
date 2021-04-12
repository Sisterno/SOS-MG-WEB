import Hero from "../components/hero/hero";
import Carrusel from "../components/carrusel/carrusel";
import Aliance from "../components/aliance/aliance";
import Sede from "../components/sede/sede";


export interface LandingPageProps {
    
}
 
const LandingPage: React.SFC<LandingPageProps> = () => {
    return (
        <div>
            <Hero/>
            <Carrusel/>
            <Sede/>
            {/* <Aliance/> */}
        </div>
    );
}
 
export default LandingPage;