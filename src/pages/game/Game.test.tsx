import React from "react";
import { useSelector } from "react-redux";
import { shallow, ShallowWrapper } from "enzyme";
import { Error, Loader } from "components";
import { randElement } from "../../helpers";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";

import GameDesktop from "./game-desktop";
import GameMobile from "./game-mobile";
import Game from ".";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("../../store/questions/questionsApi", () => ({
  useGetQuestionsQuery: jest.fn(),
}));

jest.mock("../../helpers", () => ({
  randElement: jest.fn(),
}));

describe("Game", () => {
  let wrapper: ShallowWrapper;
  let originalWindowWidth: number;

  beforeEach(() => {
    (useSelector as jest.Mock).mockReturnValue(0);
    (useGetQuestionsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: false,
      data: {
        questions: [
          { id: 1, money: 0 },
          { id: 2, money: 100 },
          { id: 3, money: 200 },
        ],
      },
    });
    originalWindowWidth = window.innerWidth;
    (randElement as jest.Mock).mockReturnValue({ id: 2, money: 100 });
  });

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: originalWindowWidth,
    });
    jest.clearAllMocks();
  });

  it("renders Loader when data is loading", () => {
    (useGetQuestionsQuery as jest.Mock).mockReturnValue({
      isLoading: true,
      isError: false,
      data: null,
    });

    wrapper = shallow(<Game />);

    expect(wrapper.find(Loader)).toHaveLength(1);
  });

  it("renders Error when data fetching has failed", () => {
    (useGetQuestionsQuery as jest.Mock).mockReturnValue({
      isLoading: false,
      isError: true,
      data: null,
    });

    wrapper = shallow(<Game />);

    expect(wrapper.find(Error)).toHaveLength(1);
  });

  it("renders GameDesktop when the window width is 1524px", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1524,
    });

    wrapper = shallow(<Game />);

    expect(wrapper.find(GameDesktop)).toHaveLength(1);
  });

  it("renders GameDesktop when the window width is 1024px", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: 1024,
    });

    wrapper = shallow(<Game />);

    expect(wrapper.find(GameMobile)).toHaveLength(1);
  });
});
