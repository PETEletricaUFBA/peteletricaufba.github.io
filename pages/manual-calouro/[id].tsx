import { getManualData, getAllManualIds } from '../../lib/manualcalouro';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import BlogSignature from '../../components/blogSignature';
import Image from '../../lib/Image';
import MembersData from '../../data/members.json';
import NomMembersData from '../../data/nom-members.json';

// 1. IMPORTAÇÃO DO NOVO COMPONENTE DE ABAS (Ajuste o caminho conforme sua estrutura)
import Disciplinas from '../../components/disciplinas'; 

const Members: any = MembersData;
const NomMembers: any = NomMembersData;

export default function Post({ postData }: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
        authors: Array<string>;
    }
}): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>

            <Content postData={postData} />

        </Layout>
    );
}

function Content({ postData }: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
        authors: Array<string>;
    }
}) {
    // VARIÁVEL PARA RENDERIZAÇÃO CONDICIONAL
    const isDisciplinasPage = postData.id === 'Disciplinas';

    return (
        <div className="container post">
            <div className='col-lg-8 mx-auto'>
                {/* Título + Imagem lado a lado */}
                <div className="title my-5 d-flex align-items-center justify-content-center gap-3 flex-wrap text-center">
                    {postData.image && (
                        <Image
                            src={postData.image}
                            alt={postData.title}
                            width={50}
                            height={50}
                            objectFit="cover"
                            style={{ borderRadius: "8px" }}
                        />
                    )}
                    <h1 className="m-0">{postData.title}</h1>
                </div>

                {/* Data (somente se não for a página Disciplinas, já que o componente Disciplinas renderiza seu próprio conteúdo) */}
                {!isDisciplinasPage && (
                    <p className='text-end fw-lighter'>
                        <Date dateString={postData.date} />
                    </p>
                )}

                {/* ÁREA DE CONTEÚDO PRINCIPAL: LÓGICA DE INTERFACE */}
                {isDisciplinasPage ? (
                    // Se o ID for 'Disciplinas', renderiza o componente interativo (abas)
                    <Disciplinas />
                ) : (
                    // Se não, renderiza o HTML estático do Markdown (para outros posts)
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                )}

                {/* Assinaturas (A ser exibido apenas em posts normais, não na página interativa de Disciplinas) */}
                {!isDisciplinasPage && postData.authors && postData.authors.map((author, index) => {
                    if (Members.hasOwnProperty(author) || NomMembers.hasOwnProperty(author)) {
                        return (
                            <BlogSignature
                                key={index.toString()}
                                author={Members.hasOwnProperty(author) ? Members[author] : NomMembers[author]}
                                index={index}
                            />
                        );
                    }
                })}

                {/* TODO: Implementar plugin de comentários */}
            </div>

            {/* CSS inline para manter a imagem proporcional ao título */}
            <style jsx>{`
                .title img {
                    height: 1.2em;
                    width: auto;
                }
            `}</style>
        </div>
    );
}

// Funções de build do Next.js (getStaticPaths e getStaticProps) permanecem inalteradas
export async function getStaticPaths() {
    const paths = getAllManualIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
    const postData = await getManualData(params.id);
    return {
        props: {
            postData,
        },
    };
}