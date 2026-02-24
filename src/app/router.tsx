import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateTurn from "../pages/CreateTurn"
import Register from "../pages/FormWizzard"
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateTurn />} />
        <Route path="/form" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
