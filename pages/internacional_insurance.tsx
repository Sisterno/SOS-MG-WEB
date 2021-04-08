import style from "../styles/internacional_insurance.module.css";
import { insurances } from "../utils/data";
// import asd from "/img/icon/search_black_24dp.svg";

export interface InterInsuranceProps {
    
}
 
const InterInsurance: React.SFC<InterInsuranceProps> = () => {
    return ( 
        <div className={style.II_main_container}>
            <h2>International Insurance we accept</h2>
            <div>
				<label className="omrs-input-underlined">
				    <input className={style.II_find_input}/>
                    <img src="/img/icon/search_black_24dp.svg" className={style.II_find_icon}/>
				</label>
			</div>
            <div className={style.II_insurances_container}>
            {
                insurances.map(insu=>{
                    return (
                        <div key={insu.id} className={style.II_insurances_cart} >
                            <div style={{backgroundImage:`url(/img/insurance/${insu.img})`}}/>
                            <span>{insu.name}</span>
                        </div>
                    );
                })
            }
            </div>
        </div>
     );
}
 
export default InterInsurance;