import React, { useEffect } from 'react';

export default function AbasMatricula() {

  // Necessário para o Instagram renderizar o embed
  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ color: "#000" }}>

      {/* Título */}
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <p
          style={{
            fontSize: 32,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "#000",
          }}
        >
          Matrícula
        </p>
      </div>

      {/* Texto inicial */}
      <div
        style={{
          lineHeight: "1.6",
          marginTop: 20,
        }}
      >
        A matrícula é o processo 100% online, realizado pelo SIGAA, onde você
        seleciona disciplinas e horários para o semestre. Ela ocorre semanas
        antes do início das aulas e é dividida em etapas. Ficar mais de um
        semestre sem se matricular pode resultar no{" "}
        <strong>desligamento da UFBA</strong>.
      </div>

      <hr
        style={{
          margin: 40,
          border: 0,
          borderTop: "1px dashed #ccc",
        }}
      />

      {/* Escalonamento */}
      <p
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#000"
        }}
      >
        Escalonamento (Ordem de Prioridade)
      </p>

      <div style={{ lineHeight: "1.6" }}>
        Como as vagas nas turmas são limitadas, o SIGAA aloca os alunos usando
        uma ordem preferencial. A prioridade máxima é dada a:
      </div>

      <ul style={{ lineHeight: "1.6" }}>
        <li>
          <strong>I.</strong> Alunos cursando disciplinas obrigatórias do seu
          semestre acadêmico.
        </li>
        <li>
          <strong>II.</strong> Alunos com status de <strong>FORMANDO</strong>.
        </li>
        <li>
          <strong>III.</strong> Alunos cursando obrigatórias atrasadas ou
          optativas.
        </li>
      </ul>

      <div style={{ lineHeight: "1.6" }}>
        Dentro de cada nível de prioridade, o Coeficiente de Rendimento (CR) é
        usado como critério de desempate. O “Semestre Acadêmico” conta apenas
        períodos realmente cursados, sem considerar trancamentos.
      </div>

      <hr
        style={{
          margin: "40px 0",
          border: 0,
          borderTop: "1px dashed #000",
        }}
      />

      {/* 3 cards */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: 250, textAlign: "center" }}>
          <p
            style={{
              fontSize: 22,
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#000"
            }}
          >
            Matrícula Web
          </p>
          <p style={{ lineHeight: "1.6" }}>
            Primeira fase do processo. Você solicita as disciplinas desejadas,
            mas as vagas só são definidas no processamento.
          </p>
        </div>

        <div style={{ width: 250, textAlign: "center" }}>
          <p
            style={{
              fontSize: 22,
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#000"
            }}
          >
            Rematrícula
          </p>
          <p style={{ lineHeight: "1.6" }}>
            Segunda fase. Serve para ajustes após o primeiro processamento,
            permitindo adicionar ou remover disciplinas.
          </p>
        </div>

        <div style={{ width: 250, textAlign: "center" }}>
          <p
            style={{
              fontSize: 22,
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#000"
            }}
          >
            Matrícula Extraordinária
          </p>
          <p style={{ lineHeight: "1.6" }}>
            Última fase. As vagas são ocupadas em tempo real, sem prioridades.
            Não é possível excluir disciplinas nesta etapa.
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0",
          border: 0,
          borderTop: "1px dashed #ccc",
        }}
      />

      {/* Trancamento */}
      <p
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#000"
        }}
      >
        Trancamento de Matrícula
      </p>

      <div style={{ lineHeight: "1.6" }}>
        “Trancar” significa suspender o semestre (total) ou apenas algumas
        disciplinas (parcial). O pedido é feito pelo SIGAA.
      </div>

      <ul style={{ lineHeight: "1.6" }}>
        <li>
          <strong>Parcial:</strong> Máximo de 20% da carga horária do curso.
        </li>
        <li>
          <strong>Total:</strong> Máximo de 50% do tempo de integralização.
        </li>
      </ul>

      <div style={{ lineHeight: "1.6" }}>
        Casos especiais (saúde, intercâmbio etc.) podem ter regras próprias.
      </div>

      <hr
        style={{
          margin: "40px 0",
          border: 0,
          borderTop: "1px dashed #ccc",
        }}
      />

      {/* Cancelamento */}
      <p
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#000"
        }}
      >
        Cancelamento de Matrícula
      </p>

      <div style={{ lineHeight: "1.6" }}>
        O cancelamento é a perda definitiva do vínculo com a UFBA. Isso pode
        ocorrer se o aluno:
      </div>

      <ol style={{ lineHeight: "1.6" }}>
        <li>Não concluir o curso dentro do prazo máximo.</li>
        <li>Ficar dois semestres sem se matricular (consecutivos ou não).</li>
      </ol>

      <div style={{ lineHeight: "1.6" }}>
        Antes do cancelamento, o estudante é notificado e pode recorrer ao
        Colegiado.
      </div>

      {/* =======================
          Vídeo do YouTube
      ======================== */}
      <hr style={{ margin: "40px 0", border: 0, borderTop: "1px solid #ddd" }} />

      <p
        style={{
          textAlign: "center",
          fontSize: 26,
          fontWeight: "bold",
          fontStyle: "italic",
          color: "#000",
          marginBottom: 20,
        }}
      >
        Vídeo Explicativo
      </p>

      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
          width: "100%",
        }}
      > 
      <iframe
        width="866"
        height="487"
        src="https://www.youtube.com/embed/FpoDEFbgpik?list=PLzClER7ri7kUL5hr89G7mLY3_zHZlte3d"
        title="Matrícula web"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        ></iframe>
      </div>
      <br />
    </div>
  );
}
