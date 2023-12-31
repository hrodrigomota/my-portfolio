import { IconArrowDown } from "@tabler/icons-react";
import AOS from 'aos'
import 'aos/dist/aos.css'


import { Header } from "@/components/Header";
import { Presentation } from "@/components/Presentation";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio - Hilton Rodrigo</title>
        <meta
          name="description"
          content="Portfolio Hilton Rodrigo - Desenvolvedor Front-end"
        />
        <meta
          name="keywords"
          content="Portfolio, Front-end"
        />
      </Head>
      <Header />
      <main className="flex flex-col">
        <section
          id="presentation"
          className="bg-cover bg-[url('/abstract-blue-fractal-wave-technology-background.jpg')] text-white min-h-screen flex flex-col justify-between"
        >
          <div></div>
          <Presentation />
          <a href="#about" className="flex justify-center py-2 pb-16 md:pb-0">
            <IconArrowDown className="animate-bounce" size={30} />
          </a>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills" className="text-white bg-black">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact" className="bg-black text-white">
          <Contact />
        </section>
      </main>
      <section className="border-t bg-black text-white">
        <Footer />
      </section>
    </>
  );
}
