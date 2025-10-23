import React, { useState } from 'react';

// Tipagem de dados (copiada do seu componente original)
interface Disciplina { codigo: string; nome: string; cargaHoraria: number; }
interface Semestre { nome: string; disciplinas: Disciplina[]; }

// --- ESTRUTURA DE DADOS COMPLETA COM TODOS OS SEMESTRES ---
const semestres: Semestre[] = [
    {
      nome: '1º Semestre',
      disciplinas: [
        { codigo: 'ARQ011', nome: 'DESENHO TÉCNICO I', cargaHoraria: 60 },
        { codigo: 'ENG439', nome: 'INTRODUÇÃO À ENGENHARIA ELÉTRICA', cargaHoraria: 30 },
        { codigo: 'FISD36', nome: 'FÍSICA GERAL TEÓRICA I', cargaHoraria: 60 },
        { codigo: 'FISD42', nome: 'FÍSICA GERAL EXPERIMENTAL I', cargaHoraria: 30 },
        { codigo: 'MATA01', nome: 'GEOMETRIA ANALÍTICA', cargaHoraria: 60 },
        { codigo: 'MATA02', nome: 'CÁLCULO A', cargaHoraria: 90 },
        { codigo: 'QUI029', nome: 'QUÍMICA GERAL', cargaHoraria: 60 },
      ],
    },
    {
      nome: '2º Semestre',
      disciplinas: [
        { codigo: 'ENGC26', nome: 'SISTEMAS LÓGICOS', cargaHoraria: 30 },
        { codigo: 'ENGC28', nome: 'LABORATÓRIO INTEGRADO I', cargaHoraria: 30 },
        { codigo: 'ENGC29', nome: 'METODOLOGIA E EXPRESSÃO DO CONHECIMENTO CIENTÍFICO', cargaHoraria: 60 },
        { codigo: 'FISD34', nome: 'FÍSICA GERAL TEÓRICA II', cargaHoraria: 60 },
        { codigo: 'FISD41', nome: 'FÍSICA GERAL EXPERIMENTAL II', cargaHoraria: 30 },
        { codigo: 'MAT045', nome: 'PROCESSAMENTO DE DADOS', cargaHoraria: 60 },
        { codigo: 'MATA03', nome: 'CÁLCULO B', cargaHoraria: 90 },
        { codigo: 'MATA07', nome: 'ÁLGEBRA LINEAR A', cargaHoraria: 60 },
      ],
    },
    {
      nome: '3º Semestre',
      disciplinas: [
        { codigo: 'ENGA47', nome: 'TECNOLOGIA DOS MATERIAIS PARA A ENGENHARIA ELÉTRICA', cargaHoraria: 30 },
        { codigo: 'ENGC30', nome: 'MECÂNICA DOS SÓLIDOS', cargaHoraria: 60 },
        { codigo: 'ENGC32', nome: 'ANÁLISE DE CIRCUITOS I', cargaHoraria: 60 },
        { codigo: 'ENGC37', nome: 'LABORATÓRIO INTEGRADO II', cargaHoraria: 30 },
        { codigo: 'FISD37', nome: 'FÍSICA GERAL TEÓRICA III', cargaHoraria: 60 },
        { codigo: 'FISD40', nome: 'FÍSICA GERAL EXPERIMENTAL III', cargaHoraria: 30 },
        { codigo: 'MATA04', nome: 'CÁLCULO C', cargaHoraria: 90 },
        { codigo: 'MATA06', nome: 'CÁLCULO E', cargaHoraria: 90 },
      ],
    },
    {
      nome: '4º Semestre',
      disciplinas: [
        { codigo: 'ENG370', nome: 'FENÔMENOS DE TRANSPORTES I', cargaHoraria: 60 },
        { codigo: 'ENGC24', nome: 'SINAIS E SISTEMAS I', cargaHoraria: 60 },
        { codigo: 'ENGC25', nome: 'ANÁLISE DE CIRCUITOS II', cargaHoraria: 60 },
        { codigo: 'ENGC38', nome: 'LABORATÓRIO INTEGRADO III', cargaHoraria: 60 },
        { codigo: 'ENGC40', nome: 'ELETRÔNICA DIGITAL', cargaHoraria: 30 },
        { codigo: 'ENGC41', nome: 'DISPOSITIVOS ELETRÔNICOS', cargaHoraria: 60 },
        { codigo: 'FISD38', nome: 'FÍSICA GERAL TEÓRICA IV', cargaHoraria: 60 },
        { codigo: 'FISD39', nome: 'FÍSICA GERAL EXPERIMENTAL IV', cargaHoraria: 30 },
      ],
    },
    {
      nome: '5º Semestre',
      disciplinas: [
        { codigo: 'ENGC33', nome: 'SINAIS E SISTEMAS II', cargaHoraria: 60 },
        { codigo: 'ENGC34', nome: 'ELETROMAGNETISMO APLICADO', cargaHoraria: 60 },
        { codigo: 'ENGC39', nome: 'LABORATÓRIO INTEGRADO IV', cargaHoraria: 60 },
        { codigo: 'ENGC50', nome: 'SISTEMAS MICROPROCESSADOS', cargaHoraria: 60 },
        { codigo: 'ENGC51', nome: 'ELETRÔNICA ANALÓGICA', cargaHoraria: 60 },
        { codigo: 'MAT174', nome: 'CÁLCULO NUMÉRICO I', cargaHoraria: 60 },
        { codigo: 'MAT236', nome: 'MÉTODOS ESTATÍSTICOS', cargaHoraria: 60 },
      ],
    },
    {
      nome: '6º Semestre',
      disciplinas: [
        { codigo: 'ENGC27', nome: 'SISTEMAS DE COMUNICAÇÕES I', cargaHoraria: 60 },
        { codigo: 'ENGC31', nome: 'TERMODINÂMICA', cargaHoraria: 60 },
        { codigo: 'ENGC35', nome: 'MODELAGEM E ANÁLISE DE SISTEMAS DINÂMICOS', cargaHoraria: 60 },
        { codigo: 'ENGC36', nome: 'DISPOSITIVOS DE CONVERSÃO ELETROMECÂNICA I', cargaHoraria: 60 },
        { codigo: 'ENGC44', nome: 'SISTEMAS DE POTÊNCIA I', cargaHoraria: 60 },
        { codigo: 'ENGC46', nome: 'SÍNTESE DE CIRCUITOS', cargaHoraria: 30 },
        { codigo: 'ENGC53', nome: 'LABORATÓRIO INTEGRADO V', cargaHoraria: 60 },
      ],
    },
    {
      nome: '7º Semestre',
      disciplinas: [
        { codigo: 'ENG295', nome: 'HIGIENE E SEGURANÇA NO TRABALHO', cargaHoraria: 60 },
        { codigo: 'ENGC42', nome: 'SISTEMAS DE CONTROLE I', cargaHoraria: 60 },
        { codigo: 'ENGC43', nome: 'DISPOSITIVOS DE CONVERSÃO ELETROMECÂNICA II', cargaHoraria: 60 },
        { codigo: 'ENGC47', nome: 'TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA', cargaHoraria: 60 },
        { codigo: 'ENGC49', nome: 'MEDIÇÃO DE GRANDEZAS FÍSICAS', cargaHoraria: 60 },
        { codigo: 'ENGC54', nome: 'LABORATÓRIO INTEGRADO VI', cargaHoraria: 60 },
        { codigo: 'GENG0032', nome: 'CIÊNCIAS DO AMBIENTE', cargaHoraria: 60 },
      ],
    },
    {
      nome: '8º Semestre',
      disciplinas: [
        { codigo: 'ADM012', nome: 'ADMINISTRAÇÃO', cargaHoraria: 60 },
        { codigo: 'ENGC45', nome: 'INSTALAÇÕES E EQUIPAMENTOS ELÉTRICOS I', cargaHoraria: 60 },
        { codigo: 'ENGC48', nome: 'ELETRÔNICA DE POTÊNCIA', cargaHoraria: 60 },
        { codigo: 'ENGC52', nome: 'GERAÇÃO DE ENERGIA ELÉTRICA', cargaHoraria: 60 },
        { codigo: 'ENGC55', nome: 'LABORATÓRIO INTEGRADO VII', cargaHoraria: 30 },
      ],
    },
    {
      nome: '9º Semestre',
      disciplinas: [
        { codigo: 'DIR175', nome: 'LEGISLAÇÃO SOCIAL', cargaHoraria: 60 },
        { codigo: 'ECOB40', nome: 'INTRODUÇÃO À ECONOMIA I', cargaHoraria: 60 },
        { codigo: 'GENG0035', nome: 'ESTÁGIO CURRICULAR EM ENGENHARIA ELÉTRICA', cargaHoraria: 180 },
        { codigo: 'GENG0036', nome: 'PROJETO DE CONCLUSÃO DE CURSO', cargaHoraria: 60 },
      ],
    },
    {
      nome: '10º Semestre',
      disciplinas: [
        { codigo: 'GENG0037', nome: 'TRABALHO DE CONCLUSÃO DE CURSO', cargaHoraria: 60 },
      ],
    },
];

