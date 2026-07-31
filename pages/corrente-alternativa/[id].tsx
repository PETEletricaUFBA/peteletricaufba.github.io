import { getPostData, getAllPostIds } from '../../lib/posts';
import Layout from '../../components/layout';
import Head from 'next/head';
import Date from '../../components/date';
import BlogSignature from '../../components/blogSignature';
import Image from '../../lib/Image';
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
        <div className="container post">
            <div className="col-lg-8 mx-auto">

                {/* Título */}
                <div className="title my-5 text-center">
                    <h1>{postData.title}</h1>
                    <p className="text-end fw-lighter">
                        <Date dateString={postData.date} />
                    </p>
                </div>

                {/* Imagem de capa */}
                <div className="img-fluid mb-5 overflow-hidden rounded">
                    <Image
                        src={postData.image}
                        alt={postData.title}
                        layout="responsive"
                        width="100%"
                        height="100%"
                        objectFit="cover"
                    />
                </div>

                {/* Conteúdo */}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                {/* Autores */}
                <div className="title my-5 text-center">
                    <h3>{postData.authors.length > 1 ? "Autores" : "Autor"}</h3>
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
                        marginBottom: "100px",
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
    const paths = getAllPostIds();

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
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}