import React from 'react'

export type SVGIconProps = React.SVGProps<SVGSVGElement> & {
  title?: React.ReactNode
  size?: string | number
}

export const SVGIcon: React.FC<SVGIconProps> = ({
  title,
  size,
  children,
  ...props
} = {}) => {
  return (
    <svg
      height={size}
      width={size}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={!title}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  )
}
