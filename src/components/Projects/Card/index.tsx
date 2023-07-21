import Image, { StaticImageData } from "next/image";

import GitHubLogo from "../../../../public/github.png";

interface CardProps {
  href: string;
  hrefRepo: string;
  children: any;
  name: string;
  description: string;
  src: StaticImageData;
  alt: string;
}

export function Card(props: CardProps) {
  return (
    <div className="w-64 border rounded-lg border-blue-800" data-aos="fade-up" data-aos-duration="1000">
      <a
        href={props.href}
        target="_blank"
        className="hover:opacity-40 hover:transition-opacity"
      >
        <Image
          src={props.src}
          alt={props.alt}
          width={288}
          height={288}
          className="rounded-t-lg"
        />
      </a>
      <h2 className="text-sm md:text-base font-bold text-center text-blue-800 hover:text-blue-600">
        <a href={props.href} target="_blank">
          {props.name}
        </a>
      </h2>
      <p className="text-xs md:text-sm text-justify h-auto px-3 py-1">
        {props.description}
      </p>
      <div className="h-16 flex flex-wrap justify-center items-center px-3 gap-1">
        {props.children}
      </div>
      <div className="flex justify-between items-center p-3">
        <a
          href={props.hrefRepo}
          target="_blank"
          className="duration-500 hover:opacity-40"
        >
          <Image
            src={GitHubLogo}
            alt="Logo GitHub"
            width={25}
            height={25}
            className="w-6 md:w-7 lg:w-8"
          />
        </a>
        <a
          href={props.href}
          target="_blank"
          className="font-bold duration-500 hover:opacity-40"
        >
          <p className="text-xs md:text-sm">+ Saiba mais</p>
        </a>
      </div>
    </div>
  );
}
