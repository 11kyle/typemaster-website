import clsx from "clsx"

const variantStyles = {
  body: "text-dark-gray text-[16px] font-medium leading-[26px]",
  h1: "text-secondary text-[42px] lg:text-[56px] font-black leading-[42px] lg:leading-[56px] uppercase",
  h2: "text-secondary text-[32px] font-black leading-[36px] uppercase",
  h3: "text-secondary text-[24px] font-black leading-[28px] uppercase",
}

interface Props {
  children?: React.ReactNode
  className?: string
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
  variant?: "body" | "h1" | "h2" | "h3"
}

export const Typography = ({
  children,
  className,
  element = "p",
  variant = "body",
  ...props
}: Props) => {
  let Component = element

  className = clsx(variantStyles[variant], className)

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  )
}
