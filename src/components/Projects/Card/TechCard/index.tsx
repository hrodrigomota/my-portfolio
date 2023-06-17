interface TechCardProps {
  href: string;
  name: string;
}

export function TechCard({ href, name }: TechCardProps) {
  return (
    <>
      <a href={href} target="_blank">
        <p className="text-[11px] md:text-xs py-1 px-3 rounded-2xl border bg-blue-800 text-white hover:bg-blue-700 duration-500">
          {name}
        </p>
      </a>
    </>
  );
}
