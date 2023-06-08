import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader component", () => {
  it("renders the loader without errors", () => {
    render(<Loader />);
  });

  it("has the correct CSS classes", () => {
    render(<Loader />);
    const loaderContainer = screen.getByRole("main");
    const loader = screen.getByRole("figure");

    expect(loaderContainer).toHaveClass("container");
    expect(loader).toHaveClass("loader");
  });
});
