import React from "react";
import styles from "./Footer.module.scss";
import LogoGreenSVG from "../../assets/skan_logo_white.svg"

export default function Footer() {
    return (
        <div className={styles.parent}>
            <div className={styles.footer_wrapper}>
                <img src={LogoGreenSVG} alt="LogoGreenSVG" className="logo" />
                
                <div className={styles.text}>
                    <p>
                        г. Москва, Цветной б-р, 40 <br />
                        +7 495 771 21 11 <br />
                        info@skan.ru
                    </p>
                    <span>Copyright, {new Date().getFullYear()}</span>
                </div>
            </div>
        </div>
    );
}