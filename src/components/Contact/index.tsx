import { IconPhone, IconMail } from "@tabler/icons-react";

import { Page } from "../template/Page";

export function Contact() {
  return (
    <Page>
      <div className="flex flex-col py-8">
        <h1 className="font-bold text-3xl text-center mb-6 md:text-left md:text-6xl">
          CONTATO
        </h1>
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-2">
            <IconPhone strokeWidth={1} />
            +55 (71) 99362-7845
          </li>
          <li className="flex items-center gap-2">
            <IconMail strokeWidth={1} />
            hrodrigomota@gmail.com
          </li>
        </ul>
      </div>
    </Page>
  );
}
