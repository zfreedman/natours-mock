import React from "react";

import About from "./about";
import Booking from "./booking";
import Features from "./features";
import Stories from "./stories";
import Tours from "./tours";

class Main extends React.Component {
  render () {
    return (
      <main>
        <About />
        <Features />
        <Tours />
        <Stories />
        <Booking />
      </main>
    );
  }
}

export default Main;
