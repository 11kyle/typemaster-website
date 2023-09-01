import React from "react"
import { Logo } from "./icons/Logo"
import { Button } from "./Button"

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Logo />
      <Button variant='secondary'>Pre-Order Now</Button>
    </nav>
  )
}
