/* eslint-disable react-refresh/only-export-components */

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button-styles";

export const buttonTypeClasses = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

const Button = ({ children, buttonType = BaseButton, ...otherProps }) => {
  const CustomButton = buttonType;
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
