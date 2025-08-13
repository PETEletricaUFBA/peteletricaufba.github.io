// pages/em-desenvolvimento.tsx
import Layout from "../components/layout";
import Link from "next/link";

export default function EmDesenvolvimento() {
    return (
        <Layout>
            <section className="section min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
                <div className="container">
                    <h1 className="display-3 text-primary mb-4">
                        🚧 Estamos trabalhando nisso!
                    </h1>
                    <p className="lead text-secondary mb-5">
                        Esta página está em desenvolvimento. Em breve você encontrará novidades por aqui.
                    </p>
                    <Link href="/" passHref>
                        <a className="btn btn-primary btn-lg">
                            ← Voltar para a página inicial
                        </a>
                    </Link>
                </div>
            </section>
        </Layout>
    );
}
