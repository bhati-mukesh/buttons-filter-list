import { FunctionComponent } from "react";
import classes from './list.module.scss'
import { TListItem, listVariantToCssClassMapping } from "./type";
import classNames from "../../utils/classNames";

const ListItem:FunctionComponent<TListItem> = ({ label, variant }) => {

  const className = classNames({
    [classes.listItem]: true,
    [listVariantToCssClassMapping[variant]]: true,
  })


  return (
    <p className={className}>
      {label}
    </p>
  );
};

export default ListItem;
