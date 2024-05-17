import { Budget } from './ui/budget'
import { Contact } from './ui/contact'
import Header from './ui/header'
import { HowItWorks } from './ui/howItWorks'
import Navbar from './ui/navbar'
import { Presentation } from './ui/presentation'
import { Service } from './ui/service'
import { Testimony } from './ui/testimony'

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Presentation />
      <Service />
      <Testimony />
      <HowItWorks />
      <Budget />
      <Contact />
    </>
  )
}
