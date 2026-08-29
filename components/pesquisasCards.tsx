import Link from 'next/link';
import Image from '../lib/Image';
import { Pesquisa } from '../lib/pesquisas';

export default function PesquisasCards({ pesquisas }: { pesquisas: Pesquisa[] }) {
  return (
    <section className="section pt-0" aria-labelledby="pesquisas-em-destaque">
      <div className="container">
        <h2 id="pesquisas-em-destaque" className="text-center mb-4">
          Pesquisas em desenvolvimento
        </h2>
        <div className="row alinha-centro align-items-stretch">
          {pesquisas.map((pesquisa) => (
            <div className="col-lg-3 col-md-6 col-sm-12 mb-4 d-flex" key={pesquisa.id}>
              <Link href={`/atividades/Pesquisas/${pesquisa.id}`} passHref>
                <a
                  className="card atividade d-block card-animado h-100 w-100"
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Abrir pesquisa: ${pesquisa.title}`}
                >
                  <div className="row no-gutters h-100 align-items-start">
                    <div className="col-12 manualhome">
                      <div style={{ position: 'relative', height: '140px', margin: '6px' }}>
                        <Image src={pesquisa.image} alt="" layout="fill" objectFit="contain"style={{ transform: 'scale(2)' }}/>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card-body text-center">
                        <h5 className="card-title">{pesquisa.title}</h5>
                        <p className="card-text">{pesquisa.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
