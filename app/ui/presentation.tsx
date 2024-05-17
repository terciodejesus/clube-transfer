import { Button } from '@mantine/core'
import { Inria_Sans as InriaSans } from 'next/font/google'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })

const servicesType = [
  {
    title: 'À trabalho',
    description:
      'Pontualidade em primeiro lugar: chegue no horário, com segurança',
    srcImage: '/trabalho.png',
  },
  {
    title: 'De férias',
    description:
      'Dicas de viagem diretamente de baianos apaixonados pela terrinha',
    srcImage: '/ferias.png',
  },
  {
    title: 'Em família',
    description:
      'Cadeirinha sem custo adicional para uma viagem confortável e segura',
    srcImage: '/familia.png',
  },
]

export function Presentation() {
  return (
    <div className="bg-white py-16 px-4 flex flex-col gap-10">
      <h1
        className={`${inriaSans.className} text-2xl md:text-[40px] text-center font-bold`}
      >
        Para todos os tipos de viajantes
      </h1>

      <div className="flex justify-center">
        <div className="w-9/12 md:w-8/12 flex flex-col items-center space-y-10 md:space-y-14">
          <div className="flex flex-col md:flex-row gap-10">
            {servicesType.map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center gap-6 md:gap-10 text-center"
              >
                <div className="w-40 h-40 rounded-full">
                  <Image
                    src={service.srcImage}
                    alt="text"
                    width={160}
                    height={160}
                  />
                </div>
                <span className="font-bold text-base md:text-2xl leading-8">
                  {service.title}
                </span>
                <p className="text-sm md:text-lg leading-[22px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
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
    </div>
  )
}
