import styles from "./style.module.css"
export interface HeroProps {
    
}
 
const Hero: React.SFC<HeroProps> = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroText}>
                <span className={styles.sos}>SOS</span>
                <span className={styles.medGrText}>Medical Group</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices venenatis luctus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices venenatis luctus. </p>
                <button className={styles.button}>Insurences</button>
            </div>
            <img src="/img/heroImg3.png" alt="" className={styles.heroImg}/>
        </div>
    );
}
 
export default Hero;