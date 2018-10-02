import React from "react";

export default () => {
  const stories = [
    [
      "I had the best week ever with my family",
      "nat-8.jpg",
      "Mary Smith",
    ],
    [
      "This was the single greatest trip of my life",
      "nat-9.jpg",
      "Jack Wilson",
    ],
  ];

  return (
    <section className="section-stories">
      <div className="bg-video">
        <video
          autoPlay={true}
          className="bg-video__content"
          muted={true}
          loop={true}
        >
          <source src={require("../img/video.mp4")} type="video/mp4" />

          <source
            src={require("../img/video.webm")}
            type="video/webm"
          />

          Your browser is not supported
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          We make people genuinely happy
        </h2>
      </div>

      {stories.map(Story)}

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">Read all stories &rarr;</a>
      </div>

    </section>
  );
};

const Story = ([ heading, img, name ]) => {
  return (
    <div className="row" key={name}>
      <div className="story">
        <figure className="story__shape">
          <img 
            alt="Person on a tour"
            className="story__img"
            src={require(`../img/${img}`)}
          />

          <figcaption className="story__caption">
            {name}
          </figcaption>
        </figure>

        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            {heading}
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aperiam, ipsum sapiente aspernatur libero repellat quis
            consequatur ducimus quam nisi exercitationem omnis earum qui.
            Aperiam, ipsum sapiente aspernatur libero repellat quis
            consequatur ducimus quam nisi exercitationem omnis earum qui.
          </p>
        </div>
      </div>
    </div>
  );
};
