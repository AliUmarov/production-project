import React, {Suspense} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
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