
import { TSTYLE_VARIANT } from '../../types';
import { STYLE_VARIANT } from '../../utils/constants/variants';
import classes from './index.module.scss'


export const BUTTON_VARIANT = STYLE_VARIANT;
export type TBUTTON_VARIANT = TSTYLE_VARIANT;

export type TBtnVariantToCssClassMappingType = {
    [K in TBUTTON_VARIANT]: string;
}

export const btnVariantToCssClassMapping: TBtnVariantToCssClassMappingType = {
    [BUTTON_VARIANT.PRIMARY]: classes.primaryBtn,
    [BUTTON_VARIANT.SECONDARY]: classes.secondaryBtn,
    [BUTTON_VARIANT.SUCCESS]: classes.successBtn,
    [BUTTON_VARIANT.ERROR]: classes.errorBtn,
    [BUTTON_VARIANT.INFO]: classes.infoBtn,
    [BUTTON_VARIANT.WARNING]: classes.warningBtn,
};

export type TButton = {
    label: string; 
    onClickHandler: () => void; 
    isActive: boolean 
    variant?: TBUTTON_VARIANT;
}