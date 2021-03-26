import styles from "./style.module.css"

export interface headerProps {
    
}
 
const header: React.SFC<headerProps> = () => {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src="/img/logo.png" alt=""/>
            <div className={styles.navLinks}>
                <span>Home</span>
                <span>Services</span>
                <span>International Insurance</span>
                <span>About us</span>
                <span>Contact us</span>
            </div>
        </div>
    );
}
 
export default header;