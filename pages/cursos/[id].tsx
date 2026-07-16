import { getCursosData, getAllCursosIds } from '../../lib/cursos';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import BlogSignature from '../../components/blogSignature';
import MembersData from '../../data/members.json';
import NomMembersData from '../../data/nom-members.json';

const Members: any = MembersData;
const NomMembers: any = NomMembersData;

export default function Post({
    postData,
}: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
        authors: Array<string>;
    };
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

function Content({
    postData,
}: {
    postData: {
        id: string;
        contentHtml: string;
        image: string;
        link: string;
        title: string;
        date: string;
        authors: Array<string>;
    };
}) {
    return (
        <div className="container post text-center">
            <div className="col-lg-8 mx-auto">

                {/* Título */}
                <div className="title my-5 text-center">
                    <h1>{postData.title}</h1>
                    <p className="text-end fw-lighter">
                        <Date dateString={postData.date} />
                    </p>
                </div>

                {/* Conteúdo da página */}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {/* Seção de autores */}
                <div className="title my-5 text-center">
                    <h3>Autores</h3>
                    <hr />
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                        gap: "30px",
                        justifyItems: "center",
                        alignItems: "start",
                        maxWidth: "900px",
                        marginBottom: "60px",
                    }}
                >
                    {postData.authors.map((author, index) => {
                        if (
                            Members.hasOwnProperty(author) ||
                            NomMembers.hasOwnProperty(author)
                        ) {
                            return (
                                <BlogSignature
                                    key={index.toString()}
                                    author={
                                        Members.hasOwnProperty(author)
                                            ? Members[author]
                                            : NomMembers[author]
                                    }
                                    index={index}
                                />
                            );
                        }

                        return null;
                    })}
                </div>

                {/* TODO: Implementar plugin de comentários */}

            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllCursosIds();

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({
    params,
}: {
    params: { id: string };
}) {
    const postData = await getCursosData(params.id);

    return {
        props: {
            postData,
        },
    };
}