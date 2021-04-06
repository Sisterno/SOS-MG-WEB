import styles from "./style.module.css"
export interface HeroProps {
    
}
 
const Hero: React.SFC<HeroProps> = () => {
    return (
        <div className={styles.heroContainer}>
            {/* <div className={styles.heroText}> */}
            <div className={styles.heroImg}/>  
                <span className={styles.sos}>SOS</span>
                <span className={styles.medGrText}>Medical Group</span>
                <p>The most modern medical center and the most distinguished medical staff to provide healthcare services of the highest quality</p>
                <button className={styles.button}>Insurences</button>
            {/* </div> */}
                 
            {/* <img src="/img/heroImg3.png" alt="" className={styles.heroImg}/> */}
        </div>
    );
}
 
export default Hero;