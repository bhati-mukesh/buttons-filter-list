import { FunctionComponent, useMemo, useState } from "react";
import { CATEGORY_TO_VARIANT_MAPPING, EVENT_CATEGORY, TEVENT_CATEGORY, TFilterList, buttonList } from "./types";
import Button from "../button/index";
import List from "../list";

const FilterList:FunctionComponent<TFilterList> = ({ data }) => {
  const [activeFilter, setActiveFilter] = useState("");

  const filteredList = data.filter((item) => {
    if (!activeFilter) {
      return true;
    }
    return item.type === activeFilter;
  });

  const onClickHandler = (status: TEVENT_CATEGORY) => {
    if (status === EVENT_CATEGORY.CLEAR) {
      setActiveFilter("");
      return;
    }
    setActiveFilter(status);
  };

  const allEventsCount = useMemo(() => {
    const acceptableCount = data.filter(
      (item) => item.type === EVENT_CATEGORY.ACCEPTABLE
    ).length;
    const dangerCount = data.filter(
      (item) => item.type === EVENT_CATEGORY.DANGER
    ).length;
    const monitorCount = data.filter(
      (item) => item.type === EVENT_CATEGORY.MONITOR
    ).length;
    const nonStatusCount = data.filter(
      (item) => item.type === EVENT_CATEGORY.NO_STATUS
    ).length;

    const alarmCount = data.filter(
      (item) => item.type === EVENT_CATEGORY.ALARM
    ).length;

    return {
      [EVENT_CATEGORY.ACCEPTABLE]: `(${acceptableCount})`,
      [EVENT_CATEGORY.DANGER]: `(${dangerCount})`,
      [EVENT_CATEGORY.MONITOR]: `(${monitorCount})`,
      [EVENT_CATEGORY.NO_STATUS]: `(${nonStatusCount})`,
      [EVENT_CATEGORY.ALARM]: `(${alarmCount})`,
      [EVENT_CATEGORY.CLEAR]: '',
    };
  }, [data]);

  return (
    <div>
      {buttonList.map((button) => {
        const btnText = `${button.text} ${allEventsCount[button.category] || ''}`;
        return (
          <Button
            label={btnText}
            onClickHandler={() => onClickHandler(button.category)}
            isActive={activeFilter === button.category}
            variant={button.variant}
            key={button.id}
          />
        );
      })}
      <List data={filteredList.map(item => ({...item, label: item.displayMessage, variant: CATEGORY_TO_VARIANT_MAPPING[item.type] }))} />
    </div>
  );
};

export default FilterList;
