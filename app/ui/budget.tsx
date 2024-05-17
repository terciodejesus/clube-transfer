import { Button } from '@mantine/core'
import { Inria_Sans as InriaSans, Inter, Roboto } from 'next/font/google'
import { FaPlaneArrival } from 'react-icons/fa'
import { FaRegCircleCheck } from 'react-icons/fa6'
import { PiBuildings } from 'react-icons/pi'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export function Budget() {
  return (
    <div className="flex flex-col space-y-10 py-10 md:py-20 items-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <span
          className={`${inriaSans.className} text-2xl md:text-[40px] font-bold -tracking-[0.8px]`}
        >
          Conheça nossos serviços
        </span>
        <span className={`${roboto.className} text-lg md:text-xl`}>
          Transforme a experiência da sua viagem em inesquecível
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-6 p-6 md:w-6/12 shadow-xl rounded-2xl mx-6 md:mx-0">
        <div className="md:w-6/12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <FaPlaneArrival size={32} />
              <span
                className={`${inter.className} text-2xl md:text-[38px] font-bold -tracking-[0.7px]`}
              >
                Transfer Receptivo
              </span>
              <span className={`${inter.className} text-sm`}>
                Chegue com conforto do aeroporto até seu destino
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck size={24} color="#FF8787" />
                <span className={`${inter.className} text-sm`}>
                  Principais hospedagens baianas
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck size={24} color="#FF8787" />
                <span className={`${inter.className} text-sm`}>
                  Veículos espaçosos e confortáveis
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck size={24} color="#FF8787" />
                <span className={`${inter.className} text-sm`}>
                  Motoristas pontuais e capacitados
                </span>
              </div>
            </div>
            <Button
              size="lg"
              variant="outline"
              component="a"
              href="https://api.whatsapp.com/send?phone=5571982428566&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
              target="_blank"
              color="#FA5252"
              className={`${roboto.className} !text-black !text-base md:!text-lg`}
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>
        <div className="md:w-6/12">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <PiBuildings size={32} color="#FF8787" />
              <span
                className={`${inter.className} text-2xl md:text-[38px] font-bold -tracking-[0.7px]`}
              >
                City Tour
              </span>
              <span className={`${inter.className} md:text-sm `}>
                Conheça as maravilhas baianas
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck size={24} color="#FF8787" />
                <span className={`${inter.className} text-sm`}>
                  Guia especializado
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck size={24} color="#FF8787" />
                <span className={`${inter.className} text-sm`}>
                  Exploração cultural
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck size={24} color="#FF8787" />
                <span className={`${inter.className} text-sm`}>
                  Personalização do roteiro
                </span>
              </div>
            </div>
            <Button
              size="lg"
              variant="filled"
              component="a"
              href="https://api.whatsapp.com/send?phone=5571982428566&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20reserva"
              target="_blank"
              color="#FA5252"
              className={`${roboto.className} !text-base md:!text-lg`}
            >
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
