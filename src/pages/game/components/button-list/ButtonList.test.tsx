import React from "react";
import { shallow } from "enzyme";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Question } from "types";
import { ROUTER_KEYS } from "consts";

import ButtonList from "./ButtonList";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("ButtonList", () => {
  const mockQuestion: Question = {
    id: "1",
    question: "question",
    options: [
      {
        id: "1",
        letter: "A",
        answer: "Option A",
      },
      {
        id: "2",
        letter: "B",
        answer: "Option B",
      },
    ],
    correct_answers: ["A"],
    money: 500000,
  };

  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correct number of buttons", () => {
    const wrapper = shallow(<ButtonList currentQuestion={mockQuestion} />);
    const buttons = wrapper.find("button");
    expect(buttons).toHaveLength(mockQuestion.options.length);
  });

  it("navigates to the 'OVER' route when the answer is correct", () => {
    const wrapper = shallow(<ButtonList currentQuestion={mockQuestion} />);

    const button = wrapper.find("button");

    button.at(1).simulate("mouseUp");

    expect(mockNavigate).toHaveBeenCalledWith(ROUTER_KEYS.OVER);
  });

  it("dispatches the changeScore action when the answer is correct2", () => {
    const wrapper = shallow(<ButtonList currentQuestion={mockQuestion} />);

    const button = wrapper.find("button");
    const use = wrapper.find("use");

    button.at(1).simulate("mouseDown");

    expect(use.at(1).prop("href")).toEqual("#button-mobile-inactive");
  });

  it("navigates to the 'OVER' route when the answer is correct and the score is the lowest", () => {
    const wrapper = shallow(<ButtonList currentQuestion={mockQuestion} />);

    const button = wrapper.find("button");

    button.at(0).simulate("mouseUp");

    expect(mockNavigate).toHaveBeenCalledWith(ROUTER_KEYS.OVER);
  });
});
