import React from "react";

export default () => {
  const tours = [
    [
      3,
      "very easy",
      2,
      "sea explorer",
      30,
      "cozy hostels",
      297,
    ],
    [
      7,
      "medium",
      6,
      "forest hiker",
      40,
      "provided tents",
      497,
    ],
    [
      5,
      "hard",
      3,
      "snow adventurer",
      15,
      "provided tents",
      897,
    ]
  ].map(makeTour);

  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Most popular tours
        </h2>
      </div>
      <div className="row">
        {tours.map((e, i) => TourCard(e, i + 1))}
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--green">Discover all tours</a>
      </div>
    </section>
  );
};

const TourCard = ({
  days,
  difficulty, 
  guideCount,
  heading,
  peopleCount,
  price,
  sleepWhere,
}, i) => {

  const classes = ["back", "front"];
  const classMap = classes.reduce((acc, str) => {
    acc[str] = `card__side card__side--${str} card__side--${str}-${i}`;
    return acc;
  }, {});

  return (
    <div className="col-1-of-3" key={heading}>
      <div className="card">
        <div
          className={classMap["front"]}>
          <div className={`card__picture card__picture--${i}`}>
            &nbsp;
          </div>

          <h4 className={`card__heading`}>
            <span
              className={`card__heading-span card__heading-span--${i}`}>
              {heading}
            </span>
          </h4>

          <div className="card__details">
            <ul>
              <li>{days}</li>
              <li>{peopleCount}</li>
              <li>{guideCount}</li>
              <li>{sleepWhere}</li>
              <li>{difficulty}</li>
            </ul>
          </div>
        </div>
        <div className={classMap["back"]}>
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>

              <p className="card__price-value">{`${price}`}</p>
            </div>
            <a href="#popup" className="btn btn--white">Book now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const makeTour = ([
  days,
  difficulty, 
  guideCount,
  heading,
  peopleCount,
  sleepWhere,
  price,
]) => {
  const peopleStr = peopleCount === 1 ? "person" : "people";

  return {
    days: `${days} day tour`,
    difficulty: `Difficulty: ${difficulty.toLowerCase()}`,
    guideCount: `${guideCount} guide${guideCount === 1 ? "" : "s"}`,
    heading: `The ${heading}`,
    peopleCount: `Up to ${peopleCount} ${peopleStr}`,
    price: `$${price}`,
    sleepWhere: `Sleep in: ${sleepWhere.toLowerCase()}`,
  };
}
