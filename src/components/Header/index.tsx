import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

import { CVButton } from "../CVButton";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="fixed w-screen h-auto z-10 bg-black text-white py-3">
      <div className="w-[85%] mx-auto flex flex-col items-center justify-end sm:justify-center">
        <IconMenu2
          className={`${
            isOpen ? "hidden" : "block"
          } self-end sm:hidden cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        />
        <IconX
          className={`${
            isOpen ? "block" : "hidden"
          } self-end sm:hidden cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full h-screen pt-20 flex flex-col items-center gap-8 sm:pt-0 sm:h-auto sm:flex sm:flex-row sm:justify-center lg:justify-between lg:items-center`}
        >
          <div className="flex flex-col items-center gap-6 font-bold sm:font-normal sm:flex-row sm:gap-6 lg:gap-8 xl:gap-12">
            <a
              href="#"
              className="hover:opacity-80 hover:border-b border-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Início
            </a>
            <p className="hidden sm:block">|</p>
            <a
              href="#about"
              className="hover:opacity-80 hover:border-b border-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Sobre
            </a>
            <p className="hidden sm:block">|</p>
            <a
              href="#skills"
              className="hover:opacity-80 hover:border-b border-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Habilidades
            </a>
            <p className="hidden sm:block">|</p>
            <a
              href="#projects"
              className=" hover:opacity-80 hover:border-b border-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Projetos
            </a>
            <p className="hidden sm:block">|</p>
            <a
              href="#contact"
              className="hover:opacity-80 hover:border-b border-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              Contato
            </a>
          </div>
          <CVButton className="sm:hidden lg:flex hover:bg-white hover:text-black" />
        </nav>
      </div>
    </div>
  );
}
