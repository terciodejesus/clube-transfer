'use client'

import { Button } from '@mantine/core'
import { Inria_Sans as InriaSans, Roboto } from 'next/font/google'
import { FaStar, FaTripadvisor, FaWhatsapp } from 'react-icons/fa'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { testimonies, TestimonyType } from '../testimonies'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })
const inriaSans = InriaSans({ subsets: ['latin'], weight: ['400', '700'] })

export function Testimony() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '60px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col space-y-10 py-10 md:py-20 items-center bg-[#F9F9F9]">
      <div className="flex flex-col items-center gap-4 text-center">
        <span
          className={`${inriaSans.className} text-2xl md:text-[40px] font-bold -tracking-[0.8px]`}
        >
          Excelência em transporte e turismo
        </span>
        <span className={`${roboto.className} text-lg md:text-xl`}>
          A Clube Transfer Receptivo leva nota máxima no Tripadvisor
        </span>
      </div>
      <div className="container">
        <Slider {...settings}>
          {testimonies.map((testimony: TestimonyType, index: number) => (
            <TestimonyCard
              key={`${index}-${testimony.username}`}
              username={testimony.username}
              stars={testimony.stars}
              publishedAt={testimony.publishedAt}
              testimony={testimony.testimony}
            />
          ))}
        </Slider>

        <div className="flex flex-col items-center">
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
    </div>
  )
}

function TestimonyCard({
  publishedAt,
  stars,
  testimony,
  username,
}: {
  username: string
  stars: number
  publishedAt: string
  testimony: string
}) {
  return (
    <div className="p-6 shadow-xl flex flex-col gap-6 w-auto md:w-[296px] min-h-[408px] rounded-2xl mb-10 mr-1">
      <div className="flex flex-col gap-4 items-center">
        <span className={`${roboto.className} text-2xl font-bold`}>
          {username}
        </span>
        <span className="w-20 border border-[#C1C2C5]"></span>
        <div className="flex gap-2 items-center">
          {Array.from({ length: stars }).map((_, index) => (
            <FaStar key={`${index}-${username}`} color="#FAB005" size={18} />
          ))}
        </div>
      </div>
      <p className={`${roboto.className} text-center leading-6 flex-1`}>
        {testimony}
      </p>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-sm text-[#5C5F66]">
          Publicado em {publishedAt}
        </span>
        <div className="flex gap-2 items-center">
          <FaTripadvisor size={18} />
          <span className="font-bold">Tripadvisor</span>
        </div>
      </div>
    </div>
  )
}
