import Switch from "react-switch";
import { LIcon, WIcon } from "components/Icons";
import { SVGIconProps } from "components/Icons/SVGIcon";
import "./DubOrLSwitch.css";

const switchIconProps: SVGIconProps = {
  height: "calc(100% - 16px)",
  width: "calc(100% - 16px)",
  style: {
    padding: "8px",
  },
};

type DubOrLSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  className?: string;
};

export const DubOrLSwitch = ({
  value,
  onChange,
  className,
}: DubOrLSwitchProps) => {
  return (
    <label className={className}>
      <Switch
        checked={value}
        onChange={onChange}
        checkedIcon={<WIcon {...switchIconProps} />}
        uncheckedIcon={<LIcon {...switchIconProps} />}
      />
    </label>
  );
};
