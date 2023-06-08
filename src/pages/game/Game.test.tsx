import React from "react";
import { useSelector } from "react-redux";
import { shallow, ShallowWrapper } from "enzyme";
import { Error, Loader } from "components";
import { BREAKPOINTS } from "consts";
import { randElement } from "../../helpers";
import useWindowWidth from "../../hooks";
import { useGetQuestionsQuery } from "../../store/questions/questionsApi";

import GameDesktop from "./game-desktop";
import Game from ".";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock("./game-mobile", () => ({
  GameMobile: jest.fn().mockReturnValue("Mocked GameMobile component"),
}));

jest.mock("../../store/questions/questionsApi", () => ({
  useGetQuestionsQuery: jest.fn(),
}));

jest.mock("../../helpers", () => ({
  randElement: jest.fn(),
}));

jest.mock("../../hooks", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("Game", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    // useSelector.mockClear();
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
    (randElement as jest.Mock).mockReturnValue({ id: 2, money: 100 });

    wrapper = shallow(<Game />);
  });

  afterEach(jest.clearAllMocks);

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

  it("renders GameDesktop when window width is greater than or equal to BREAKPOINTS.DESKTOP_1440", () => {
    (useWindowWidth as jest.Mock).mockReturnValue(BREAKPOINTS.DESKTOP_1440);

    wrapper = shallow(<Game />);

    expect(wrapper.find(GameDesktop)).toHaveLength(1);
  });
});
