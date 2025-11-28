import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import remarkImgLink from '@pondorasti/remark-img-links';

const postsDirectory = path.join(process.cwd(), 'public/manual-calouro');

/**
 * Procura o arquivo index.md ou index.mdx dentro de uma pasta
 */
function getMarkdownFile(folderPath: string) {
  const possibleFiles = ['index.mdx', 'index.md'];
  const foundFile = possibleFiles.find(f => fs.existsSync(path.join(folderPath, f)));
  if (!foundFile) throw new Error(`Nenhum arquivo Markdown encontrado em ${folderPath}`);
  return path.join(folderPath, foundFile);
}

/**
 * Retorna todos os posts do manual, ordenados pelo campo "order"
 */
export function getSortedManualData() {
  const folderNames = fs.readdirSync(postsDirectory);

  const allCursosData = folderNames.map(folderName => {
    const folderPath = path.join(postsDirectory, folderName);
    const file = getMarkdownFile(folderPath);

    const fileContents = fs.readFileSync(file, 'utf8');
    const matterResult = matter(fileContents);

    const cover = `/manual-calouro/${folderName}/${matterResult.data.cover}`;
    const link = `/manual-calouro/${folderName}`;

    return {
      id: folderName,
      link,
      image: cover,
      order: matterResult.data.order ?? 9999,
      title: matterResult.data.title,
      description: matterResult.data.description,
    };
  });
  return allCursosData.sort((a, b) => a.order - b.order);
}

/**
 * Retorna todos os IDs das pastas do manual
 */
export function getAllManualIds() {
  const folderNames = fs.readdirSync(postsDirectory);
  return folderNames.map(folderName => ({ params: { id: folderName } }));
}

/**
 * Retorna os dados de um post específico
 */
export async function getManualData(id: string) {
  const folderPath = path.join(postsDirectory, id);
  const fullPath = getMarkdownFile(folderPath);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [
        [remarkImgLink, { absolutePath: process.env.BASE_URL + `/manual-calouro/${id}/` }],
      ],
    },
  });

  const cover = `/manual-calouro/${id}/${data.cover}`;
  const link = `/manual-calouro/${id}`;

  return {
    id,
    mdxSource,
    image: cover,
    link,
    order: data.order ?? 9999,
    date: data.date, // mantém caso você use em outro lugar
    title: data.title,
    description: data.description,
    authors: data.authors,
  };
}
