import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./style.module.css";

export interface AlianceProps {
    
}
 
const Aliance: React.SFC<AlianceProps> = () => {
    return ( 
        <div className={styles.body_aliance_container}>
            <h2>Aliances</h2>
            <Carousel
                centerMode
                // showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                centerSlidePercentage={80}
                // autoPlay={false}
            >
                <div className={styles.body_aliance_slide}>
                    <img src="/img/hotel_cusco_logo.png" />
                    <img src="/img/hotel_cusco_logo.png" />
                    <img src="/img/hotel_cusco_logo.png" />
                </div>
                <div className={styles.body_aliance_slide}>
                    <img src="/img/hotel_cusco_logo.png" />
                    <img src="/img/hotel_cusco_logo.png" />
                    <img src="/img/hotel_cusco_logo.png" />
                </div>
                <div className={styles.body_aliance_slide}>
                    <img src="/img/hotel_cusco_logo.png" />
                    <img src="/img/hotel_cusco_logo.png" />
                    <img src="/img/hotel_cusco_logo.png" />
                </div>
            </Carousel>
        </div>
     );
}
 
export default Aliance;