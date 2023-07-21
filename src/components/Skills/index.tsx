import Image from "next/image";
import { IconArrowDown } from "@tabler/icons-react";

import { Page } from "../template/Page";
import { Tech } from "./Tech";

import HTML from "../../../public/html-5.png";
import CSS from "../../../public/css-3.png";
import JavaScript from "../../../public/js.png";
import Git from "../../../public/git.png";
import GitHub from "../../../public/github.png";
import Figma from "../../../public/figma.png";
import NodeJS from "../../../public/node-js.png";
import ReactJS from "../../../public/react.png";
import SASS from "../../../public/sass.svg";
import Bootstrap from "../../../public/bootstrap.png";
import NextJS from "../../../public/nextjs.svg";
import TailwindCSS from "../../../public/tailwind-css.png";
import TypeScript from "../../../public/typescript.png";

export function Skills() {
  return (
    <Page>
      <div className="flex flex-col min-h-screen justify-between">
        <div>
          <h1 className="font-bold text-3xl text-center mt-12 md:mt-16 md:text-6xl md:text-left" data-aos="fade-right">
            HABILIDADES
          </h1>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 lg:gap-12" data-aos="fade-up" data-aos-duration="1000">
          <Tech
            href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
            target="_blank"
            title="HTML"
          >
            <Image src={HTML} alt="Logo HTML" width={30} height={30} />
          </Tech>

          <Tech
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
            title="CSS"
          >
            <Image src={CSS} alt="Logo CSS" width={30} height={30} />
          </Tech>

          <Tech
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
            title="JavaScript"
          >
            <Image
              src={JavaScript}
              alt="Logo JavaScript"
              width={30}
              height={30}
            />
          </Tech>

          <Tech href="https://git-scm.com/" target="_blank" title="Git">
            <Image src={Git} alt="Logo Git" width={30} height={30} />
          </Tech>

          <Tech href="https://github.com/" target="_blank" title="GitHub">
            <Image src={GitHub} alt="Logo GitHub" width={30} height={30} />
          </Tech>

          <Tech href="https://www.figma.com/" target="_blank" title="Figma">
            <Image src={Figma} alt="Logo Figma" width={30} height={30} />
          </Tech>

          <Tech href="https://nodejs.org/en" target="_blank" title="Node.js">
            <Image src={NodeJS} alt="Logo NodeJS" width={30} height={30} />
          </Tech>

          <Tech href="https://react.dev/" target="_blank" title="React.js">
            <Image src={ReactJS} alt="Logo ReactJS" width={30} height={30} />
          </Tech>

          <Tech href="https://sass-lang.com/" target="_blank" title="Sass">
            <Image src={SASS} alt="Logo SASS" width={40} height={30} />
          </Tech>

          <Tech
            href="https://getbootstrap.com/"
            target="_blank"
            title="Bootstrap"
          >
            <Image
              src={Bootstrap}
              alt="Logo Bootstrap"
              width={30}
              height={30}
            />
          </Tech>

          <Tech href="https://nextjs.org/" target="_blank" title="Next.js">
            <Image src={NextJS} alt="Logo NextJS" width={30} height={30} />
          </Tech>

          <Tech
            href="https://tailwindcss.com/"
            target="_blank"
            title="Tailwind CSS"
          >
            <Image
              src={TailwindCSS}
              alt="Logo TailwindCSS"
              width={30}
              height={30}
            />
          </Tech>

          <Tech
            href="https://www.typescriptlang.org/"
            target="_blank"
            title="TypeScript"
          >
            <Image
              src={TypeScript}
              alt="Logo TypeScript"
              width={30}
              height={30}
            />
          </Tech>
        </div>
        <a href="#projects" className="flex justify-center py-2 pb-16 md:pb-0 text-white">
          <IconArrowDown className="animate-bounce" size={30} />
        </a>
      </div>
    </Page>
  );
}
