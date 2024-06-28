import { STYLE_VARIANT } from "../../utils/constants/variants";
import { BUTTON_VARIANT, TBUTTON_VARIANT } from "../button/types";


export const EVENT_CATEGORY = {
  ACCEPTABLE: "ACCEPTABLE",
  MONITOR: "MONITOR",
  ALARM: "ALARM",
  DANGER: "DANGER",
  NO_STATUS: "NO_STATUS",
  CLEAR: "CLEAR",
} as const;

export type TEVENT_CATEGORY = typeof EVENT_CATEGORY[keyof typeof EVENT_CATEGORY];

export type TButtonConfig = {
  text: string;
  category: TEVENT_CATEGORY;
  id: string;
  variant?: TBUTTON_VARIANT;
}

export const buttonList:Array<TButtonConfig> = [
  {
    text: "Acceptable",
    category: EVENT_CATEGORY.ACCEPTABLE,
    id: "Acceptable",
    variant: BUTTON_VARIANT.SUCCESS,
  },
  {
    text: "Alarm",
    category: EVENT_CATEGORY.ALARM,
    id: "alarm",
    variant: BUTTON_VARIANT.WARNING,
  },
  {
    text: "Danger",
    category: EVENT_CATEGORY.DANGER,
    id: "Danger",
    variant: BUTTON_VARIANT.ERROR,
  },
  {
    text: "Monitor",
    category: EVENT_CATEGORY.MONITOR,
    id: "Monitor",
    variant: BUTTON_VARIANT.INFO,
  },
  {
    text: "No Status",
    category: EVENT_CATEGORY.NO_STATUS,
    id: "NoStatus",
    variant: BUTTON_VARIANT.SECONDARY,
  },
  {
    text: "Clear",
    category: EVENT_CATEGORY.CLEAR,
    id: "Clear",
  },
];

export type TEVENT_DATA = {
  id: number;
  type: TEVENT_CATEGORY ;
  displayMessage: string;
}

export type TFilterList = {
  data: Array<TEVENT_DATA>;
}

export const CATEGORY_TO_VARIANT_MAPPING = {
  [EVENT_CATEGORY.ACCEPTABLE]: STYLE_VARIANT.SUCCESS,
  [EVENT_CATEGORY.DANGER]: STYLE_VARIANT.ERROR,
  [EVENT_CATEGORY.MONITOR]: STYLE_VARIANT.INFO,
  [EVENT_CATEGORY.NO_STATUS]: STYLE_VARIANT.SECONDARY,
  [EVENT_CATEGORY.ALARM]: STYLE_VARIANT.WARNING,
  [EVENT_CATEGORY.CLEAR]: STYLE_VARIANT.INFO,

}