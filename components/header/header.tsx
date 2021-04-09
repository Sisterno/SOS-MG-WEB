import styles from "./style.module.css"
import {useMediaQuery} from "react-responsive";
import { useRef } from "react";
import Link from "next/link";

export interface headerProps {

}

const header: React.SFC<headerProps> = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const RefnavLinks= useRef(null)
    const handleMenuClick = ()=>{
        //@ts-ignore
        if (RefnavLinks.current.style.display =='none') {
            //@ts-ignore
            RefnavLinks.current.style.display = 'flex';
        }else{
            //@ts-ignore
            RefnavLinks.current.style.display = 'none';
        }
    }


    return (
        <nav>
            <div className={styles.container}>
                <img className={styles.logo} src="/img/logo_final.png" alt="" />
                {isTabletOrMobile && (
                    <img src="/img/icon/menu-24px.svg" alt="" className={styles.menuIcon} onClick={handleMenuClick}/>
                )}
                <div className={styles.navLinks} ref={RefnavLinks}>
                    <Link href="/1"><a onClick={handleMenuClick}>Home</a></Link>
                    <Link href="/1"><a onClick={handleMenuClick}>Services</a></Link>
                    <Link href="/internacional_insurance"><a onClick={handleMenuClick}>International Insurance</a></Link>
                    <Link href="/about_us"><a onClick={handleMenuClick}>About us</a></Link>
                    <Link href="/contact_us"><a onClick={handleMenuClick}>Contact us</a></Link>
                </div>
            </div>
        </nav>
    );
}

export default header;