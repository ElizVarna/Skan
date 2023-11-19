import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import styles from "./InvalidPage.module.scss";
import CheckToken from "../../checkToken/CheckToken";

export default function InvalidPage() {
    return (
        <>
            <CheckToken unauthRedirect="/" />

            <Header />
            <main className={styles.content}>
                <h1>Увы :(</h1>
                <br />
                <h1>Такой страницы у нас нет.</h1>
            </main>
            <Footer />
        </>
    );
}