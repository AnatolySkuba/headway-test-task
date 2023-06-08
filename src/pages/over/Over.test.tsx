import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ROUTER_KEYS, SCORES } from "consts";

import Over from "./Over";
import { changeScore } from "../../store/questions/questionsSlice";

jest.mock("./Over.module.css", () => ({}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

jest.mock("../../store/questions/questionsSelectors", () => ({
  getScore: jest.fn(),
}));

jest.mock("../../store/questions/questionsSlice", () => ({
  changeScore: jest.fn(),
}));

jest.mock("../../assets/sprite.svg", () => ({}));

describe("Over Component", () => {
  let wrapper: ShallowWrapper;

  const mockScore = 100;
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(mockScore);
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    wrapper = shallow(<Over />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without error", () => {
    expect(wrapper.length).toBe(1);
  });

  it("dispatches changeScore action and navigates to ROOT on button click", () => {
    const button = wrapper.find("button");

    button.simulate("click");

    expect(mockDispatch).toHaveBeenCalledWith(
      changeScore(SCORES[SCORES.length - 1]),
    );
    expect(mockNavigate).toHaveBeenCalledWith(ROUTER_KEYS.ROOT);
  });

  it("displays the correct total score", () => {
    const scoreElement = wrapper.find("p").at(1);

    expect(scoreElement.text()).toBe(`$${mockScore} earned`);
  });
});
