import React from "react";
import "./Input.css";

type InputProps = {} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return <input {...props} ref={ref} />;
  }
);

Input.displayName = "Input";
