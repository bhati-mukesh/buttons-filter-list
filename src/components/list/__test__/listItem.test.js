import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListItem from "../ListItem";
import data from "../../../data-store/events-data.json";

describe("ListItem Component test suite", () => {
  it("Should render list of data", () => {
    const { getByText } = render(
      <ListItem label={data[0].displayMessage} variant="SUCCESS" />
    );

    const listItem = getByText(data[0].displayMessage);
    expect(listItem).toBeInTheDocument();
    expect(listItem).toHaveClass('listItem successList')

  });
});
