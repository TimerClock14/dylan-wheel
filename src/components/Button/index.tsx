import React from "react";
import classNames from "classnames";
import "./Button.css";

type ButtonType = "primary" | "secondary" | "tertiary" | "transparent";

type BaseButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  variant: ButtonType;
  round?: boolean;
} & BaseButtonProps;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, round, className, ...props }, ref) => (
    <button
      className={classNames(variant, { round: round }, className)}
      {...props}
      ref={ref}
    />
  )
);

Button.displayName = "Button";

type IconButtonProps = {} & BaseButtonProps;

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, ...props }, ref) => (
    <Button
      variant="transparent"
      round
      className={classNames("icon", className)}
      {...props}
      ref={ref}
    />
  )
);

IconButton.displayName = "IconButton";
