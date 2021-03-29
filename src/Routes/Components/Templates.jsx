import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Demo/TemplateDisplay/Header";
import Central from "./Demo/TemplateDisplay/TempDisplayCental";
import Footer from "./Demo/TemplateDisplay/Footer";

function Templates() {
    return (
        <Router>
            <Header />
            <Central />
            <Footer />
        </Router>
    )
}

export default Templates;