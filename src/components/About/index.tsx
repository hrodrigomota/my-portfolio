import Image from "next/image";
import { IconArrowDown } from "@tabler/icons-react";

import { Page } from "../template/Page";
import { CVButton } from "../CVButton";

import profilePhoto from "../../assets/profilePhoto.png";

export function About() {
  return (
    <Page>
      <div className="flex flex-col min-h-screen justify-between">
        <h1 className="font-bold text-3xl text-center mt-12 md:mt-16 md:text-6xl md:text-left text-blue-800" data-aos="fade-right">
          SOBRE
        </h1>
        <div className="flex flex-col items-center gap-5 md:gap-12 md:flex-row ">
          <Image
            src={profilePhoto}
            width={250}
            height={350}
            alt="Foto de Perfil"
            className="w-32 md:w-56 outline outline-1 outline-blue-800"
            data-aos="flip-right"
            data-aos-duration="1000"
          />
          <div className="flex flex-col justify-between gap-5 text-xs md:h-[357px] md:text-sm lg:text-base" data-aos="fade-up" data-aos-duration="1000">
            <p className="text-justify">
              Brasileiro, natural de Salvador-BA, tenho 33 anos. Sou Engenheiro
              Ambiental e, atualmente, me encontro em processo de transição de
              carreira para a área tecnológica, com o propósito de me tornar um
              desenvolvedor front-end. A predisposição para aprender novas
              habilidades e superar desafios, características que, atrelado ao
              forte contato sempre existente com a tecnologia, me fizeram tomar
              a decisão de encarar essa nova jornada!
            </p>
            <div>
              <p className="font-bold text-blue-800">Cursos/Certificações:</p>
              <ul>
                <li>Ímã Tech - Desenvolvimento Full Stack</li>
                <li>
                  One Bit Code - Desenvolvimento Full Stack
                </li>
                <li>Staart - Desenvolvimento Frontend</li>
                <li>DIO - Bootcamp Orange Tech +</li>
                <li>Rocketseat - Programa Discover</li>
              </ul>
            </div>
            <CVButton className="mt-1 hover:bg-blue-800 hover:text-white self-center sm:self-start" />
          </div>
        </div>
        <a href="#skills" className="flex justify-center py-2 pb-16 md:pb-0 text-blue-800">
          <IconArrowDown className="animate-bounce" size={30} />
        </a>
      </div>
    </Page>
  );
}
