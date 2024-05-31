import { Button } from '@mantine/core'
import { Inria_Sans as InriaSans, Inter, Roboto } from 'next/font/google'
import { AiOutlineDollar } from 'react-icons/ai'
import { FaRegStar, FaWhatsapp } from 'react-icons/fa'
import { FiUserCheck } from 'react-icons/fi'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export function HowItWorks() {
  return (
    <div className="py-20 px-4 bg-[#0A1F27]" id="aboutUs">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="lg:w-6/12">
            <video
              className="w-full h-full rounded-tl-[32px] rounded-br-[32px]"
              autoPlay
              muted
              preload="none"
              loop
              playsInline={true}
            >
              <source src="/how-it-works-video.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="lg:w-6/12 flex">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-1 md:gap-4">
                <span
                  className={`${inriaSans.className} text-[21px] text-center md:text-left md:text-[40px] text-white font-bold leading-[48px]`}
                >
                  Curta o caminho sem preocupações.
                </span>
                <p
                  className={`${roboto.className} text-white text-sm text-center md:text-left md:text-lg`}
                >
                  Te levamos onde você precisar ir, com conforto e segurança.
                </p>
              </div>

              <Button
                size="lg"
                variant="filled"
                color="#FA5252"
                rightSection={<FaWhatsapp size={24} />}
                className="!w-fit !hidden md:block"
              >
                Reserve agora
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-14">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <FaRegStar size={32} color="#FF8787" />
            <span
              className={`${inter.className} text-lg font-semibold text-white`}
            >
              Serviço de confiança
            </span>
            <span className={`${inter.className} text-sm text-white`}>
              Prezamos pela pontualidade e compromisso com nossos clientes
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <AiOutlineDollar size={32} color="#FF8787" />
            <span
              className={`${inter.className} text-lg font-semibold text-white text-center md:text-left`}
            >
              Preço acessível
            </span>
            <span className={`${inter.className} text-sm text-white`}>
              O conforto que você precisa sem precisar pagar mais por isso
            </span>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <FiUserCheck size={32} color="#FF8787" />
            <span
              className={`${inter.className} text-lg font-semibold text-white text-center md:text-left`}
            >
              Equipe treinada
            </span>
            <span
              className={`${inter.className} text-sm text-white text-center md:text-left`}
            >
              Motoristas e guias profissionais para te proporcionar uma viagem
              encantadora
            </span>
          </div>
        </div>
        <div className="flex justify-center md:hidden mt-8">
          <Button
            size="lg"
            variant="filled"
            color="#FA5252"
            rightSection={<FaWhatsapp size={24} />}
            className="!w-fit"
          >
            Reserve agora
          </Button>
        </div>
      </div>
    </div>
  )
}
