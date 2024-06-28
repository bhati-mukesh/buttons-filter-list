import React, { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../index";
import userEvent from "@testing-library/user-event";

describe("Button Component test suite", () => {
  it("Should render success button", () => {
    const clickHandler = jest.fn();
    const { getByRole } = render(
      <Button
        isActive
        label="Acceptable"
        onClickHandler={clickHandler}
        variant="SUCCESS"
      />
    );

    const button = getByRole("button", { name: /acceptable/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn activeBtn successBtn");

    userEvent.click(button);
    expect(clickHandler).toHaveBeenCalled();
  });

  it("Should render success button which is not active", () => {
    const clickHandler = jest.fn();
    const { getByRole } = render(
      <Button
        isActive={false}
        label="Acceptable"
        onClickHandler={clickHandler}
        status="ACCEPTABLE"
        variant="SUCCESS"
      />
    );

    const button = getByRole("button", { name: /acceptable/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("btn nonActiveBtn successBtn");
  });
});
