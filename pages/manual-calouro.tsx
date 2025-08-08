import Image from '../lib/Image';
import { getSortedManualData } from '../lib/manualcalouro';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getStaticProps() {
    const allManualData = await getSortedManualData();
    return {
        props: {
            allManualData,
        },
    };
}

export default function Manual({ allManualData }: {
    allManualData: {
        id: string;
        link: string;
        image: string;
        date: any;
        title: string;
        description: string;
    }[]
}) {
    return (
        <Layout>
            <Title />
            {/*<Featured featuredPost={allManualData[0] } />*/}
            <Pages allManualData={allManualData} />
        </Layout>
    );
}
const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Manual da Engenharia Elétrica</h1>
        </div>
    </section>

);

function Pages({ allManualData }: {
  allManualData: {
    id: string;
    link: string;
    image: string;
    date: any;
    title: string;
    description: string;
  }[]
}) {
  if (!allManualData || allManualData.length === 0) {
    return <div>Nenhum Curso encontrado</div>;
  }

  return (
    <section className="Section">
      <div className="container text-center">
        <div className="row alinha-centro">
          {allManualData.map(({ id, title, description, image, link }, index) => (
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4" key={id ?? index.toString()}>
              <Link href={link} passHref>
                <a
                  className="card atividade d-block card-animado"
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "all 0.3s ease" // transição suave
                  }}
                  aria-label={title}
                >
                  <div className="row no-gutters">
                    {/* Coluna da imagem */}
                    <div className="col-lg-3 col-md-12 col-sm-12 manualhome">
                      <div
                        style={{
                          position: "relative",
                          height: "110px",
                          marginTop: "8px",
                          marginBottom: "8px",
                        }}
                      >
                        <Image
                          src={image}
                          alt={title}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    </div>

                    {/* Coluna do texto */}
                    <div className="col-lg-9 col-md-12 col-sm-12">
                      <div className="card-body" style={{ marginLeft: "5px" }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* CSS da animação */}
      <style jsx>{`
        .card-animado:hover {
          background-color: #f0f0f0; /* cinza claro */
          transform: scale(1.03); /* aumenta levemente */
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* sombra */
        }
      `}</style>
    </section>
  );
}





