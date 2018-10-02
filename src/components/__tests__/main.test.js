import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Main from "../main";

it("has the correct DOM elements", () => {
  const wrapper = shallow(<Main />);

  const elMap = {
    ".col-1-of-2": 2,
    "h2": 1,
  };

  for (let k in elMap) {
    expect(wrapper.find(k).length).toEqual(elMap[k]);
  }
  // expect(wrapper.find("h2").length).toEqual(1);
  // expect()
});
