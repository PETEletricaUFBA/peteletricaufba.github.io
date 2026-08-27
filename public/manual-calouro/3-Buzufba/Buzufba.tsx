import React from 'react';

export default function AbasBUZUFBA() {
  return (
    <div style={{ color: '#000', lineHeight: '1.6' }}>

      <p>
        O BUZUFBA é um serviço de transporte gratuito destinado ao deslocamento
        dos estudantes entre diferentes campi e unidades da UFBA em Salvador.
        Atualmente, o serviço funciona de segunda a sexta-feira, das 6h às
        22h55, e aos sábados, das 6h às 13h.
      </p>

      <p>
        Não é necessário apresentar identificação para utilizar o transporte,
        e os itinerários podem sofrer alterações ao longo do semestre,
        incluindo mudanças nos horários e pontos de parada.
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
        Como chegar à Escola Politécnica
      </p>

      <p>
        Para acessar a Escola Politécnica, há dois pontos de descida
        recomendados:
      </p>

      <ul>
        <li>
          <strong>Rua Caetano Moura:</strong> existem pontos de ônibus em
          frente à Escola. É indicada para as rotas que não passam por São
          Lázaro.
        </li>
        <li>
          <strong>Rua Professor Aristides Novis:</strong> localizada na lateral
          da Escola Politécnica e utilizada pelas rotas que passam por São
          Lázaro.
        </li>
      </ul>

      <hr style={{ margin: '40px 0', border: 0, borderTop: '1px dashed #ccc' }} />

      <p
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          fontStyle: 'italic',
        }}
      >
        Acompanhe os itinerários
      </p>

      <p>
        Para acompanhar alterações nos roteiros, horários e demais avisos,
        recomenda-se consultar os canais oficiais e os grupos de comunicação
        estudantil.
      </p>

      <p style={{ textAlign: 'center' }}>
        Grupo do BUZUFBA no Telegram:{' '}
        <a
          href="https://t.me/joinchat/GrwgRxZKFQoJ4vIXuAmLug"
          target="_blank"
          rel="noopener noreferrer"
        >
          Acessar grupo
        </a>
      </p>

      <br />
    </div>
  );
}