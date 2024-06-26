import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-5xl w-full items-center justify-between flex mx-auto py-3">
      <ul className="text-xs text-center mx-auto text-indigo-900">
        <li className="inline-block p-2">
          <Link
            href="https://estadioalgarve.pt/politica-de-privacidade-e-protecao-de-dados"
            target="_blank"
          >
            Termos e Condições
          </Link>
        </li>
        <li className="inline-block p-2">|</li>
        <li className="inline-block p-2">
          <Link
            href="https://estadioalgarve.pt/politica-de-privacidade-e-protecao-de-dados"
            target="_blank"
          >
            Politica de Privacidade
          </Link>
        </li>
        <li className="hidden md:inline-block p-2 ">|</li>
        <li className="block md:inline p-2">
          <Link href="/unsubscribe">Não quero receber mais comunicações.</Link>
        </li>
      </ul>
    </div>
  );
}
