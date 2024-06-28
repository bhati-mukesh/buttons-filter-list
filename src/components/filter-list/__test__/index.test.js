import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterButton from "../index";
import userEvent from "@testing-library/user-event";
import data from "../../../data-store/events-data.json";

describe("List Component test suite", () => {
  it("Should render List", async () => {
    const { findByTestId, getByTestId, getByRole } = render(
      <FilterButton data={data} />
    );

    let listParent = getByTestId("listContainer");
    expect(listParent).toBeInTheDocument();

    expect(listParent.childNodes).toHaveLength(6);

    const acceptableMachineBtn = getByRole("button", { name: /acceptable/i });
    expect(acceptableMachineBtn).toBeInTheDocument();

    userEvent.click(acceptableMachineBtn);

    listParent = await findByTestId("listContainer");
    expect(listParent.childNodes).toHaveLength(3);
  });
});
