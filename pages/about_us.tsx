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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ultrices fermentum massa viverra lacinia. Suspendisse a auctor elit, quis placerat nunc. Proin in consequat purus, a facilisis odio. Quisque mattis, orci ut lobortis molestie, turpis est eleifend est, et mollis odio velit vitae diam. Curabitur vel tempus enim, non suscipit nulla. Nunc ex mauris, dictum a varius non, molestie eget est. Cras consectetur, ligula quis vestibulum gravida, lacus erat vestibulum neque, a lobortis nulla enim ac libero. Vivamus nec odio sapien. Aenean velit elit, ultricies eu justo sed, interdum lacinia sapien. Suspendisse potenti. Aenean maximus libero at nisi ultrices condimentum. Morbi et purus maximus, luctus eros sed, gravida urna. Fusce egestas, justo et facilisis tempus, nulla quam maximus dolor, vitae pulvinar purus mi in odio.</p>
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