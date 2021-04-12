import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./style.module.css";
import {useMediaQuery} from "react-responsive";

export interface CarruselProps {

}

const Carrusel: React.SFC<CarruselProps> = () => {
    const [Porcent, setPorcent] = useState(80);
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    useEffect(() => {
        if (isTabletOrMobile) {
            setPorcent(80)
        }else{
            setPorcent(50)
        }
    }, []);
    const mainGroupId = 'Main';
    return (
        <div className={styles.body_carousel_container}>
            <h2 className={styles.body_carousel_title}>Our Services</h2>
            <div>
                <Carousel
                    centerMode
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    centerSlidePercentage={Porcent}
                    // autoPlay={false}
                    infiniteLoop={true}
                >
                    <div className={styles.body_carousel_card_container}>
                        <img src="/img/cuarto.JPG" />
                        {/* <p className={styles.body_carousel_legend}>Cuarto USI</p> */}
                        <p className={styles.body_carousel_legend}>Intensive Care Unit</p>
                    </div>
                    <div className={styles.body_carousel_card_container}>
                        <img src="/img/tomografo2.JPG" />
                        <p className={styles.body_carousel_legend}>Tomography</p>
                    </div>
                    <div className={styles.body_carousel_card_container}>
                        <img src="/img/camara_hiperbarica.JPG" />
                        <p className={styles.body_carousel_legend}>Hyperbaric chambers</p>
                        {/* <p className={styles.body_carousel_legend}>Camara Hiperbarica</p> */}
                    </div>
                    <div className={styles.body_carousel_card_container}>
                        <img src="/img/ambulancia_2.jpg" />
                        <p className={styles.body_carousel_legend}>Ambulance</p>
                    </div>
                    {/* <div className={styles.body_carousel_card_container}>
                        <img src="/img/lobby.JPG" />
                        <p className={styles.body_carousel_legend}>Lobby</p>
                    </div> */}
                </Carousel>
            </div>
        </div>
    );
}

export default Carrusel;