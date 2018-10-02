import React from "react";

export default function AboutRight () {
  return (
    <div className="col-1-of-2">
      <div className="composition">
        {/* <img
          alt="Photo 1"
          sizes={
            `(max-width: 900px) 20vw,
            (max-width: 600px) 25vw,
            230px
            `
          }
          src={require("../img/nat-1-large.jpg")}
          srcSet={`
            ${require("../img/nat-1.jpg")} 300w,
            ${require("../img/nat-1-large.jpg")} 1000w
          `}
        /> */}
        {
          [1,2,3].map(e => renderPhoto(e))
        }
      </div>
    </div>
  );
}

const renderPhoto = (num, large=true) => {
  // const photo = `nat-${num}${large ? "-large" : ""}.jpg`;
  
  return (
    // <img
    //   alt={`Photo ${num}`}
    //   className={`composition__photo composition__photo--p${num}`}
    //   key={photo}
    //   src={require(`../img/${photo}`)}
    // />

    // resolution and density switching
    <img
      alt={`Photo ${num}`}
      className={`composition__photo composition__photo--p${num}`}
      key={`composition__photo__${num}`}
      sizes={
        `(max-width: 56.25em) 20vw,
        (max-width: 37.5em) 25vw,
        230px
        `
      }
      src={require(`../img/nat-${num}-large.jpg`)}
      srcSet={`
        ${require(`../img/nat-${num}.jpg`)} 300w,
        ${require(`../img/nat-${num}-large.jpg`)} 1000w
      `}
    />
  );
};
