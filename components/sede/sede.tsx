import styles from "./style.module.css"
export interface SedeProps {
    
}
 
const Sede: React.SFC<SedeProps> = () => {
    return (
        <div className={styles.body_sede_container}>
            <h2>Headquarter</h2>
            <div className={styles.body_sede_info_container}>
                <view className={styles.body_sede_img}/>
                <h3>SOS Medical Group Clinic</h3>
                <p>SOS clinic with modern medical technology infrastructure and efficient procedures fully complemented with a doctor and highly qualified staff care</p>
            </div>
        </div>
    );
}
 
export default Sede;