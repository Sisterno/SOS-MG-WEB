import style from "../styles/ContactUs.module.css";

export interface contactUsProps {
    
}
 
const contactUs: React.SFC<contactUsProps> = () => {
    return ( 
        <div className={style.CU_main_container}>
            <h2>Contact Us</h2>
            <div>
                <span>Whatsapp</span><span>+51 - 84 - 984502726</span>
                <span>Free call</span><span>0800 - 15116</span>
                <span>Phone</span><span>+51 - 84 - 226336 <br/>+51 - 84 254492</span>
            </div>
            <h2>Street Address</h2>
            <span>Urb. La florida 0-3 Wanchaq-Cusco (Centro Medico)</span>
            <span>Mesón de la estrella N°128 Cusco-Cusco</span>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1007.8399672057587!2d-71.96398759773342!3d-13.531280312220202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd5faea858c25%3A0x4fc6287fb82db6b9!2sSOS%20MEDICAL%20GROUP%20CMC!5e0!3m2!1ses-419!2spe!4v1617845960577!5m2!1ses-419!2spe" width="100%" height="450" style={{border:0}} loading="lazy"></iframe>
        </div>
     );
}
 
export default contactUs;