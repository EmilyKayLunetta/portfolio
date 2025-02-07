import React from 'react';
import { Route, Routes } from "react-router-dom";

import Portfolio from "./pages/Portfolio.js";
import Education from "./pages/Education.js";
import Art from "./pages/Art.js";
import Contact from "./pages/Contact.js";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/education" element={<Education />} />
            <Route path="/portfolio/art" element={<Art />} />
            <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>
    );
}

export default AppRoutes;
