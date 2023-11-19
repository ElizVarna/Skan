import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/mainPage/MainPage";
import AuthPage from "./components/pages/authPage/AuthPage";
import ResultsPage from "./components/pages/resultsPage/ResultsPage";
import SearchPage from "./components/pages/searchPage/SearchPage";
import InvalidPage from "./components/pages/invalidPage/InvalidPage";
import CheckTokenWithoutNavigate from "./components/checkToken/CheckTokenWithoutNavigate";

export default function App() {
    return (
        <>
            <CheckTokenWithoutNavigate />

            <BrowserRouter basemname="/">
                <Routes>
                    <Route path="/*" element={<InvalidPage /> } />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/auth" exact element={<AuthPage />} />
                    <Route path="/results" exact element={<ResultsPage />} />
                    <Route path="/search" exact element={<SearchPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
