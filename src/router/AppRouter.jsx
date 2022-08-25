import { Navigate, Route, Routes } from "react-router-dom"
import { BlogAppPage, Contacto, CvPage, EasyRestaurantPage, GifAppPage, HeroesPage, MarcsPage, MoviePage, OrtodonciaPage } from "../portfolio/pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<CvPage />} />
                <Route path="/aboutme" element={<Contacto />} />
                <Route path="/blogapp" element={<BlogAppPage />} />
                <Route path="/easyrestaurant" element={<EasyRestaurantPage />} />
                <Route path="/gifapp" element={<GifAppPage />} />
                <Route path="/heroes" element={<HeroesPage />} />
                <Route path="/marcs" element={<MarcsPage />} />
                <Route path="/movie" element={<MoviePage />} />
                <Route path="/ortodoncia" element={<OrtodonciaPage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}