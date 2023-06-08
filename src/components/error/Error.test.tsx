import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Error from "./Error";

jest.mock("./Error.module.css", () => ({}));

describe("Error component", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Error />);
  });

  it("renders without errors", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("contains divs and an h1", () => {
    expect(wrapper.find("div")).toHaveLength(2);
    expect(wrapper.find("h1")).toHaveLength(1);
  });

  it("contains an h1 element with text 'Error 404'", () => {
    const h1 = wrapper.find("h1");
    expect(h1.text()).toBe("Error 404");
  });
});
