import { Page } from "../template/Page";
import { Card } from "./Card";
import { TechCard } from "./Card/TechCard";

import ToDoDaily from "../../assets/toDoDaily.png";
import StaartApp from "../../assets/staart-front-end-app.png";
import ConsumingAPI from "../../assets/consumingAPI.png";
import BooksSearch from "../../assets/booksSearch.png";
import ContactLink from "../../assets/contactLink.png";
import FlashApp from "../../assets/flashApp.png";
import DoctorCare from "../../assets/doctorCare.png";

export function Projects() {
  return (
    <Page>
      <div className="w-full pb-16">
        <h1 className="font-bold text-blue-800 text-3xl text-center mt-12 md:mt-16 md:text-6xl md:text-left md:mb-12">
          PROJETOS
        </h1>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
          <Card
            src={ToDoDaily}
            alt="To Do Daily Screen"
            href="https://to-do-daily.vercel.app/"
            hrefRepo="https://github.com/hrodrigomota/to-do-daily"
            name="To Do Daily"
            description="O To Do Daily consiste em uma ferramenta que tem como propósito auxiliar na organização das tarefas do dia. Em formato CRUD, permite criar, editar e excluir atividades, bem como marcá-las como concluídas, apresentando um layout com tema claro ou escuro."
          >
            <TechCard href="https://react.dev/" name="React" />
            <TechCard href="https://nextjs.org/" name="Next.js" />
            <TechCard href="https://tailwindui.com/" name="Tailwind CSS" />
            <TechCard
              href="https://www.typescriptlang.org/"
              name="TypeScript"
            />
            <TechCard href="https://tabler-icons.io/" name="Tabler-icons" />
          </Card>

          <Card
            src={StaartApp}
            alt="Staart Front-end App Screen"
            href="https://staart-frontend.vercel.app/"
            hrefRepo="https://github.com/hrodrigomota/staart-frontend"
            name="Staart Front-end App"
            description="O Staart Front-end App consiste na simulação de uma plataforma de cursos baseada na Staart, a qual contou com a criação de um layout responsivo próprio e o consumo de uma API (e seus fluxos) disponibilizada para o desenvolvimento do projeto."
          >
            <TechCard href="https://react.dev/" name="React" />
            <TechCard
              href="https://reactrouter.com/en/main"
              name="React Router"
            />
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              name="CSS"
            />
            <TechCard href="https://firebase.google.com/" name="Firebase" />
            <TechCard href="https://vitejs.dev/" name="Vite" />
          </Card>

          <Card
            src={ConsumingAPI}
            alt="Consuming API Screen"
            href="https://hrodrigomota.github.io/consuming-API-v2/"
            hrefRepo="https://github.com/hrodrigomota/consuming-API-v2"
            name="Consuming API"
            description="O Consuming API consiste num projeto que visa a prática do consumo de Application Programming Interface - API, juntamente com o paradigma da Programação Orientada ao Objeto - POO, onde, utilizou-se a Chuck Norris IO e a PokéAPI."
          >
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              name="HTML"
            />
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              name="CSS"
            />

            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              name="JavaScript"
            />
          </Card>

          <Card
            src={BooksSearch}
            alt="Books Search Screen"
            href="https://hrodrigomota.github.io/books-search/"
            hrefRepo="https://github.com/hrodrigomota/books-search"
            name="Books Search"
            description="O Books Search consiste em uma página para busca de informações sobre livros, que contempla a funcionalidade de filtro a partir do nome do autor, do título ou do ano de publicação, além da função de listagem de todos os livros previamente estabelecidos."
          >
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              name="HTML"
            />
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              name="CSS"
            />

            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              name="JavaScript"
            />
          </Card>

          <Card
            src={ContactLink}
            alt="Contact Link Screen"
            href="https://hrodrigomota.github.io/contact-link/"
            hrefRepo="https://github.com/hrodrigomota/contact-link"
            name="Contact Link"
            description="O Contact Link visa compilar e, consequentemente, otimizar o compartilhamento de contatos pessoais e/ou profissionais a partir de um único link. Além disso, conta com funções que dão interatividade ao usuário, como alterar cores e tema."
          >
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              name="HTML"
            />
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              name="CSS"
            />

            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              name="JavaScript"
            />
          </Card>

          <Card
            src={FlashApp}
            alt="Flash Screen"
            href="https://hrodrigomota.github.io/Flash-quick-staart/"
            hrefRepo="https://github.com/hrodrigomota/Flash-quick-staart"
            name="Flash"
            description="O Flash foi desenvolvido durante o evento Quick Staart da plataforma Staart. Em formato de quiz, visa testar o vocabulário técnico do desenvolvedor, onde, perguntas e respostas são recebidas através de uma API disponibilizada para a criação do projeto."
          >
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              name="HTML"
            />
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              name="CSS"
            />

            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              name="JavaScript"
            />
          </Card>

          <Card
            src={DoctorCare}
            alt="DoctorCare Screen"
            href="https://hrodrigomota.github.io/Rocketseat-NLW-Return-Origin/"
            hrefRepo="https://github.com/hrodrigomota/Rocketseat-NLW-Return-Origin"
            name="DoctorCare"
            description="O DoctorCare foi desenvolvido durante o evento Next Level Week - NLW Return da plataforma Rocketseat. Consiste em uma página institucional, no formato “One Page”, que apresenta responsividade e pode ser usada como base para empresas de qualquer porte."
          >
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              name="HTML"
            />
            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              name="CSS"
            />

            <TechCard
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              name="JavaScript"
            />
          </Card>
        </div>
      </div>
    </Page>
  );
}
