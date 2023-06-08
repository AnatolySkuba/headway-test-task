import React from "react";
import { shallow } from "enzyme";
import Loader from "./Loader";

jest.mock("./Loader.module.css", () => ({}));

describe("Loader component", () => {
  it("renders a div and a span", () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("span")).toHaveLength(1);
  });
});
