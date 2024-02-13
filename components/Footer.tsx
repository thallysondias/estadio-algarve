import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-5xl w-full items-center justify-between flex mx-auto py-3">
      <ul className="text-xs text-center mx-auto text-indigo-900">
        <li className="inline-block p-2">
          <Link
            href="https://www.farosomostodos.pt/termos-legais/"
            target="_blank"
          >
            Termos e Condições
          </Link>
        </li>
        <li className="inline-block p-2">|</li>
        <li className="inline-block p-2">
          <Link
            href="https://www.farosomostodos.pt/politica-privacidade/"
            target="_blank"
          >
            Politica de Privacidade
          </Link>
        </li>
        <li className="hidden md:inline-block p-2 ">|</li>
        <li className="block md:inline p-2">
          <Link href="/unsubscribe">
            Não quero receber mais comunicações. Remover-me da lista
          </Link>
        </li>
      </ul>
    </div>
  );
}
