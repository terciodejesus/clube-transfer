import { Button } from '@mantine/core'
import { Inria_Sans as InriaSans } from 'next/font/google'
import { FaWhatsapp } from 'react-icons/fa'

const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })

export default function Header() {
  return (
    <div className="flex items-center h-[648px] w-full pr-6 bg-daintree relative overflow-hidden">
      <video
        className="absolute md:h-auto min-w-max w-full"
        autoPlay
        muted
        preload="none"
        loop
        playsInline={true}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="overlay absolute w-full h-full bg-gradient-to-r from-black via-black to-black opacity-65"></div>
      <div className="w-full lg:w-9/12 flex flex-col gap-6 items-start px-0 py-0 lg:py-[72px] lg:px-[67px] z-10 ml-6 md:ml-0">
        <span
          className={`${inriaSans.className} text-[40px] lg:text-[67px] text-white font-bold leading-[41px] lg:leading-[85px]`}
        >
          Aproveite a viagem e{' '}
          <span className="text-carnation-4">descubra</span> a Bahia.
        </span>
        <p className="text-base leading-6 lg:text-2xl text-white">
          Curta sua viagem ao máximo a preços acessíveis com o Clube Transfer
          Receptivo.
        </p>
        <Button
          size="lg"
          component="a"
          href="https://api.whatsapp.com/send?phone=5571982428566&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
          target="_blank"
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
