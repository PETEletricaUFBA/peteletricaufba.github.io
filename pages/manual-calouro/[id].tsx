import { getAllManualIds, getManualData } from '../../lib/manualcalouro';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import BlogSignature from '../../components/blogSignature';
import Image from '../../lib/Image';
import MembersData from '../../data/members.json';
import NomMembersData from '../../data/nom-members.json';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import AbasMatricula from '../../public/manual-calouro/4-Matricula/matricula';
import AbasUFBA from '../../public/manual-calouro/1-Ufba/Ufba';
import AbasBUZUFBA from '../../public/manual-calouro/3-Buzufba/Buzufba';
import AbasBibliotecas from '../../public/manual-calouro/5-Bibliotecas/Bibliotecas';
import AbasRU from '../../public/manual-calouro/6-Ru/Ru';
import AbasAssistencia from '../../public/manual-calouro/7-Assistencia/Assistencia';
import AbasRepresentacao from '../../public/manual-calouro/8-Representacao/Representacao';
import AbasOrgaos from '../../public/manual-calouro/9-Orgaos/Orgaos';
import AbasAtividades from '../../public/manual-calouro/10-Atividades/Atividades';
import AbasIntercambio from '../../public/manual-calouro/11-Intercambio/Intercambio';
import AbasProReitorias from '../../public/manual-calouro/12-Pro-Reitoria/Pro-Reitoria';
import AbasCurso from '../../public/manual-calouro/2-Curso/Curso';

const Members: any = MembersData;
const NomMembers: any = NomMembersData;

// ⬇️ ADICIONADO order AQUI
interface PostData {
  id: string;
  mdxSource: MDXRemoteSerializeResult;
  image: string;
  link?: string;
  title: string;
  date: string;
  description: string;
  authors: string[];
  order?: number;    // <──────── AQUI
}

interface Props {
  postData: PostData;
}

export default function Post({ postData }: Props) {
  const isDisciplinasPage = postData.id === '1-Disciplinas';

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <div className="container post">
        <div className="col-lg-8 mx-auto">
          <div className="title my-5 d-flex align-items-center justify-content-center gap-3 flex-wrap text-center">
            {postData.image && (
              <Image
                src={postData.image}
                alt={postData.title}
                width={50}
                height={50}
                objectFit="cover"
                style={{ borderRadius: '8px' }}
              />
            )}
            <h1 className="m-0">{postData.title}</h1>
          </div>

          {!isDisciplinasPage && (
            <p className="text-end fw-lighter">
              <Date dateString={postData.date} />
            </p>
          )}

          <MDXRemote
          {...postData.mdxSource}
          components={{
            AbasMatricula,
            AbasUFBA,
            AbasBUZUFBA,
            AbasBibliotecas,
            AbasRU,
            AbasAssistencia,
            AbasRepresentacao,
            AbasOrgaos,
            AbasAtividades,
            AbasIntercambio,
            AbasProReitorias,
            AbasCurso,
          }}
/>


          {!isDisciplinasPage &&
            postData.authors?.map((author, index) => {
              const authorData = Members[author] || NomMembers[author];
              if (!authorData) return null;
              return <BlogSignature key={index} author={authorData} index={index} />;
            })}
        </div>
      </div>
    </Layout>
  );
}

// ===== Build functions =====
export async function getStaticPaths() {
  const paths = getAllManualIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getManualData(params.id);

  return {
    props: { postData },  // <── order já vem daqui
  };
}