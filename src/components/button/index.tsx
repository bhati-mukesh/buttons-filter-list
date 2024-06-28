import { BUTTON_VARIANT, TButton, btnVariantToCssClassMapping } from "./types";
import classNames from "../../utils/classNames";
import classes from "./index.module.scss";
import { FunctionComponent } from "react";




const Button:FunctionComponent<TButton> = ({ label, onClickHandler, isActive, variant = BUTTON_VARIANT.PRIMARY }) => {
  
  const classList:string = classNames({
    [classes.btn]: true,
    [classes.activeBtn]: isActive,
    [classes.nonActiveBtn]: !isActive,
    [btnVariantToCssClassMapping[variant]]: true,
  });

  return (
    <span className={classes.btnContainer}>
      <button className={classList} onClick={onClickHandler}>
        {label}
      </button>
    </span>
  );
};

export default Button;
