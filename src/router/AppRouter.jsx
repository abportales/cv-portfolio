import { Navigate, Route, Routes } from "react-router-dom"
import { CvPage, MoviePage } from "../portfolio/pages"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<CvPage />} />
                <Route path="/movieapi" element={<MoviePage />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}