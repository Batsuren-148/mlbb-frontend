import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import RegisterPage from "./pages/register_page";
import LoginPage from "./pages/login_page";
import HomePage from "./pages/home_page";
import HeroesPage from "./pages/heroes_page";
import HeroDetail from "./pages/heroDetail";
import HeroVersus from "./pages/hero_vs_page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const isLogged = localStorage.getItem("isLoggedIn");
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    console.log(isLogged);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/heroes" element={<HeroesPage />} />
                    <Route path="/vs" element={<HeroVersus />} />
                    <Route path="/heroes/:id" element={<HeroDetail />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
