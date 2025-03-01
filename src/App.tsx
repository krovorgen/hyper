import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Format from "./pages/Format";
import Solutions from "./pages/Solutions";
import InventoryData from "./pages/InventoryData";
import About from "./pages/About";
import './scss/index.scss';

export default function App(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/format" element={<Format />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/inventory-data" element={<InventoryData />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

