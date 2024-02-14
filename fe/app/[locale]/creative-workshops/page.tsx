import BreadcrumbsTitle from "@components/BreadcrumbsTitle/BreadcrumbsTitle";
import CategoryGrid from "@components/CategoryGrid/CategoryGrid";
import Title from "@components/Title/Title";
import { useTranslations } from "next-intl";

export default function CreativeWorkshopsPage() {
  const t = useTranslations("Menu");

  return (
    <main className="flex mx-14 pt-11">
      <div className="w-fit">
        <Title title={t("CreativeWorkshops")} category="businessWorkshops" />
        <div className="font-lato text-xl mt-10">
          Quando seguimos uma área, um curso, ou um caminho específico na nossa
          vida, corremos o risco de nos limitarmos a esse universo, sem sair da
          nossa zona de conforto, deixando para trás a nossa imaginação e
          criatividade. Os Creative Workshops surgem acima de tudo de uma grande
          paixão nossa e de todos os nossos formadores: sentimos que é algo que
          adoraríamos ter tido quando éramos mais novos e estávamos a estudar -
          alargar os nossos horizontes, expandindo a nossa exposição e
          conhecimento a diferentes áreas. O que são: Os Creative Workshops são
          sessões criativas teóricas e/ou práticas dependendo da área e do nível
          da sessão. Nas sessões práticas os formadores e formadoras de uma
          determinada área, lançam um desafio criativo para os alunos e alunas
          concluírem num determinado prazo de forma a que no dia da sessão,
          on-line ou presencial, os desafios sejam analisados com feedback
          personalizado. Nas sessões teóricas, os formadores e formadoras
          fornecem alguns conceitos básicos que ajudam a elevar o conhecimento
          sobre a sua área, de forma a que os alunos e as alunas possam
          encontrar alguns atalhos quando chegar a hora prática.A importância de
          personalizar e de fazer sobressair a parte única de cada aluno é um
          dos pilares fundamentais do sistema de aprendizagem/ensino do estúdio.
        </div>

        <div className="flex justify-center my-20">
          <span className="font-league-gothic text-7xl uppercase">
            Os nossos serviços
          </span>
        </div>

        <div className="flex justify-center">
          <CategoryGrid />
        </div>
      </div>
    </main>
  );
}
