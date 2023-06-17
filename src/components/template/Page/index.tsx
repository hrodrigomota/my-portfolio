interface PageProps {
  children: any;
  className?: string;
}

export function Page(props: PageProps) {
  return (
    <div className={`mx-auto flex flex-col w-[85%] ${props.className}`}>
      {props.children}
    </div>
  );
}
