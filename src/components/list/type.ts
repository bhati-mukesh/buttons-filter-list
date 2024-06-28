import classes from './list.module.scss'
import { TSTYLE_VARIANT } from "../../types";
import { STYLE_VARIANT } from "../../utils/constants/variants";


export const ListItemVariant = STYLE_VARIANT;
export type TListItemVariant = TSTYLE_VARIANT;

export type TListItem = {
    label: string;
    variant: TListItemVariant;
    [key: string]: any
}

export type TList = {
    data: Array<TListItem>
}

export type TListVariantToCssClassMapping = {
    [K in TListItemVariant]: string;
}

export const listVariantToCssClassMapping: TListVariantToCssClassMapping = {
    [ListItemVariant.PRIMARY]: classes.primaryList,
    [ListItemVariant.SECONDARY]: classes.secondaryList,
    [ListItemVariant.SUCCESS]: classes.successList,
    [ListItemVariant.ERROR]: classes.errorList,
    [ListItemVariant.INFO]: classes.infoList,
    [ListItemVariant.WARNING]: classes.warningList,
};