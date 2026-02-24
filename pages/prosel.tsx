import ProselData from '../data/prosel20261.json'
import Layout from '../components/layout';

const links = ProselData.links;
const calendar = ProselData.calendar;
const results = ProselData.results;

const Prosel = () => {
    return (
        <Layout>
            <Title />
            <About />
            <Links />
           {/* <Resultados /> */}
            <Calendar />
        </Layout>
    );
};

const Title = () => (
    <>
        <section className="section pb-0">
            <div className="container text-center">
                <h1 className="display-3">Processo Seletivo PET 2026.1</h1>

            </div>
        </section>
        <section className="section pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="content">
                            <p>Deseja fazer parte do PET Elétrica? Entenda como funciona nosso processo seletivo para bolsistas e voluntários.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

const About = () => (
    <section className="section py-0">
        <div className="container">
            <div id="SaibaMais" className="section scrollspy">

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h1 className="mb-3">Sobre o processo seletivo online</h1>
                        <p className="mb-4"></p><p>O <a href="https://www.gov.br/mec/pt-br/pet" target='_blank'rel="noopener">Programa de Educação Tutorial (PET)</a> de Engenharia Elétrica da UFBA declara aberto o processo de seleção de bolsistas e não bolsistas.</p>
                        <p>Poderão inscrever-se alunas e alunos do curso de Engenharia Elétrica da UFBA que atenderem aos seguintes pré-requisitos:</p>
                        <ol>
                            <li>Ser estudante do Curso de Engenharia Elétrica escalonado a partir do 2º semestre;</li>
                            <li>Apresentar Coeficiente de Rendimento (CR) ≥ 5,0;</li>
                            <li>Ser brasileiro nato ou naturalizado;</li>
                            <li>Ter disponibilidade para dedicar 20 (vinte) horas semanais ao programa, 
                            participando com empenho e dedicação em todas as suas atividades; </li>
                            <li>Não ser bolsista de qualquer outro programa que impeça o acúmulo de bolsas.</li>
                        </ol>
                        <p></p>



                    </div>
                </div>

            </div>
        </div>
    </section>

);

const Links = () => (
    <section className="section py-0">
        <div className="container">
            <div className="row justify-content-center">
                {links.map((item, index) => (
                    <div key={index} className="col-sm-6 mb-4">
                        <div className="feature-card text-center bg-light">
                            <a target="_blank" href={item.link} rel="noreferrer"><i className={item.icon + " mb-3"}></i>
                                <h4 className="mb-2">{item.name}</h4>
                            </a>
                            <p>{item.content}</p>
                            <a href={item.link} target="_blank" rel="noopener"><button className="btn btn-primary"> Clique aqui </button></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="row py-auto">
            <div className="col-lg-8 mx-auto">
            <h3 className="section-title">Informações e Links Adicionais</h3>
            </div>
        </div>
    </section>
);

const Resultados = () => (
    <section className="section py-auto">
        <div className="container section shadow rounded-lg px-4 bg-gray">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2 className="section-title">Resultado das Etapas</h2>

                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" data-field="data">Etapas</th>
                                <th scope="col" data-field="descricao">Resultado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((item, index) => (
                                <tr key={index.toString()}>
                                    <td scope="row">{item.stage}</td>
                                    <td>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer"className="">
                                            Resultado disponível
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
);


const Calendar = () => (
    <section className="section py-auto">
        <div className="container section shadow rounded-lg px-4 bg-light">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <h2 className="section-title">Calendário</h2>

                    <table className="table table-hover">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col" data-field="data">Data</th>
                                <th scope="col" data-field="descricao">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {calendar.map((item, index) => (
                                <tr key={index.toString()}>
                                    <td scope="row">{item.date}</td>
                                    <td scope="row">{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

);

export default Prosel;