import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Typography } from "./components/Typography"
import { BatteryIcon } from "./components/icons/BatteryIcon"
import { BluetoothIcon } from "./components/icons/BluetoothIcon"
import { CompatibleIcon } from "./components/icons/CompatibleIcon"
import { LightIcon } from "./components/icons/LightIcon"

const features = [
  {
    title: "HIGHLY<br />COMPATIBLE",
    body: "Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.",
    icon: <CompatibleIcon />,
  },
  {
    title: "WIRELESS<br />WITH BLUETOOTH",
    body: "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
    icon: <BluetoothIcon />,
  },
  {
    title: "HIGH CAPACITY<br />BATTERY",
    body: "Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
    icon: <BatteryIcon />,
  },
  {
    title: "HIRGB BACKLIT<br />MODESGHLY",
    body: "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
    icon: <LightIcon />,
  },
]

export default function Home() {
  return (
    <>
      <header className='max-w-[1110px] p-6 mx-auto'>
        <Navbar />
      </header>
      <main className='max-w-[1110px] flex flex-col items-center p-6 mx-auto'>
        <section>
          <Hero />
        </section>
        <section className='mt-28 md:mt-36 lg:mt-40'>
          <h2 className='sr-only'>Features</h2>
          <div className='grid gap-x-24 lg:gap-x-7 gap-y-16 md:grid-cols-2 lg:grid-cols-4'>
            {features.map((feature) => (
              <div
                key={feature.title}
                className='flex flex-col items-center md:items-start md:max-w-[280px] lg:max-w-[255px]'
              >
                {feature.icon}
                <Typography
                  element='h3'
                  variant='h3'
                  className='text-center md:text-left mt-12'
                >
                  {feature.title}
                </Typography>
                <Typography className='text-center md:text-left mt-6'>
                  {feature.body}
                </Typography>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
