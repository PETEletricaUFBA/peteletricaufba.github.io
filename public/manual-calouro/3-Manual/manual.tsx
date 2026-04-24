import { useEffect, useRef } from "react";

export default function AbasManual() {
  const hasOpened = useRef(false);

  useEffect(() => {
    if (hasOpened.current) return;
    hasOpened.current = true;

    // abre o PDF
    window.open("/docs/livros/manual-calouro.pdf", "_blank");

    // redireciona para a página desejada
    window.location.href = "/manual-calouro";
  }, []);

  return <p>Abrindo manual...</p>;
}