const AbasTrapezio: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const activeSemestre = semestres[activeIndex];
    const darkPrimary = '#0056b3'; // Cor ativa
    const lightGray = '#f8f9fa'; // Cor inativa

    // Componente do botão de voltar (MANTIDO)
    const BackButton = () => (
        <a 
          href="javascript:history.back()" 
          style={{
            position: 'fixed', top: '49vh', left: '20px', backgroundColor: '#001D7E', 
            color: 'white', width: '40px', height: '40px', lineHeight: '40px', 
            borderRadius: '50%', textAlign: 'center', textDecoration: 'none', 
            fontSize: '24px', zIndex: 1000, cursor: 'pointer', display: 'inline-block'
          }}
        >
          &lt;
        </a> 
    );

    return (
        <>
            <BackButton />
            <div className="trapezio-tabs-container mt-4">
                <h2 className="mt-5 text-center">Grade Curricular por Semestre</h2>
                <p className="text-center">Selecione o semestre para visualizar as disciplinas.</p>

                {/* CONTÊINER PRINCIPAL DAS ABAS */}
                <div 
                    className="d-flex" 
                    style={{ 
                        position: 'relative', 
                        zIndex: 1, 
                        marginBottom: '-1px', 
                        overflowX: 'hidden', 
                        overflowY: 'hidden',
                        paddingTop: '15px',
                    }}
                >
                    {semestres.map((semestre, index) => {
                        const isActive = activeIndex === index;
                        
                        return (
                            <div 
                                key={index} 
                                onClick={() => setActiveIndex(index)} 
                                // O elemento interno que será o trapézio
                                style={{
                                    cursor: 'pointer',
                                    position: 'relative',
                                    zIndex: isActive ? 3 : 2, 
                                    padding: '8px 12px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    color: isActive ? 'white' : darkPrimary,
                                    transition: 'all 0.2s',
                                    transform: isActive ? 'translateY(-2px) perspective(1px) skewX(-10deg)' : 'perspective(1px) skewX(-10deg)', // Destaque na aba ativa e formato trapézio
                                    marginRight: '0px', 
                                }}
                            >
                                {/* O texto dentro do trapézio */}
                                <span style={{ 
                                    position: 'relative', zIndex: 5,
                                    // Reverte o skew para que o texto não fique distorcido
                                    transform: 'skewX(10deg)', 
                                    display: 'block',
                                    transition: 'color 0.1s',
                                }}>
                                    {semestre.nome.replace(' Semestre', '')}
                                </span>
                                {/* Pseudo-elemento que cria o formato Trapézio e a cor de fundo */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundColor: isActive ? darkPrimary : lightGray,
                                    zIndex: 1,
                                    transition: 'all 0.2s',
                                    // Borda inferior branca para dar efeito de papel
                                    borderBottom: isActive ? '2px solid white' : 'none', 
                                    // Tenta simular o formato trapezoidal com bordas
                                    borderTopLeftRadius: '6px',
                                    borderTopRightRadius: '6px',
                                    // O Skew é aplicado no container pai para o formato
                                }}></div>
                            </div>
                        );
                    })}
                </div>

                {/* CONTEÚDO DA ABA ATIVA */}
                <div 
                    className="tab-content"
                    style={{ 
                        border: '1px solid #dee2e6', 
                        padding: '20px', 
                        backgroundColor: 'white',
                        position: 'relative', zIndex: 1,
                    }}
                >
                    <h3 className="mb-3">{activeSemestre.nome}</h3>
                    
                    <ul className="list-group">
                      {activeSemestre.disciplinas.map((disc, discIndex) => (
                        <li key={discIndex} className="list-group-item d-flex justify-content-between align-items-center">
                          <div>
                            <strong>{disc.codigo}:</strong> {disc.nome}
                          </div>
                          <span className="badge bg-info text-dark rounded-pill">
                            {disc.cargaHoraria}h
                          </span>
                        </li>
                      ))}
                    </ul>
                </div>
                
                {/* Adiciona ESPAÇO EXTRA ENTRE A ÚLTIMA MATÉRIA E O RODAPÉ */}
                <div style={{ height: '50px' }}></div> 

            </div>
            {/* CSS para garantir que o scroll vertical não apareça no contêiner de abas ao passar o mouse */}
            <style jsx global>{`
                .trapezio-tabs-container {
                    overflow: visible !important; 
                }
            `}</style>
        </>
    );
};

export default AbasTrapezio;