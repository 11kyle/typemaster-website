import { JSX, SVGProps } from "react"

export const CompatibleIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='65'
      height='65'
      viewBox='0 0 65 65'
      fill='none'
      aria-hidden='true'
      {...props}
    >
      <rect width='65' height='65' rx='16' fill='#F16718' />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.9592 22.449H43.1837C44.2657 22.449 45.1429 23.3261 45.1429 24.4082V36.4898C45.1429 37.5718 44.2657 38.449 43.1837 38.449H21.9592C20.8772 38.449 20 37.5718 20 36.4898V24.4082C20 23.3261 20.8772 22.449 21.9592 22.449ZM27.5102 42.6939L29.7633 39.7551H35.6734L37.9265 42.6939H27.5102Z'
        fill='white'
      />
    </svg>
  )
}
