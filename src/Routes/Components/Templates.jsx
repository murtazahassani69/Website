import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./Demo/TemplateDisplay/Menu";
import Header from "./Demo/TemplateDisplay/Header";
import Central from "./Demo/TemplateDisplay/Central";
import Footer from "./Demo/TemplateDisplay/Footer";

function Templates() {
    return (
        <Router>
            <Menu />
            <Header /> 
            <Central />
            <Footer />
        </Router>
    )
}

export default Templates;