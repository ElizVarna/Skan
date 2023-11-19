import React, {useEffect} from "react";
import AuthWidget from "../../authWidget/AuthWidget";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import styles from "./AuthPage.module.scss";
import { ReactComponent as Picture } from "../../../assets/authorization.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const isAuth = useSelector(state => state.account.isAuth);

    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth) navigate("/");
    });

    return (
        <>
            <Header />
            <main className={styles.content}>
                <div className={styles.flex__container}>
                    <span className={styles.title}>
                        Для оформления подписки 
                        на тариф, необходимо авторизоваться.
                    </span>

                    
                    <Picture className={styles.picture}/>
                </div>
                

                <AuthWidget />

            </main>
            <Footer />
        </>
    );
}