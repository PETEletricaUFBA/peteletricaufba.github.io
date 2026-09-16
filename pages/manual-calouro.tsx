import { useState } from 'react';
import { getSortedManualData, getManualData } from '../lib/manualcalouro';
import Layout from '../components/layout';
import Image from '../lib/Image';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import AbasMatricula from '../public/manual-calouro/4-Matricula/matricula';
import AbasUFBA from '../public/manual-calouro/1-Ufba/Ufba';
import AbasBUZUFBA from '../public/manual-calouro/3-Buzufba/Buzufba';
import AbasBibliotecas from '../public/manual-calouro/5-Bibliotecas/Bibliotecas';
import AbasRU from '../public/manual-calouro/6-Ru/Ru';
import AbasAssistencia from '../public/manual-calouro/7-Assistencia/Assistencia';
import AbasRepresentacao from '../public/manual-calouro/8-Representacao/Representacao';
import AbasOrgaos from '../public/manual-calouro/9-Orgaos/Orgaos';
import AbasAtividades from '../public/manual-calouro/10-Atividades/Atividades';
import AbasIntercambio from '../public/manual-calouro/11-Intercambio/Intercambio';
import AbasProReitorias from '../public/manual-calouro/12-Pro-Reitoria/Pro-Reitoria';
import AbasCurso from '../public/manual-calouro/2-Curso/Curso';

interface ManualData {
  id: string;
  link: string;
  image: string;
  order: number;
  title: string;
  description: string;
  mdxSource: MDXRemoteSerializeResult;
}

interface Props {
  allManualData: ManualData[];
}

export async function getStaticProps() {
  const basicData = getSortedManualData();

  const allManualData = await Promise.all(
    basicData.map(async (manual) => {
      const data = await getManualData(manual.id);

      return {
        ...manual,
        mdxSource: data.mdxSource,
      };
    })
  );

  return {
    props: {
      allManualData,
    },
  };
}

export default function Manual({ allManualData }: Props) {
  const [selectedChapter, setSelectedChapter] = useState(
    allManualData[0]
  );

  if (!selectedChapter) {
    return (
      <Layout>
        <div className="container text-center">
          <p>Nenhum capítulo encontrado.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>

      {/* Título e introdução */}
      <section className="section pb-0">
        <div className="container">

          <div className="text-center">
            <h1 className="display-3">
              Manual da Engenharia Elétrica
            </h1>
          </div>

          {/* Texto introdutório */}
          <div
            className="manual-introducao"
            style={{
              maxWidth: '1000px',
              margin: '30px auto 0',
              textAlign: 'justify',
              lineHeight: '1.7',
              fontSize: '1rem',
            }}
          >
            <p>
              Durante a graduação em Engenharia Elétrica, os estudantes terão
              contato com diferentes conteúdos e áreas de atuação, além de
              oportunidades de participar de projetos de pesquisa e extensão,
              monitorias, estágios, eventos e outras iniciativas que contribuem
              para sua formação acadêmica e profissional.
            </p>

            <p>
              Com o objetivo de facilitar a adaptação ao curso e à vida
              universitária, o PET Engenharia Elétrica UFBA elaborou o Manual do
              Calouro, inspirado em versões anteriores confeccionadas em 2018.
              O material reúne informações sobre a estrutura da UFBA, os serviços
              oferecidos, o funcionamento acadêmico, a assistência estudantil e
              outras orientações relevantes para o cotidiano universitário.
            </p>
          </div>

          {/* PDF */}
          <div
            className="alinha-centro"
            style={{ marginTop: '40px' }}
          >
            <a
              href="/docs/livros/manual-calouro-2.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="card-manual"
            >
              <div className="conteudo">

                <img
                  src="/images/manual/logo_manual_calouro.png"
                  alt="Logo Manual"
                  className="icone"
                />

                <div className="texto">
                  <h3>Manual do Calouro Completo em PDF</h3>

                  <p>
                    Acesse o Manual do Calouro e comece sua jornada
                    universitária com o pé direito!
                  </p>
                </div>

              </div>
            </a>
          </div>

          <p style={{
              maxWidth: '1000px',
              margin: '30px auto 0',
              textAlign: 'justify',
              lineHeight: '1.7',
              fontSize: '1rem',
            }}>
            Na seção abaixo, reunimos algumas informações importantes dos diferentes
            capítulos do Manual do Calouro para facilitar sua consulta. Explore os
            tópicos abaixo e, para ter acesso ao conteúdo completo, consulte a versão
            em PDF.
          </p>

        </div>
      </section>


      {/* Seletor dos capítulos */}
      <section className="section">
        <div className="container">

          <div className="manual-tabs">

            {allManualData.map((chapter) => (
              <button
                key={chapter.id}
                type="button"
                onClick={() => setSelectedChapter(chapter)}
                className={
                  selectedChapter.id === chapter.id
                    ? 'manual-tab active'
                    : 'manual-tab'
                }
              >
                {chapter.title}
              </button>
            ))}

          </div>


          {/* Conteúdo */}
          <div className="manual-content">

            <div className="manual-content-header">

              {/*
              {selectedChapter.image && (
                <Image
                  src={selectedChapter.image}
                  alt={selectedChapter.title}
                  width={60}
                  height={60}
                  objectFit="contain"
                />
              )}
              */}

              <h2>
                {selectedChapter.title}
              </h2>

            </div>

            <div className="manual-content-body">

              <MDXRemote
                {...selectedChapter.mdxSource}
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

            </div>

          </div>

        </div>
      </section>

    </Layout>
  );
}