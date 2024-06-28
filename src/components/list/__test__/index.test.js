import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import List from "../index";
import data from "../../../data-store/events-data.json";
import { listVariantToCssClassMapping } from "../type";

describe("List Component test suite", () => {
  it("Should render list of data", () => {
    const { getByTestId, getByText } = render(
      <List
        data={data.slice(0,2).map(item => ({...item, label: item.displayMessage, variant: listVariantToCssClassMapping[item.type]}))}
      />
    );

    const parent = getByTestId("listContainer");
    expect(parent).toBeInTheDocument();

    expect(parent.childNodes).toHaveLength(2);

    const listItemOne = getByText(data[0].displayMessage)
    expect(listItemOne).toBeInTheDocument();
    
    const listItemTwo = getByText(data[1].displayMessage)
    expect(listItemTwo).toBeInTheDocument();
    
  });
});
