import React from "react";

import AboutLeft from "./aboutLeft";
import AboutRight from "./aboutRight";

export default () => (
  <section className="section-about" id="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        Exciting tours for adventurous people
      </h2>
    </div>

    <div className="row">
      {AboutLeft()}
      {AboutRight()}
    </div>
  </section>
);
