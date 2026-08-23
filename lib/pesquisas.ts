import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';
import remarkImgLink from '@pondorasti/remark-img-links';

export type Pesquisa = {
  id: string;
  title: string;
  description: string;
  image: string;
  contentHtml?: string;
};

const pesquisasDirectory = path.join(process.cwd(), 'public/atividades/Pesquisas');

function getPesquisaFile(id: string) {
  return path.join(pesquisasDirectory, id, 'index.md');
}

function getPesquisaMetadata(id: string): Pesquisa {
  const fileContents = fs.readFileSync(getPesquisaFile(id), 'utf8');
  const { data } = matter(fileContents);

  return {
    id,
    title: data.title,
    description: data.description,
    image: `/atividades/Pesquisas/${id}/${data.cover}`,
  };
}

export function getPesquisas() {
  return fs.readdirSync(pesquisasDirectory)
    .filter((id) => fs.existsSync(getPesquisaFile(id)))
    .map(getPesquisaMetadata);
}

export function getPesquisa(id: string) {
  const pesquisaPath = getPesquisaFile(id);
  return fs.existsSync(pesquisaPath) ? getPesquisaMetadata(id) : undefined;
}

export function getAllPesquisasIds() {
  return getPesquisas().map((pesquisa) => ({ params: { id: pesquisa.id } }));
}

export async function getPesquisaData(id: string) {
  const fileContents = fs.readFileSync(getPesquisaFile(id), 'utf8');
  const { content, data } = matter(fileContents);
  const processedContent = await remark()
    .use(remarkHtml, { sanitize: false })
    .use(remarkGfm)
    .use(remarkImgLink, {
      absolutePath: `${process.env.BASE_URL}/atividades/Pesquisas/${id}/`,
    })
    .process(content);

  return {
    ...getPesquisaMetadata(id),
    contentHtml: processedContent.toString(),
    title: data.title,
  };
}
