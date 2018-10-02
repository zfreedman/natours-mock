import React from "react";

import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import Navigation from "./nav";
import Popup from "./popup";

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Navigation />
        <Header />
        {/* <GridTest /> */}
        <Main />
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default App;
