import React, {Suspense} from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import {Counter} from "./components/Counter";
import './index.scss'
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";

function App() {
    return (
        <div className="app">
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