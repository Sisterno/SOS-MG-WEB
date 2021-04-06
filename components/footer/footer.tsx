import styles from "./style.module.css"
export interface FooterProps {

}

const Footer: React.SFC<FooterProps> = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.dataContainer}>
                <img src="/img/logo_final.png" alt="" className={styles.logo} />
                <div>
                    <span>Partners</span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <span>Street address</span>
                    <span></span>
                    <span></span>
                </div>
                <div>
                    <span>Contact us</span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <span className={styles.derechos}>© Copyright 2020. All Rights Reserved by Clinica SOS.</span>
        </div>
    );
}

export default Footer;