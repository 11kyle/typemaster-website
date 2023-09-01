import clsx from "clsx"

const variantStyles = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-light-gray text-secondary hover:bg-secondary hover:text-white",
}

interface Props {
  children?: React.ReactNode
  className?: string
  variant?: "primary" | "secondary"
}

export const Button = ({
  children,
  className,
  variant = "primary",
  ...props
}: Props) => {
  className = clsx(
    "rounded-lg text-center text-[16px] font-bold leading-[26px] uppercase px-4 py-3",
    variantStyles[variant],
    className
  )

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
