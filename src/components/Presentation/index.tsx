import Image from "next/image";

import { Page } from "../template/Page";
import { CVButton } from "../CVButton";

import linkedinLogo from "../../../public/linkedin-white.png";
import githubLogo from "../../../public/github-white.png";
import instagramLogo from "../../../public/instagram-white.png";

export function Presentation() {
  return (
    <Page>
      <div className="flex flex-col justify-center pt-12 gap-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl">
            Olá, <br />
            Eu sou <br />
            <span className="font-bold">Hilton Rodrigo👋🏽</span>
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl">
            Desenvolvedor Front-end
          </h2>
        </div>
        <div className="w-40 flex justify-between">
          <a href="https://www.linkedin.com/in/hrodrigomota/" target="_blank">
            <Image
              src={linkedinLogo}
              width={35}
              height={35}
              alt="Logo LinkedIn"
              className="md:w-10 hover:scale-110 transition-all duration-500"
            />
          </a>
          <a href="https://github.com/hrodrigomota/" target="_blank">
            <Image
              src={githubLogo}
              width={35}
              height={35}
              alt="Logo GitHub"
              className="md:w-10 hover:scale-110 transition-all duration-500"
            />
          </a>
          <a href="https://www.instagram.com/hrodrigomota/" target="_blank">
            <Image
              src={instagramLogo}
              width={35}
              height={35}
              alt="Logo Instagram"
              className="md:w-10 hover:scale-110 transition-all duration-500"
            />
          </a>
        </div>
        <CVButton className="lg:hidden hover:bg-white hover:text-black" />
      </div>
    </Page>
  );
}
