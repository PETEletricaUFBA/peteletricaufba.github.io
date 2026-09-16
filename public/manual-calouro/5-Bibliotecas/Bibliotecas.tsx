import React from 'react';

export default function AbasBibliotecas() {
  return (
    <div style={{ color: '#000', lineHeight: '1.6' }}>

      <p>
        A UFBA possui diversas bibliotecas, cujo acesso é um direito dos
        estudantes. Para utilizar suas instalações, acervos e serviços, é
        necessário realizar um cadastro mediante apresentação do comprovante
        de matrícula e de um documento de identificação com foto, além da
        criação de uma senha pessoal.
      </p>

      <p>
        Após o cadastro, o estudante pode utilizar o sistema Pergamum para
        consultar o acervo e realizar a renovação de empréstimos de forma
        on-line.
      </p>

      <p>
        Ao utilizar os serviços das bibliotecas, é importante respeitar os
        prazos de devolução e renovação e verificar se a devolução foi
        devidamente registrada no sistema.
      </p>

      <p>
        O atraso pode resultar na suspensão do direito a novos empréstimos por
        determinado período. A UFBA não cobra multa financeira por atrasos,
        mas o estudante que permanecer em débito poderá sofrer restrições
        relacionadas aos serviços das bibliotecas e a determinados
        procedimentos acadêmicos.
      </p>

      <p>
        Em caso de extravio ou perda de material emprestado, é necessário
        ressarcir o acervo, normalmente mediante a aquisição de outro
        exemplar.
      </p>

      <hr style={{ margin: '40px 0', border: 0, borderTop: '1px dashed #ccc' }} />

      <p
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        Horários de funcionamento
      </p>

      <p>
        <strong>Biblioteca Central Reitor Macedo Costa:</strong> de segunda a
        sexta-feira, das 7h30 às 21h, e aos sábados, das 8h às 13h.
        <br />
        Telefone: (71) 3283-6045
        <br />
        E-mail: bibcientec@ufba.br
      </p>

      <p>
        <strong>
          Biblioteca Universitária de Ciências e Tecnologia Omar Catunda:
        </strong>{' '}
        de segunda a sexta-feira, das 7h30 às 21h, e aos sábados, das 8h às
        16h.
        <br />
        Telefone: (71) 3283-6052
        <br />
        E-mail: bibcientec@ufba.br
      </p>

      <p>
        <strong>Biblioteca da Escola Politécnica:</strong> de segunda a
        sexta-feira, das 8h às 21h, e aos sábados, das 8h às 12h.
        <br />
        Telefone: (71) 3283-9714/9715/9716
        <br />
        E-mail: bieng@ufba.br
      </p>

      <p>
        Os horários de funcionamento podem sofrer alterações. Nesses casos, os
        estudantes são informados por e-mail e por avisos afixados nas
        bibliotecas.
      </p>

      <br />
    </div>
  );
}