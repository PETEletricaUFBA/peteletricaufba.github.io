import Image from '../lib/Image';
import Layout from '../components/layout';
import MembersData from '../data/members.json';
import SocialIcon from '../components/socialIcon';

const Members = Object.entries(MembersData);

const Team = () => {
  return (
    <Layout>
      <Actives />
      <Egress />
    </Layout>
  )
};

const Actives = () => (
  <section className="section">
    <div className="container">
      <h2 className="pb-2 text-center">Time</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4 align-items-start">
        {Members.map((item, index) => {
          if (item[1].active) return (
            <div className="col" key={index.toString()}>

              <div
                className="flip-card"
                onMouseEnter={(e) => {
                  const card = e.currentTarget;
                  if (card.dataset.locked !== 'true') {
                    card.classList.add('flipped');
                  }
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget;
                  if (card.dataset.locked !== 'true') {
                    card.classList.remove('flipped');
                  }
                }}
                onClick={(e) => {
                  const card = e.currentTarget;
                  const isLocked = card.dataset.locked === 'true';

                  if (isLocked) {
                    card.dataset.locked = 'false';
                    card.classList.remove('flipped');
                  } else {
                    card.dataset.locked = 'true';
                    card.classList.add('flipped');
                  }
                }}
              >

                <div className="flip-card-inner">

                  {/* FRENTE DO CARD */}
                  <div className="flip-card-front card shadow border rounded-lg h-100">

                    <div className="card-img-top rounded-top">
                      <Image
                        src={item[1].image}
                        className="card-img-top rounded-top"
                        alt={item[1].name + " Photo"}
                        layout="responsive"
                        width={400}
                        height={400}
                        objectFit="cover"
                      />
                    </div>

                    <div className="card-body">
                      <h4 className="card-title">{item[1].name}</h4>

                      <div className="text-start mt-2">
                        <h6 className="fw-lighter text-muted mb-1">
                          Ingresso UFBA: {item[1].dates.UFBA}
                        </h6>

                        <h6 className="fw-lighter text-muted mb-0">
                          Ingresso PET: {item[1].dates.joinPET}
                        </h6>
                      </div>
                    </div>

                    <div className="card-footer d-flex justify-content-end">
                      {item[1].social?.map((social, sidx) => (
                        <SocialIcon
                          key={sidx.toString()}
                          name={social.name}
                          link={social.link}
                        />
                      ))}
                    </div>

                  </div>

                  {/* VERSO DO CARD */}
                  <div className="flip-card-back card shadow border rounded-lg h-100 d-flex flex-column justify-content-between">

                    {/* Topo: Nome */}
                    <div className="text-center px-3 pt-3 pb-2 flex-shrink-0">
                      <h4 className="card-title mb-0">
                        {item[1].name}
                      </h4>
                    </div>

                    {/* Corpo intermediário: Biografia com scroll interno controlado */}
                    <div className="px-3 border-top pt-2 d-flex flex-column flex-grow-1 overflow-hidden">
                      <p className="text-dark text-start mb-2 flex-shrink-0">
                        <strong>Biografia / Sobre:</strong>
                      </p>
                      
                      <div className="overflow-auto text-start flex-grow-1 pb-3">
                        <p className="text-muted small m-0 text-justify">
                          {item[1].bio || "Membro atuante do PET Elétrica UFBA."}
                        </p>
                      </div>
                    </div>

                    {/* Rodapé fixo na base */}
                    <div 
                      className="card-footer d-flex justify-content-end flex-shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item[1].social?.map((social, sidx) => (
                        <SocialIcon
                          key={sidx.toString()}
                          name={social.name}
                          link={social.link}
                        />
                      ))}
                    </div>

                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const Egress = () => (
  <section className="section">
    <div className="container">
      <h2 className="text-center">Hall dos Egressos</h2>
      <div className="scrollmenu">
        {Members.map((item, index) => {
          if (!item[1].active) return (
            <a className='mx-2 my-3 text-center' key={index.toString()}>
              <div className="rounded-img overflow-hidden p-0">
                <Image
                  src={item[1].image}
                  alt={item[1].name + " Photo"}
                  layout='responsive'
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>

              {/* <<< NOME DO EGRESSO >>> */}
              <p className="mt-2 mb-0 fw-semibold">
                {item[1].name}
              </p>

            </a>
          )
        })}
      </div>
    </div>
  </section>
);

export default Team;

