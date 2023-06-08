import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Question } from "types";
import GameMobile, { Props } from "./GameMobile";

jest.mock("../components", () => ({
  ScoreList: jest.fn().mockReturnValue("Mocked ScoreList component"),
  ButtonList: jest.fn().mockReturnValue("Mocked ButtonList component"),
}));

jest.mock("./GameMobile.module.css", () => ({}));

jest.mock("../../../assets/sprite.svg", () => ({}));

describe("GameMobile", () => {
  let wrapper: ShallowWrapper<Props, unknown>;

  const currentQuestion: Question = {
    id: "1",
    question: "question",
    options: [{ id: "2", letter: "A", answer: "answer1" }],
    correct_answers: ["answer1"],
    money: 500,
  };

  beforeEach(() => {
    wrapper = shallow(<GameMobile currentQuestion={currentQuestion} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("initially shows the menu", () => {
    const menuComponent = wrapper.find("div").at(1);
    expect(menuComponent.exists()).toBe(true);
  });

  it("toggles the menu when the button is clicked", () => {
    const button = wrapper.find("button");
    button.simulate("click");

    const updatedMenuComponent = wrapper.find("div").at(1);
    expect(updatedMenuComponent.exists()).toBe(true);
  });
});
