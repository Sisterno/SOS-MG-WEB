import { medicalStaff } from "../utils/data";
import style from "../styles/AboutUs.module.css";
import { url } from "node:inspector";
import { getURL } from "next/dist/next-server/lib/utils";
export interface aboutUsProps {
    
}
 
const aboutUs: React.SFC<aboutUsProps> = () => {
    return ( 
        <div className={style.au_main_container}>
            <div className={style.au_main_container_second}>
                <h2>About us</h2>
                <p>Somos  una empresa privada del rubro médico  constituida por el Dr. Rodolfo Quispe Orihuela, prestadora de  servicios de salud las 24 horas. Contamos con profesionales altamente calificados entrenados en medicina de urgencia, desastres y demás, lo que garantiza nuestra calidad y atención personalizada en cada uno de nuestros servicios. </p>
            </div>
            <div className={style.au_main_container_second}>
                <h2>Medical Staff</h2>
                <div className={style.au_main_staff_container}>
                    {
                        medicalStaff.map(medical=>{
                            return (
                                <div key={medical.id} className={style.au_main_staff_cart} >
                                    <div style={{backgroundImage:`url(/img/medicalStaff/${medical.img})`}}/>
                                    <span>{medical.name}</span>
                                    <span>{medical.title}</span>
                                    <span>CMP - {medical.cmp}</span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
     );
}
 
export default aboutUs;