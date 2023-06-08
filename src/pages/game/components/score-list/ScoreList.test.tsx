import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import ScoreList from "./ScoreList";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../../../../store/questions/questionsSelectors", () => ({
  getScore: jest.fn(),
}));

describe("ScoreList", () => {
  let wrapper: ShallowWrapper;

  const mockUseWindowWidth = jest.fn();

  beforeEach(() => {
    mockUseWindowWidth.mockReturnValue(1450);

    wrapper = shallow(<ScoreList />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("applies the 'active' class to the current score", () => {
    const text = wrapper.find("p").at(11);

    expect(text.text()).toBe("$500");
  });

  it("renders SVG", () => {
    expect(wrapper.find("svg")).toHaveLength(12);
  });

  it("correctly renders the SVG icons based on windowWidth", () => {
    expect(wrapper.find("use").at(0).prop("href")).toBe("#step-mobile");
  });
});
