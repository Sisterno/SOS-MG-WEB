import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./style.module.css";

export interface CarruselProps {

}

const Carrusel: React.SFC<CarruselProps> = () => {
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
                    centerSlidePercentage={80}
                    autoPlay={false}
                >

                    <div>
                        <img src="/img/camara_hiperbarica.JPG" />
                        <p className={styles.body_carousel_legend}>Camara Hiperbarica</p>
                        {/* <p className={styles.body_carousel_legend}>Camara Hiperbarica</p> */}
                    </div>
                    <div>
                        <img src="/img/cuarto.JPG" />
                        {/* <p className={styles.body_carousel_legend}>Cuarto USI</p> */}
                        <p className={styles.body_carousel_legend}>Cuarto USI</p>
                    </div>
                    <div>
                        <img src="/img/tomografo2.JPG" />
                        <p className={styles.body_carousel_legend}>Tomografo</p>
                    </div>
                    <div>
                        <img src="/img/ambulancia.JPG" />
                        <p className={styles.body_carousel_legend}>Ambulancia</p>
                    </div>
                    <div>
                        <img src="/img/lobby.JPG" />
                        <p className={styles.body_carousel_legend}>Lobby</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Carrusel;