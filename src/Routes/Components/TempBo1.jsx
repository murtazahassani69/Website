import React from 'react';
import Header from './Demo/CVTemplates/BoubacarTemplate/CVBaldeTemplateHeader'
import Central from './Demo/CVTemplates/BoubacarTemplate/CVBaldeTemplateCentral'
import Footer from './Demo/CVTemplates/BoubacarTemplate/CVBaldeTemplateFooter'
import '../css/CVBaldeTemplateMain.css';

function TempBo1() {
  return (
        <div className="CVBaldeTemp-div-main">
            <Header />
            <Central />
            <Footer />
        </div>
  );
}

export default TempBo1;