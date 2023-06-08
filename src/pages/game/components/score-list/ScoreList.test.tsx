import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { useSelector } from "react-redux";

import { SCORES } from "consts";

import ScoreList from "./ScoreList";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../../../../store/questions/questionsSelectors", () => ({
  getScore: jest.fn(),
}));

describe("ScoreList", () => {
  let wrapper: ShallowWrapper;
  let originalWindowWidth: number;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(2000);
    originalWindowWidth = window.innerWidth;
  });

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: originalWindowWidth,
    });
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    wrapper = shallow(<ScoreList />);

    expect(wrapper.exists()).toBe(true);
  });

  it("applies the 'active' class to the current score", () => {
    wrapper = shallow(<ScoreList />);

    const text = wrapper.find("p").at(11);

    expect(text.text()).toBe("$500");
  });

  it("renders SVG", () => {
    wrapper = shallow(<ScoreList />);

    expect(wrapper.find("svg")).toHaveLength(12);
  });

  it("correctly renders the SVG icons based on windowWidth > 1440px", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1524,
    });

    wrapper = shallow(<ScoreList />);

    expect(wrapper.find("use").at(0).prop("href")).toBe("#step-desktop");
  });

  it("correctly renders the SVG icons based on windowWidth < 1440px", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1024,
    });

    wrapper = shallow(<ScoreList />);

    expect(wrapper.find("use").at(0).prop("href")).toBe("#step-mobile");
  });

  it("renders the correct number of scores", () => {
    wrapper = shallow(<ScoreList />);

    const scoreItems = wrapper.find("li");
    expect(scoreItems.length).toEqual(SCORES.length - 1);
  });
});
