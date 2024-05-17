import { Inria_Sans as InriaSans, Roboto } from 'next/font/google'
import Image from 'next/image'
import { FaInstagram, FaTripadvisor, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })

export function Contact() {
  return (
    <div
      className={`${roboto.className} p-10 px-4 md:p-16 bg-[#0A1F27] text-white`}
      id="contact"
    >
      <div className="flex flex-col gap-8 items-center text-center">
        <span
          className={`${inriaSans.className} text-2xl md:text-[40px] font-bold -tracking-[0.4px] md:-tracking-[0.8px]`}
        >
          Contate-nos
        </span>
        <div className="flex flex-col gap-2">
          <span
            className={`${inriaSans.className} text-base md:text-[32px] font-bold -tracking-[0.8px]`}
          >
            “A jornada de mil milhas começa com um passo.”
          </span>
          <span className={`${inriaSans.className} !italic text-sm md:text-xl`}>
            - Lao Tzu{' '}
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 text-left">
          <div className="flex flex-col gap-8 md:w-6/12">
            <p className="text-base md:text-xl">
              Dê o primeiro passo com a Transfer Clube Receptivo e inicie sua
              jornada na Bahia com tranquilidade, segurança e o conforto que
              merece.
            </p>
            <div className="flex flex-col gap-3 text-center md:text-left">
              <div className="w-full">
                <Image
                  src={'/contact3.png'}
                  alt="text"
                  width={1200}
                  height={900}
                  className="rounded-tl-[32px] rounded-br-[32px] w-full h-full"
                />
              </div>
              <span className={`${roboto.className} text-sm`}>
                Foto do cliente Paulo Roberto, no Tripadvisor
              </span>
            </div>
          </div>
          <div className="md:w-6/12 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-bold text-xl md:text-2xl">
                Para orçamentos e reservas:
              </span>
              <div className="flex gap-2 items-center">
                <FaWhatsapp size={24} color="#FF8787" />
                <span className="text-base md:text-2xl">
                  WhatsApp:{' '}
                  <span className="underline">
                    <a href="https://wa.me/5571982428566?text=Eu%20gostaria%20de%20fazer%20um%20orçamento">
                      (71) 98242-8566
                    </a>
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-bold text-xl md:text-2xl">
                Para comentários, feedbacks e sugestões:
              </span>
              <div className="flex gap-2 items-center">
                <FaTripadvisor size={24} color="#FF8787" />
                <span className="text-base md:text-2xl">
                  <a
                    className="underline"
                    href="https://www.tripadvisor.com.br/Attraction_Review-g1932196-d23104418-Reviews-Clube_Transfer-Lauro_de_Freitas_State_of_Bahia.html"
                  >
                    Clube Transfer no Tripadvisor
                  </a>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <FaInstagram size={24} color="#FF8787" />
                <span className="text-base md:text-2xl">
                  <a
                    className="underline"
                    href="https://www.instagram.com/clubetransfer/"
                  >
                    @clubetransfer
                  </a>
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <MdOutlineEmail size={24} color="#FF8787" />
                <span className="text-base md:text-2xl">
                  <a
                    className="underline"
                    href="mailto:clubetransfersalvador@gmail.com"
                  >
                    clubetransfersalvador@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
