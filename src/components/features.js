import React from "react";

export default function Features () {
  const features = [
    [
      "explore the world",
      "basic-world",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit esse quas neque eligendi impedit",
    ],
    [
      "meet nature",
      "basic-compass",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit esse quas neque eligendi impedit",
    ],
    [
      "find your way",
      "basic-map",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit esse quas neque eligendi impedit",
    ],
    [
      "live a healthier life",
      "basic-heart",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit esse quas neque eligendi impedit",
    ]
  ].map(e => makeFeature.apply(null, e));

  return (
    <section className="section-features">
      <div className="row">
        {features.map(FeatureBox)}
      </div>
    </section>
  );
};

const FeatureBox = ({ heading, icon, text }) => (
  <div className="col-1-of-4" key={icon}>
    <div className="feature-box">
      <i className={`feature-box__icon icon-${icon}`}></i>
      <h3 className="heading-tertiary u-margin-bottom-small">
        {heading}
      </h3>
      <div>{text}</div>
    </div>
  </div>
);

const makeFeature = (heading, icon, text) => ({ heading, icon, text });
