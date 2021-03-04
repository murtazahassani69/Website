import React from "react";
import "../../../../css/CVMurtazaTemplate.css";
import PDF from "./amnick_cv.pdf";

function MurtazaTampReview() {
  return (
    <div>
      <embed src={PDF} type="application/pdf" height={800} width={500} />
    </div>
  );
}

export default MurtazaTampReview;
