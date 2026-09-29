import React from 'react';

export default function AbasUFBA() {
  return (
    <div style={{ color: '#000', lineHeight: '1.6' }}> 

      <p>
        A Universidade Federal da Bahia (UFBA) é uma instituição pública de
        ensino superior sediada em Salvador, capital do estado da Bahia.
        Vinculada ao Ministério da Educação e mantida pelo Governo Federal,
        possui suas raízes na Escola de Cirurgia da Bahia, fundada em 1808,
        considerada a mais antiga instituição de ensino superior do país.
      </p>

      <p>
        A UFBA possui grande relevância no estado da Bahia e está entre as
        principais instituições de ensino superior do Brasil. Em 2019, foi
        classificada como a terceira melhor universidade das regiões Norte e
        Nordeste do país pelo QS World University Rankings e pelo Center for
        World University Rankings. Atualmente, também está entre as
        universidades federais brasileiras com maior número de cursos.
      </p>

      <hr
        style={{
          margin: '40px 0',
          border: 0,
          borderTop: '1px dashed #ccc',
        }}
      />

      {/* Conselhos Superiores */}
      <p
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: '#000',
        }}
      >
        Conselhos Superiores
      </p>

      <p>
        A administração da UFBA é composta por diferentes órgãos e setores
        responsáveis pela gestão acadêmica, administrativa e institucional da
        Universidade. Entre os principais Conselhos Superiores estão:
      </p>

      <ul>
        <li>Conselho Universitário;</li>
        <li>
          Conselho Superior de Ensino, Pesquisa e Extensão;
        </li>
        <li>Conselho Acadêmico de Ensino;</li>
        <li>Conselho Acadêmico de Pesquisa e Extensão;</li>
        <li>Assembleia Universitária;</li>
        <li>Conselho de Curadores.</li>
      </ul>

      <hr
        style={{
          margin: '40px 0',
          border: 0,
          borderTop: '1px dashed #ccc',
        }}
      />

      {/* Administração Central */}
      <p
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: '#000',
        }}
      >
        Administração Central
      </p>

      <p>
        A administração central da UFBA é composta por:
      </p>

      <ul>
        <li>Reitoria;</li>
        <li>Gabinete do Reitor;</li>
        <li>Vice-Reitoria;</li>
        <li>Pró-Reitoria de Ensino de Graduação;</li>
        <li>Pró-Reitoria de Pesquisa, Criação e Inovação (PROPCI);</li>
        <li>Pró-Reitoria de Ensino de Pós-Graduação (PROPG);</li>
        <li>Pró-Reitoria de Extensão;</li>
        <li>Pró-Reitoria de Planejamento e Orçamento;</li>
        <li>Pró-Reitoria de Administração;</li>
        <li>Pró-Reitoria de Desenvolvimento de Pessoas;</li>
        <li>
          Pró-Reitoria de Ações Afirmativas e Assistência Estudantil;
        </li>
        <li>
          Superintendência de Administração Acadêmica (SUPAC);
        </li>
        <li>
          Superintendência de Meio Ambiente e Infraestrutura (SUMAI);
        </li>
        <li>
          Superintendência de Educação a Distância;
        </li>
        <li>
          Superintendência de Avaliação e Desenvolvimento Institucional
          (SUPAD);
        </li>
        <li>
          Superintendência de Tecnologia da Informação (STI);
        </li>
        <li>Assessoria de Tecnologia da Informação;</li>
        <li>Assessoria para Assuntos Internacionais;</li>
        <li>Assessoria de Comunicação Institucional;</li>
        <li>Ouvidoria Geral;</li>
        <li>Serviço de Informação ao Cidadão (SIC).</li>
      </ul>

      <hr
        style={{
          margin: '40px 0',
          border: 0,
          borderTop: '1px dashed #ccc',
        }}
      />

      {/* Unidades universitárias */}
      <p
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: '#000',
        }}
      >
        Unidades Universitárias
      </p>

      <p>
        Atualmente, a UFBA possui unidades universitárias distribuídas entre
        Salvador e os municípios de Vitória da Conquista e Camaçari. Essas
        unidades estão organizadas em escolas, faculdades e institutos,
        responsáveis pelas atividades de ensino, pesquisa e extensão em
        diferentes áreas do conhecimento.
      </p>

      <hr
        style={{
          margin: '40px 0',
          border: 0,
          borderTop: '1px dashed #ccc',
        }}
      />

      {/* Links */}
      <p
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'italic',
          color: '#000',
        }}
      >
        Para mais informações
      </p>

      <div style={{ textAlign: 'center' }}>
        <p>
          <a
            href="https://ufba.br/historico"
            target="_blank"
            rel="noopener noreferrer"
          >
            História da UFBA
          </a>
        </p>

        <p>
          <a
            href="https://cartadeservicos.ufba.br/sites/cartadeservicos.ufba.br/files/modelo_carta_de_servicos_2022_v7_final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carta de Serviços da UFBA
          </a>
        </p>
      </div>

      <br />
    </div>
  );
}