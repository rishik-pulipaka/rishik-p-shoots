import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}