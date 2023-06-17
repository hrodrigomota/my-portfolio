interface TechProps {
  href: string;
  target: string;
  title: string;
  children: any;
}

export function Tech(props: TechProps) {
  return (
    <div>
      <a
        href={props.href}
        target={props.target}
        className="w-32 h-auto text-xs p-2 flex items-center gap-2 rounded-lg md:w-36 md:text-sm lg:w-44 lg:text-base bg-white text-black hover:text-blue-800 hover:shadow-[0px_0px_15px_5px] hover:shadow-blue-500/100"
      >
        {props.children}
        {props.title}
      </a>
    </div>
  );
}
