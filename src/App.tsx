import React, {Suspense, useContext} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";


function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}> Главная </Link>
            <Link to={'/about'}>  О сайте </Link>
            <Suspense fallback={<div>...loading</div>}>
                <Routes>
                    <Route path={'/'} element={<AboutPageAsync/>}/>
                    <Route path={'/about'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
}

export default App;