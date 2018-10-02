import React from "react";

export default () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <PopupLeft />
      <PopupRight />
      <a href="#section-tours" className="popup__close">&times;</a>
    </div>
  </div>
);

const PopupLeft = () => {
  const images = ["nat-8", "nat-9"];
  const className = "popup__left";
  return (
    <div className={`${className}`}>
      {
        images.map((e, i) =>(
          <img
          // <div
            alt="Tour Photo"
            className={`popup__img popup__img-${i}`}
            key={`${className}-${e}`}
            src={require(`../img/${e}.jpg`)}
          />
        ))
      }
    </div>
  );
};

const PopupRight = () => {
  // return <div className="popup__b">b</div>;
  return (
    <div className="popup__right">
      {/* <a href="#section-tours" className="popup__close">&times;</a> */}
      <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
      
      <h3 className="heading-tertiary u-margin-bottom-small">
        Important &ndash; Please read these terms before booking
      </h3>

      <p className="popup__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut enim blandit volutpat maecenas volutpat blandit. Cursus sit amet dictum sit amet justo donec enim diam. Dictum non consectetur a erat nam. Aliquet nec ullamcorper sit amet risus nullam eget felis eget. Sed augue lacus viverra vitae congue eu consequat ac. Viverra maecenas accumsan lacus vel. Mattis molestie a iaculis at. Mi quis hendrerit dolor magna eget. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Nulla aliquet porttitor lacus luctus. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Duis at consectetur lorem donec massa sapien. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Congue nisi vitae suscipit tellus mauris a diam. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.
      </p>

      <a href="#" className="btn btn--green">Book now</a>
    </div>
  );
};
