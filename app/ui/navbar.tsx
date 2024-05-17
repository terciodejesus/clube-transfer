'use client'

import { Button, Drawer, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Image from 'next/image'
import { RxHamburgerMenu } from 'react-icons/rx'

const links = [
  {
    name: 'Início',
    anchor: '#home',
  },
  {
    name: 'Sobre nós',
    anchor: '#aboutUs',
  },
  {
    name: 'Serviços',
    anchor: '#services',
  },
  {
    name: 'Contato',
    anchor: '#contact',
  },
]

export default function Navbar() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <div className="flex flex-col absolute top-0 w-full text-white z-20">
      <div className="flex items-center justify-between w-full py-2 px-4 md:py-2 md:px-8">
        <Image src={'/logo.png'} alt="text" width={50} height={58} />

        <NavLinks />

        <div className="md:block hidden">
          <Button variant="outline" color="#FFFFFF">
            Reserve já
          </Button>
        </div>

        <button className="md:hidden">
          <RxHamburgerMenu
            size={24}
            // onClick={() => {
            //   // setIsMenuOpen(!isMenuOpen)

            // }}
            onClick={open}
          />
        </button>
      </div>

      <Drawer opened={opened} onClose={close} title="Menu" position="right">
        <NavLink href="#aboutUs" label="Sobre nós" onClick={close} />
        <NavLink href="#services" label="Serviços" onClick={close} />
        <NavLink href="#contact" label="Contato" onClick={close} />
      </Drawer>
    </div>
  )
}

function NavLinks() {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          className="items-center justify-center px-4 h-12 text-lg font-normal leading-5 md:flex hidden"
          href={link.anchor}
        >
          {link.name}
        </a>
      ))}
    </div>
  )
}
