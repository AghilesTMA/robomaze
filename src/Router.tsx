import { Routes,Route, Navigate } from "react-router"
import Home from "./pages/Home"
import Game from "./pages/Game"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  )
}

export default Router