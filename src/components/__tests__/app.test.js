import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "../app";
import Header from "../header";
import Main from "../main";

it("has the correct React components", () => {
  const wrapper = shallow(<App />);

  const elMap = {
    Header: 1,
    Main: 1,
  };

  for (let k in elMap) {
    expect(wrapper.find(k).length).toEqual(elMap[k]);
  }
});
