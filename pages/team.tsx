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

      {/* ADICIONE align-items-start AQUI */}
      <div className="row row-cols-1 row-cols-md-3 g-4 align-items-start">
        {Members.map((item, index) => {
          if (item[1].active) return (
            <div className="col" key={index.toString()}>
              <div className="card shadow border rounded-lg">
                <div className="card-img-top rounded-top">
                  <Image
                    src={item[1].image}
                    className="card-img-top rounded-top"
                    alt={item[1].name + " Photo"}
                    layout='responsive'
                    width={400}
                    height={400}
                    objectFit="cover"
                  />
                </div>

                <div className="card-body">
                  <h4 className="card-title">{item[1].name}</h4>
                  <h6 className='fw-lighter text-muted'>Ingresso na UFBA: {item[1].dates.UFBA}</h6>
                  <h6 className='fw-lighter text-muted'>Ingresso no PET: {item[1].dates.joinPET}</h6>
                  <p className="card-text text-dark">{item[1].bio}</p>
                </div>

                <div className="card-footer d-flex justify-content-end">
                  {item[1].social?.map((social, sidx) => (
                    <SocialIcon key={sidx.toString()} name={social.name} link={social.link} />
                  ))}
                </div>
              </div>
            </div>
          )
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
