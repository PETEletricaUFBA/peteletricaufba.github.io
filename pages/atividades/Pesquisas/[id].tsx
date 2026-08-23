import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Image from '../../../lib/Image';
import { getAllPesquisasIds, getPesquisaData } from '../../../lib/pesquisas';

export default function PesquisaPage({ pesquisa }: { pesquisa: Awaited<ReturnType<typeof getPesquisaData>> }) {
  return (
    <Layout>
      <Head>
        <title>{pesquisa.title} | PET Elétrica UFBA</title>
      </Head>
      <main className="container post">
        <div className="col-lg-8 mx-auto">
          <div className="title my-5 text-center">
            <h1>{pesquisa.title}</h1>
          </div>
          <div className="text-center mb-5">
            <Image src={pesquisa.image} alt="" width={180} height={180} objectFit="contain" />
          </div>
          <div dangerouslySetInnerHTML={{ __html: pesquisa.contentHtml }} />
          <div className="text-center mt-5 mb-5">
            <Link href="/atividades/Pesquisas" passHref>
              <a className="btn btn-atividades">Voltar para Pesquisas</a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: getAllPesquisasIds(),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return {
    props: {
      pesquisa: await getPesquisaData(params.id),
    },
  };
}
