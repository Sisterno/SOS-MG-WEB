import Header from "../components/header/header";
import Hero from "../components/hero/hero";

export interface LandingPageProps {
    
}
 
const LandingPage: React.SFC<LandingPageProps> = () => {
    return (
        <div>
            <Hero/>
        </div>
    );
}
 
export default LandingPage;