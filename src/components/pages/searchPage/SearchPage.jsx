import React from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import { ReactComponent as DocumentSVG } from "../../../assets/document.svg";
import { ReactComponent as FoldersSVG } from "../../../assets/folders.svg";
import { ReactComponent as PictureSVG } from "../../../assets/search_rocket.svg";
import styles from "./SearchPage.module.scss";
import SearchWidget from "../../searchWidget/SearchWidget";
import CheckToken from "../../checkToken/CheckToken";

export default function SearchPage() {
    return (
        <>
            <CheckToken unauthRedirect="/" />

            <Header />
            <main className={styles.content}>
                <h1>
                    Найдите необходимые данные в пару кликов.
                </h1>

                <h2>
                    Задайте параметры поиска. <br />
                    Чем больше заполните, тем точнее поиск
                </h2>

                <SearchWidget />

                <DocumentSVG className={styles.document} />
                <FoldersSVG className={styles.folders} />
                <PictureSVG className={styles.picture} />
            </main>
            <Footer />
        </>
    );
}