
import { FunctionComponent } from "react";
import ListItem from "./ListItem";
import classes from './list.module.scss'
import { TList } from "./type";

const List: FunctionComponent<TList> = ({ data }) => {
  return (
    <div data-testid="listContainer" className={classes.listContainer}>
      {data?.map((item:any) => (
        <ListItem
          key={item.id}
          label={item.label}
          variant={item.variant}
        />
      ))}
    </div>
  );
};

export default List;
