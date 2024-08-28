import { PropsWithChildren } from "react";
import { SVGIcon, SVGIconProps } from "./SVGIcon";

export const LIcon = (props: PropsWithChildren<SVGIconProps> = {}) => (
  <SVGIcon {...props} viewBox="0 0 320 512">
    <path
      fill="currentColor"
      d="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"
    />
  </SVGIcon>
);
