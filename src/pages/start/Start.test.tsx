import React from "react";
import { shallow } from "enzyme";
import { Link } from "react-router-dom";

import Start from "./Start";

jest.mock("./Start.module.css", () => ({}));

jest.mock("../../assets/sprite.svg", () => ({}));

describe("Start component", () => {
  it("should render without errors", () => {
    shallow(<Start />);
  });

  it("should contain a container div and svg", () => {
    const wrapper = shallow(<Start />);

    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("svg")).toHaveLength(1);
  });

  it("should contain an h1 element with the correct class name and text", () => {
    const wrapper = shallow(<Start />);
    const headerElement = wrapper.find("h1");
    expect(headerElement.exists()).toBe(true);
    expect(headerElement.text()).toEqual("Who wants to bea millionaire?");
  });

  it("should contain a Link component with the correct prop", () => {
    const wrapper = shallow(<Start />);
    const linkComponent = wrapper.find(Link);
    expect(linkComponent.exists()).toBe(true);
    expect(linkComponent.prop("to")).toEqual("/game");
  });

  it("should contain a button element with the correct text", () => {
    const wrapper = shallow(<Start />);
    const buttonElement = wrapper.find("button");
    expect(buttonElement.exists()).toBe(true);
    expect(buttonElement.text()).toEqual("Start");
  });
});
