import React from "react"
import { Typography } from "./Typography"
import { Button } from "./Button"

export const Hero = () => {
  return (
    <div>
      <div className='md:max-w-[340px] lg:max-w-[445px]'>
        <Typography element='h1' variant='h1'>
          Typemaster Keyboard
        </Typography>
        <Typography className='my-8 md:mt-[34px] md:mb-[40px] lg:mt-4'>
          Improve your productivity and gaming without breaking the bank.
          Upgrade to a high quality mechanical typing experience.
        </Typography>
        <div className='flex justify-between items-center mb-16'>
          <Button variant='primary'>Pre-Order Now</Button>
          <Typography className='font-bold'>Release on 5/27</Typography>
        </div>
      </div>

      {/* <div className='w-[372px] h-[331px] rounded-[20px] bg-[#D8D8D8] overflow-hidden'>
        <img src='/mobile/image-keyboard.jpg' alt='' />
      </div> */}

      {/* lg */}
      <div className='hidden lg:flex lg:gap-8'>
        <div className='shrink-0 w-[255px] h-[480px] rounded-[20px] bg-primary overflow-hidden'>
          <img src='/desktop/image-phone-and-keyboard.jpg' alt='' />
        </div>
        <div className='shrink-0 w-[445px] h-[480px] rounded-[20px] bg-[#D8D8D8] overflow-hidden'>
          <img src='/desktop/image-glass-and-keyboard.jpg' alt='' />
        </div>
        <div className='self-center'>
          <Typography element='h2' variant='h2' className='mb-7'>
            Mechanical Wireless Keyboard
          </Typography>
          <Typography>
            The Typemaster keyboard boasts top-notch build and practical design.
            It offers a wide variety of switches and keycaps, along with
            reliable wireless connectivity.
          </Typography>
        </div>
      </div>
    </div>
  )
}
