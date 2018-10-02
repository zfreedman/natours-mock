import React from "react";

export default function GridTest () {
  return (
    <section className="grid-test">
      <div className="row">
        {
          doNTimes(2, 1, 2)
        }
      </div>

      <div className="row">
        {
          doNTimes(3, 1, 3)
        }
      </div>

      <div className="row">
        {
          doNTimes(1, 1, 3)
        }
        {
          doNTimes(1, 2, 3)
        }
      </div>

      <div className="row">
        {
          doNTimes(4, 1, 4)
        }
      </div>

      <div className="row">
        {
          doNTimes(2, 1, 4)
        }
        {
          doNTimes(1, 2, 4)
        }
      </div>

      <div className="row">
        {
          doNTimes(1, 1, 4)
        }
        {
          doNTimes(1, 3, 4)
        }
      </div>
    </section>
  );
}

let counter = 0;
const doNTimes = (n, a, b) => Array(n).fill(0).map(
  (e, i) => getAOfB(a, b)
);

const getAOfB = (a, b) => {
  return (
    <div
      className={`col-${a}-of-${b}`}
      key={counter++}
    >
      {`Col ${a} of ${b}`}
    </div>
  );
}
