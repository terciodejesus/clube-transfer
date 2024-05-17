import { Button } from '@mantine/core'
import { Inria_Sans as InriaSans } from 'next/font/google'
import { FaWhatsapp } from 'react-icons/fa'

const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Header() {
  return (
    <div className="flex items-center h-[648px] w-full pr-6 bg-daintree relative overflow-hidden">
      <video
        className="absolute h-screen min-w-fit md:h-auto w-full"
        autoPlay
        muted
        preload="none"
        loop
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="overlay absolute w-full h-full bg-gradient-to-r from-black via-black to-black opacity-65"></div>
      <div className="w-full lg:w-9/12 flex flex-col gap-6 items-start px-0 py-0 lg:py-[72px] lg:px-[67px] z-10 ml-6 md:ml-0">
        <span
          className={`${inriaSans.className} text-[40px] lg:text-[67px] text-white font-bold leading-[41px] lg:leading-[85px]`}
        >
          Aproveite a viagem e{' '}
          <span className="text-carnation-4">descubra</span> a bahia.
        </span>
        <p className="text-base leading-6 lg:text-2xl text-white">
          Curta sua viagem ao máximo a preços acessíveis com o Clube Transfer
          Receptivo.
        </p>
        <Button
          size="lg"
          variant="filled"
          color="#FA5252"
          rightSection={<FaWhatsapp size={24} />}
        >
          Reserve agora
        </Button>
      </div>
    </div>
  )
}
