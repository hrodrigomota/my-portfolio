import Image from "next/image";
import { IconChevronsUp } from "@tabler/icons-react";

import { Page } from "../template/Page";
import { SocialMedia } from "./SocialMedia";

import linkedinLogo from "../../../public/linkedin-white.png";
import githubLogo from "../../../public/github-white.png";
import instagramLogo from "../../../public/instagram-white.png";

export function Footer() {
  return (
    <Page>
      <div className="w-full flex flex-col-reverse items-center text-sm gap-3 md:flex-row md:text-base md:justify-between py-5 ">
        <p className="w-full text-center md:text-left">
          &copy; {new Date().getFullYear()} - Desenvolvido por Hilton Rodrigo.
        </p>
        <div className="w-full flex justify-between items-center md:justify-end md:gap-3">
          <div className="flex gap-3">
            <SocialMedia
              href="https://www.linkedin.com/in/hrodrigomota/"
              children={
                <Image
                  src={linkedinLogo}
                  alt="Logo LinkedIn"
                  width={25}
                  className="w-5 lg:w-6"
                />
              }
            />
            <SocialMedia
              href="https://github.com/hrodrigomota/"
              children={
                <Image
                  src={githubLogo}
                  alt="Logo Github"
                  width={25}
                  className="w-5 lg:w-6"
                />
              }
            />
            <SocialMedia
              href="https://www.instagram.com/hrodrigomota/"
              children={
                <Image
                  src={instagramLogo}
                  alt="Logo Instagram"
                  width={25}
                  className="w-5 lg:w-6"
                />
              }
            />
          </div>
          <a href="#">
            <IconChevronsUp className="animate-bounce" />
          </a>
        </div>
      </div>
    </Page>
  );
}
