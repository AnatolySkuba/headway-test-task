import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import { Question } from "types";
import GameDesktop, { Props } from "./GameDesktop";

jest.mock("../components", () => ({
  ScoreList: jest.fn().mockReturnValue("Mocked ScoreList component"),
  ButtonList: jest.fn().mockReturnValue("Mocked ButtonList component"),
}));

describe("GameDesktop", () => {
  let wrapper: ShallowWrapper<Props>;

  const currentQuestion: Question = {
    id: "1",
    question: "question",
    options: [{ id: "2", letter: "A", answer: "answer1" }],
    correct_answers: ["answer1"],
    money: 500,
  };

  beforeEach(() => {
    wrapper = shallow(<GameDesktop currentQuestion={currentQuestion} />);
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the question", () => {
    const questionElement = wrapper.find(".question");
    expect(questionElement).toHaveLength(1);
    expect(questionElement.text()).toBe(currentQuestion.question);
  });
});
