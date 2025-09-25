import Image from '../lib/Image';
import { getSortedCursosData } from '../lib/cursos';
import Link from 'next/link';
import Layout from '../components/layout';

export async function getStaticProps() {
    const allCursosData = await getSortedCursosData();
    return {
        props: {
            allCursosData,
        },
    };
}

export default function Cursos({ allCursosData }: {
    allCursosData: {
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
            {/*<Featured featuredPost={allCursosData[0] } />*/}
            <Pages allCursosData={allCursosData} />
        </Layout>
    );
}
const Title = () => (

    <section className="section pb-0">
        <div className="container text-center">
            <h1 className="display-3">Cursos & Videoaulas</h1>
        </div>
    </section>

);

function Pages({ allCursosData }: {
    allCursosData: {
        id: string;
        link: string;
        image: string;
        date: any;
        title: string;
        description: string;
    }[]
}) {
    if (!allCursosData || allCursosData.length === 0) {
        return <div>Nenhum Curso encontrado</div>;
    }
    return (
        <section className="Section ">
            <div className="container text-center ">
                <div className="row alinha-centro border-8">
                    {allCursosData.map(({ id, title, description, image, link }, index) => {
                        // detecta se o link é externo (http/https)
                        const isExternal = typeof link === "string" && (link.startsWith('http://') || link.startsWith('https://'));
                        return (
                            <div className="col-lg-4 col-sm-6 mb-5 " key={index.toString()}>
                                <div className="card">
                                    <div className="card-img rounded-lg mb-4 overflow-hidden" >
                                    <img
                                        src={image}
                                        alt={title}
                                        style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain', // troque para 'contain' se preferir ver a imagem inteira
                                        display: 'block',
                                        }}
                                    />
                                    </div>
                                    <div className="card-body p-0">
                                        <h3>
                                            {isExternal ? (
                                                <a href={link} title={title} className="post-title" target="_blank" rel="noopener noreferrer">{title}</a>
                                            ) : (
                                                <Link href={link} passHref>
                                                    <a title={title} className="post-title">{title}</a>
                                                </Link>
                                            )}
                                        </h3>
                                        <h5>
                                            <span title={description} className="post-description">{description}</span>
                                        </h5>

                                        {/* Botão Vem aprender e Saiba Mais */}
                                        {isExternal ? (
                                            <a href={link} target="_blank" rel="noopener noreferrer" title="readmore" className="btn btn-primary espaco-abaixo btn-sm">Vem aprender</a>
                                        ) : (
                                            <Link href={link} passHref>
                                                <a title="readmore" className="btn btn-primary espaco-abaixo btn-sm">Vem Aprender</a>
                                            </Link>
                                        )}
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section >
    );
}

