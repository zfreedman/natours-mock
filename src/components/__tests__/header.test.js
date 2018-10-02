import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import Header from "../header";

it("has the correct DOM elements", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("img").length).toEqual(1);
});
