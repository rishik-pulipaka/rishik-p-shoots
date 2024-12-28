import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import Portraits from "./pages/Portraits";
import Action from "./pages/Action";


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
          <Route path="/gallery/portraits" element={<Portraits />} />
          <Route path="/gallery/action" element={<Action />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}