import { Inria_Sans as InriaSans, Roboto } from 'next/font/google'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'
import { FiUserCheck } from 'react-icons/fi'
import { LiaCarSideSolid } from 'react-icons/lia'
import {
  TbBeach,
  TbClockHour3,
  TbMessageChatbot,
  TbSteeringWheel,
} from 'react-icons/tb'
import reservation from '../../public/reservation.png'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })

type ServiceType = 'reservation' | 'travel' | 'accommodation'

const serviceItems = {
  reservation: {
    src: reservation,
    reverse: false,
    items: [
      {
        title: 'Atendimento 24 horas',
        icon: <TbClockHour3 size={20} color="#FF8787" />,
      },
      {
        title: 'Atendimento humanizado e personalizado',
        icon: <TbMessageChatbot size={20} color="#FF8787" />,
      },
      {
        title: 'Resolva tudo na palma da mão, pelo WhatsApp',
        icon: <FaWhatsapp size={20} color="#FF8787" />,
      },
    ],
  },
  travel: {
    reverse: true,
    items: [
      {
        title: 'Motoristas treinados e pontuais',
        icon: <FiUserCheck size={20} color="#FF8787" />,
      },
      {
        title: 'Carros limpos e confortáveis',
        icon: <LiaCarSideSolid size={20} color="#FF8787" />,
      },
      {
        title: 'Escolha o veículo que se encaixa em sua viagem',
        icon: <TbSteeringWheel size={20} color="#FF8787" />,
      },
    ],
  },
  accommodation: {
    reverse: false,
    items: [
      {
        title: 'Grand Palladium Hotels & Resorts',
        icon: <TbBeach size={20} color="#FF8787" />,
      },
      {
        title: 'Costa do Sauípe',
        icon: <TbBeach size={20} color="#FF8787" />,
      },
      {
        title: 'Vila Galé Hoteis',
        icon: <TbBeach size={20} color="FF8787" />,
      },
      {
        title: 'Tivoli Hotels & Resorts',
        icon: <TbBeach size={20} color="#FF8787" />,
      },
      {
        title: 'Iberostar Hotels & Resorts',
        icon: <TbBeach size={20} color="#FF8787" />,
      },
    ],
  },
} as {
  [key in ServiceType]: {
    reverse: boolean
    items: {
      title: string
      icon: React.ReactNode
    }[]
  }
}

export function Service() {
  return (
    <div
      className={`${roboto.className} py-10 px-4 bg-[#0A1F27]`}
      id="services"
    >
      <div className="flex flex-col gap-10 items-center">
        <h1
          className={`${inriaSans.className} font-bold text-2xl md:text-[40px] text-center text-white`}
        >
          Por que escolher a Clube Transfer Receptivo
        </h1>
        <ServiceCard
          coverUrl="/reservation.png"
          title="Reserve rápido e sem burocracia"
          items={serviceItems.reservation.items}
        />

        <ServiceCard
          coverUrl="/travel.png"
          title="Viaje com conforto e segurança"
          items={serviceItems.travel.items}
          reverse={serviceItems.travel.reverse}
        />

        <ServiceCard
          coverUrl="/acommodation.png"
          title="Principais hospedagens baianas"
          items={serviceItems.accommodation.items}
        />
      </div>
    </div>
  )
}

interface ServiceCardProps {
  title: string
  coverUrl: string
  reverse?: boolean
  items: {
    title: string
    icon: React.ReactNode
  }[]
}

function ServiceCard({ title, coverUrl, items, reverse }: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 ${reverse ? 'lg:flex-row-reverse' : ''}`}
    >
      <Image
        src={coverUrl}
        alt="text"
        width={472}
        height={312}
        className="rounded-[32px] bg-cover w-[396px] h-[262px] md:w-[472px] md:h-[312px]"
      />
      <div className="flex flex-col gap-4 justify-center text-white">
        <span className="text-xl md:text-[32px] font-bold">{title}</span>
        {items.map((item) => (
          <div key={item.title} className="flex gap-2 items-center">
            {item.icon}
            <span className="text-base md:text-xl">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
