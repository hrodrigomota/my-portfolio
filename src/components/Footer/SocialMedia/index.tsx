interface SocialMediaProps {
  href: string;
  children: any;
}

export function SocialMedia(props: SocialMediaProps) {
  return (
    <>
      <a
        href={props.href}
        target="_blank"
        className=" flex p-3 rounded-xl bg-zinc-900 hover:bg-zinc-700"
      >
        {props.children}
      </a>
    </>
  );
}
