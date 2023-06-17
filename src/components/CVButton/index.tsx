import { IconNotes } from "@tabler/icons-react";

interface CVButtonProps {
  className?: string;
}

export function CVButton(props: CVButtonProps) {
  return (
    <>
      <a
        href="/cv-hilton-rodrigo.pdf"
        download="cv-hilton-rodrigo.pdf"
        className={`py-2 w-40 flex items-center justify-center gap-2 border rounded-lg cursor-pointer duration-700 ${props.className}`}
      >
        <p className="pl-1">Download CV</p>
        <IconNotes strokeWidth={1} />
      </a>
    </>
  );
}
