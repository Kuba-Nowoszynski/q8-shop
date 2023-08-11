/* eslint-disable react-refresh/only-export-components */

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  LoadingSpinner,
} from "./button-styles";

export const buttonTypeClasses = {
  base: BaseButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
};

const Button = ({
  children,
  buttonType = BaseButton,
  isLoading,
  ...otherProps
}) => {
  const CustomButton = buttonType;
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};

export default Button;
