import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { ReactComponent as Logo1SVG } from "../../assets/skan_logo_white.svg";
import Logo1SVG from '../../assets/skan_logo_white.svg';
import { ReactComponent as Logo2SVG } from "../../assets/skan_logo_green.svg";
import { ReactComponent as MenuSVG } from "../../assets/menu_burger.svg";
import { ReactComponent as CrossSVG } from "../../assets/cross.svg";
import styles from "./Header.module.scss";
import ProfileWidget from "../profileWidget/ProfileWidget";
import Menu from "../menu/Menu";


export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    
    const menuClickHandler = () => {
        setMenuOpen(!isMenuOpen);
    }

    
    return (
        <>
            {(isMenuOpen && 
                <div className={styles.parent_menu}>
                    <div className={styles.menu_header_wrapper}>
                        <img src={Logo1SVG} alt="Logo1SVG" className="logo" />
                        <CrossSVG className={styles.cross} onClick={menuClickHandler} />
                    </div>

                    <Menu onBtnClick={() => setMenuOpen(false)} />
                </div>)
                ||
                (<div className={styles.parent}>
                    <a href="/"> <Logo2SVG className={styles.logo} />   </a>
                    <MenuSVG className={styles.menu} onClick={menuClickHandler} />

                    <nav>
                        <NavLink to="/" className={styles.link}>Главная</NavLink>
                        <NavLink to="/" className={styles.link}>Тарифы</NavLink>
                        <NavLink to="/" className={styles.link}>FAQ</NavLink>
                    </nav>

                    <ProfileWidget />
                </div>)
            }
        </>
    );
}