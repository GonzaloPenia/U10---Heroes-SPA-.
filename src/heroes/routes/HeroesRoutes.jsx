import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar } from "../../ui"
import { MarvelPage,DcPage,Search,Heroes } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc"     element={<DcPage />} />
                <Route path="search" element={<Search />} />
                <Route path="heroes" element={<Heroes />} />
                <Route path="/" element={<Navigate to="/marvel"/>} />
            </Routes>
        </div>
    </>
  )
}
