import { SVGIcon, SVGIconProps } from "./SVGIcon";

export const CheckMarkIcon: React.FC<SVGIconProps> = (props = {}) => (
  <SVGIcon {...props} viewBox="0 0 16 16">
    <path
      d="M11.97 4.70001L13.0306 5.76067L6.5003 12.291L2.96997 8.76067L4.03063 7.70001L6.5003 10.1697L11.97 4.70001Z"
      fill="currentColor"
    />
  </SVGIcon>
);

export const DoubleCheckMarkIcon: React.FC<SVGIconProps> = (props = {}) => (
  <SVGIcon {...props} viewBox="0 0 512 512">
    <path
      d="M374.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 86.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"
      fill="currentColor"
    />
  </SVGIcon>
);
