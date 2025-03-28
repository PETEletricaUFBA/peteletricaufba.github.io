import Image from '../lib/Image'
import { useState } from "react";
import Link from 'next/link';

import HomeConf from '../data/home.json'
import { getSortedPostsData } from '../lib/posts';
import Layout from '../components/layout';


let triade = HomeConf.triade
let memorial = HomeConf.memorial

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: {
  allPostsData: {
    id: string;
    link: string;
    image: string;
    date: any;
    title: string;
  }[]
}) {
  return (
    <Layout>

      <Banner />
      <CorrenteAlternativa featuredPost={allPostsData[0]} />
      <Triade />
      <LivroPET15Anos />
      <Depoimentos />
      <Prosel />

    </Layout>
  )
}
const Banner = () => (
  <section className="banner pt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto text-center">
          <h1 className="mb-3">PET Elétrica UFBA</h1>
          <p className="mb-4">
            PET é a sigla para Programa de Educação Tutorial, um programa ligado
            o Ministério da Educação (MEC) que conta com um grupo de estudantes,
            sob a orientação de um(a) tutor(a), que desenvolve ações que
            contribuem para uma formação universitária mais ampla. As atividades
            realizada por eles são orientadas por três pilares:{" "}
            <b>Ensino, Extensão e Pesquisa</b> O PET Elétrica UFBA nasceu em
            Agosto de 2008 contando inicialmente com 4 estudantes. Desde então,
            o grupo cresceu e atualmente impacta o ambiente acadêmico do curso
            de Engenharia Elétrica com atividades como Pré-Física, ABC da
            Engenharia, Grupo de Empoderamento Feminino entre outras. Além
            disso, com a realização de eventos como Conexão PET e com o nosso
            canal no Youtube é possível contribuir para além dos muros da
            Universidade.
          </p>

          {/* TODO: Trocar imagem */}
          <div className="img-fluid mt-5">
            <Image src="/images/banner-art.svg" alt="" 
            layout="responsive"
            height="40%" width="100%"
            objectFit="scale-down"
            />
          </div>

        </div>
      </div>
    </div>
  </section>
);

function CorrenteAlternativa({ featuredPost }: { featuredPost: { id: string; link: string; image: string; date: any; title: string; } }): JSX.Element {
  return (
    <section className="section bg-light">
      <div className="col-12 text-center">
        <h2 className="section-title">
          Confira novidades do corrente alternativa
        </h2>
      </div>
      <div className="col-12 ">
        <div className="row align-items-center">
          <div className="col-md-5 mb-4 mb-md-0">
            <div className="img-fluid rounded-lg overflow-hidden mx-5 h-50" >
              <Image

                src={featuredPost.image}
                alt={featuredPost.title}

                layout="responsive"
                width="100%"
                height="80%"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3>
              <Link href={featuredPost.link} passHref>
                <a title={featuredPost.title} className="post-title" >
                  {featuredPost.title}
                </a>
              </Link>
            </h3>
            {/* TODO: Summary */}
            {/* <p className="card-text">{featuredPost.summary}</p> */}
            <Link href={featuredPost.link} passHref>
              <a title={featuredPost.title} className="btn btn-primary">
                READMORE
              </a>
            </Link>
          </div>
        </div>

      </div>
    </section >
  );
}

const LivroPET15Anos = () => (
  <section className="section bg-light"> 
    <div className="container" style={{ marginTop: '10px' }}> 
      <div className="row justify-content-center"> 
        <div className="col-12 text-center"> 
          <h2 className="section-title">LIVRO PET ELÉTRICA 15 ANOS</h2> 
        </div> 
        <div className="col-12 d-flex flex-column flex-md-row" style={{ paddingRight: '10px' }}>
          {/* Coluna para o texto */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center" style={{ paddingRight: '10px' }}>
            <p className="mb-4" style={{ color: 'black' }}>
              O livro 15 Anos do grupo PET Elétrica UFBA é uma representação da realização coletiva fruto da ação de todos aqueles que se dedicaram e compuseram o grupo de aprendizagem nos últimos anos de história do PET UFBA. Sendo assim, como forma de valorizar e preservar cada história, foi criado o livro em comemoração aos seus históricos 15 anos. O livro é dividido entre os 3 pilares da educação (Ensino, Pesquisa e Extensão) e aborda em seu contexto as motivações e realizações de cada atividade PET já executada. Para saber mais sobre nosso livro basta acessar o link abaixo:
            </p>
            <div className="text-center">
              <Link href={"https://drive.google.com/file/d/1CTc-eMnbgjVZlPshn-AdzDhhHEChiJQc/view"} passHref>
                <a title="Download" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  DOWNLOAD
                </a>
              </Link>
            </div>
          </div>
          {/* Coluna para o PDF */}
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-3 mt-md-0">
            <iframe src="https://drive.google.com/file/d/1CTc-eMnbgjVZlPshn-AdzDhhHEChiJQc/preview" style={{ width: '100%', height: '80vh', borderRadius: '15px', overflow: 'hidden' }} ></iframe>
          </div>
        </div>
      </div> 
    </div> 
  </section>
);

const Triade = () => (
  <section className="section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2 className="section-title">Tríade para formação acadêmica</h2>
        </div>
        {triade.map((item, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="feature-card text-center bg-light h-100">
              <i className={item.icon + " mb-3"}></i>
              <h4 className="mb-2">{item.name}</h4>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Depoimentos = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const changeSlide = (n: number) => {
    if (n !== 1 && n !== -1) return;

    if (n === -1) {
      if (slideIndex === 0) {
        setSlideIndex(memorial.length - 1);
      } else {
        setSlideIndex(slideIndex - 1);
      }
      return;
    }

    if (n === 1) {
      if (slideIndex === memorial.length - 1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
      return;
    }
  };
  return (
    <section className="section">
      <div className="">
        <div className="col-12 text-center">
          <h2 className="section-title">Depoimentos</h2>
        </div>
        <div className="slideshow-container">
          {memorial.map((item, index) => (
            <div
              className="mySlides"
              style={{
                display: `${index === slideIndex ? "block" : "none"}`,
              }}
              key={index}
            >
              {/* <!-- TODO: Acrescentar foto das pessoas --> */}
              <q>{item.content}</q>
              <p className="author">- {item.name}</p>
            </div>
          ))}
          {/* jsx-a11y/anchor-is-valid */}
          <button className="btn prev" onClick={() => changeSlide(-1)}>
            &#10094;
          </button>
          <button className="btn next" onClick={() => changeSlide(1)}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

const Prosel = () => (
  <section className="section">
    <div className="bg-gray container section shadow rounded-lg px-4">
      <div className="row align-items-center justify-content-center text-center text-md-left">
        <div className="col-lg-4 col-md-5 mb-4 mb-md-0">
          <div className="img-fluid">
            <Image src="/images/cta.svg" alt="" layout='responsive' width="100%" height="100%" />
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <h2 className="section-title">Pronto para se juntar a nós?</h2>
          <p className="mb-4">
            Confira as informações de como funciona o nosso processo seletivo.
          </p>
          <Link href="/prosel" passHref>
            <a title="Processo Seletivo" className="btn btn-primary">
              Processo Seletivo
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>
);