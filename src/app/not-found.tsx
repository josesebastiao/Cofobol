import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-shell">
      <div className="hero-panel rounded-[2.5rem] px-6 py-12 text-center text-white sm:px-8">
        <p className="eyebrow bg-white/[0.12] text-white">Página não encontrada</p>
        <h1 className="mt-6 font-display text-5xl font-semibold uppercase sm:text-6xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/80">
          A página que procura não existe ou foi movida. Pode regressar ao início e
          continuar a explorar o universo do COFOBOL.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn-accent">
            Voltar ao início
          </Link>
        </div>
      </div>
    </section>
  );
}
