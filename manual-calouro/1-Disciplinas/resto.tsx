import React, { useState } from 'react';

interface Disciplina { 
    codigo: string; 
    nome: string; 
    cargaHoraria: number;
    ementa: string; 
}
interface Semestre { 
    nome: string; 
    disciplinas: Disciplina[]; 
    numPasta: string; 
}

const PDF_BASE_PATH = '/docs/disciplinas/';

const semestres: Semestre[] = [
    {
      nome: '1º Semestre',
      numPasta: '1-semestre',
      disciplinas: [
        { codigo: 'ARQ011', nome: 'DESENHO TÉCNICO I', cargaHoraria: 60, ementa: 'Introdução ao Desenho técnico, Sistemas de Representação, Desenho Arquitetônico e Desenhos Especializados.' },
        { codigo: 'ENG439', nome: 'INTRODUÇÃO À ENGENHARIA ELÉTRICA', cargaHoraria: 30, ementa: 'Abordagem das práticas da engenharia elétrica, o mercado de trabalho, os problemas como se apresentam, a disposição para resolvê-los e a necessidade de uma abordagem científica, destacando-se a importância da metodologia. A engenharia elétrica, a energia e a vida cotidiana. As diversas áreas de atuação da engenharia elétrica. Os impactos ecológicos, políticos, sociais e econômicos das tomadas de decisão em engenharia. Visitas técnicas.' },
        { codigo: 'FISD36', nome: 'FÍSICA GERAL TEÓRICA I', cargaHoraria: 60, ementa: 'Conceitos básicos relativos ao estudo do movimento. Cinemática das partículas. Leis de Newton. Trabalho e energia. Conservação da energia e do movimento linear. Impulson e Colisões. Rotação dos Corpos rígidos. Conservação do movimento angular.' },
        { codigo: 'FISD42', nome: 'FÍSICA GERAL EXPERIMENTAL I', cargaHoraria: 30, ementa: 'Neste curso será feita uma breve apresentação da teoria das medidas físicas, da teoria de erros e da análise gráfica para os trabalhos de laboratório. As apostilas Teoria de Erros e Roteiros de Laboratório – Mecânica, que serão utilizadas no curso, podem ser obtidas no site do Instituto de Física.' },
        { codigo: 'MATA01', nome: 'GEOMETRIA ANALÍTICA', cargaHoraria: 60, ementa: 'Álgebra vetorial. A translação e a rotação de eixos. A reta e o plano no espaço R3. As cônicas. As superfícies de revolução.' },
        { codigo: 'MATA02', nome: 'CÁLCULO A', cargaHoraria: 90, ementa: 'As funções polinomiais e as funções racionais. A interpolação por polinômios. O limite e a continuidade de funções reais de uma variável real: principais propriedades. A derivada de funções reais de uma variável real. As propriedades da derivada de tais funções. Os extremantes de funções reais de uma variável real e o polinômio de Taylor. A construção do gráfico de tais funções. A integral de uma função real definida em um intervalo limitado e fechado. Principais teoremas. O cálculo de primitivas de funções reais.' },
        { codigo: 'QUI029', nome: 'QUÍMICA GERAL', cargaHoraria: 60, ementa: 'Estrutura e propriedades periódicas dos elementos e compostos químicos. Tópicos básicos da físico-química.' },
      ],
    },
    {
      nome: '2º Semestre',
      numPasta: '2-semestre',
      disciplinas: [
        { codigo: 'ENGC26', nome: 'SISTEMAS LÓGICOS', cargaHoraria: 30, ementa: 'Sistema binário de representação numérica. Álgebra de Boole. Portas lógicas (AND, OR, NOT, NAND, NOR, XOR, XNOR). Análise e síntese de circuitos combinacionais. Técnicas de minimização de circuitos combinacionais: Karnaugh, Quine-McCluskey. Latches. Flip-flops. Conceito de sistemas síncronos e assíncronos. Máquinas de estados. Análise e síntese de sistemas seqüenciais: diagramas de estado. Utilização de simuladores.' },
        { codigo: 'ENGC28', nome: 'LABORATÓRIO INTEGRADO I', cargaHoraria: 30, ementa: 'Introdução à instrumentação eletrônica e medições; utilização de multímetros, osciloscópios e geradores de sinais; montagem e análise experimental de circuitos resistivos e com componentes básicos.' },
        { codigo: 'ENGC29', nome: 'METODOLOGIA E EXPRESSÃO DO CONHECIMENTO CIENTÍFICO', cargaHoraria: 60, ementa: 'Conceito de ciência. Classificação e divisão da ciência. Métodos científicos: indutivo, dedutivo, hipotético-dedutivo e dialético. Teorias, leis e fatos. Hipóteses e variáveis. Comunicação do conhecimento científico. Elaboração de trabalhos científicos: estrutura do texto científico e a numeração progressiva, apresentação de citações, uso de tabelas, quadros e figuras, redação de textos - estilo e linguagem. Apresentação de trabalho científico normalizado: apresentação do trabalho acadêmico, elementos pre-textuais e pós textuais, disposição gráfica e formato, apresentação de artigo em publicação periódica científica impressa.' },
        { codigo: 'FISD34', nome: 'FÍSICA GERAL TEÓRICA II', cargaHoraria: 60, ementa: 'Abordagem teórica dos seguintes temas: oscilacões mecânicas, ondas mecânicas em uma dimensão, ondas sonoras, mecânica dos fluídos, teoria cinética dos gases, temperatura e calor, e leis da termodinâmica.' },
        { codigo: 'FISD41', nome: 'FÍSICA GERAL EXPERIMENTAL II', cargaHoraria: 30, ementa: 'Atividades experimentais na modalidade presencial, com possibilidade de realização de experimentos virtuais, sobre os assuntos: teoria de erros, oscilações mecânicas, ondas mecânicas, mecânica dos fluidos e termodinâmica.' },
        { codigo: 'MAT045', nome: 'PROCESSAMENTO DE DADOS', cargaHoraria: 60, ementa: 'Não definido' },
        { codigo: 'MATA03', nome: 'CÁLCULO B', cargaHoraria: 90, ementa: 'Aplicações de cálculo integral à Geometria, à Mecânica e a outros domínios do saber. A parametrização de curvas planares e as coordenadas polares. A integral de primeira espécie sobre curvas planares. A continuidade e a integração de funções de duas variáveis (em coordenadas cartesianas e polares). Enunciado o emprego do teorema de Fubini. As derivadas parciais e a diferenciabilidade. As derivadas direcionais. Os principais teoremas pertinentes. O estudo dos máximos e mínimos. Os extremos condicionados (métodos dos multiplicadores de Lagrange). O gráfico de funções diferenciáveis de duas variáveis reais. As funções definidas implicitamente. As curvas de nível. Os campos planares de vetores. A integral de segunda espécie sobre curvas planares: o trabalho (componente tangencial) e o fluxo (componente normal) de campos planares de vetores. O teorema de Green (forma tangencial e forma normal) e a identidade de Green (no espaço R2).' },
        { codigo: 'MATA07', nome: 'ÁLGEBRA LINEAR A', cargaHoraria: 60, ementa: 'Matrizes e sistemas lineares. Espaços vetoriais. Produto interno. Transformações lineares. Diagonalização de operadores.' },
      ],
    },
    {
      nome: '3º Semestre',
      numPasta: '3-semestre',
      disciplinas: [
        { codigo: 'ENGA47', nome: 'TECNOLOGIA DOS MATERIAIS PARA A ENGENHARIA ELÉTRICA', cargaHoraria: 30, ementa: 'Materiais condutores: estrutura física, propriedades e aplicações das ligas metálicas e resistivas. Materiais semicondutores: estrutura cristalina, bandas de energia, lei de ação das massas, tipos de dopagem, mecanismos de condução (deriva e difusão). Materiais isolantes: polarização, constante dielétrica, fator de perdas, análise e aplicações. Materiais magnéticos: campos e grandezas magnéticas, tipos de magnetismo, domínios magnéticos e tipos de energia determinantes, efeito da temperatura, magnetização e desmagnetização de um metal ferromagnético, materiais magnéticos duros e macios, ferrites. Materiais piezoelétricos. Eletrocerâmicas. Materiais ópticos: óptico-eletrônica e fibras ópticas.' },
        { codigo: 'ENGC30', nome: 'MECÂNICA DOS SÓLIDOS', cargaHoraria: 60, ementa: 'Forças e binários, equilíbrio de corpos rígidos no espaço, sistemas equivalentes de forças, forças distribuídas, cálculo de reaçôes em apoios. Propriedades de áreas: momento de primeira ordem, momento de segunda ordem, determinação do centroide. Esforços solicitantes, diagramas de esforços solicitantes. Peças submetidas a cargas axiais. Treliças, cabos. Análise de tensões através do ciclo de Mohr tridimensional. Torção de barras de seção circular. Flexão simples e oblíqua. Equação da linha elástica. Flambagem de colunas.' },
        { codigo: 'ENGC32', nome: 'ANÁLISE DE CIRCUITOS I', cargaHoraria: 60, ementa: 'Conceitos fundamentais para análise de circuitos: variáveis elétricas, componentes elétricos passivos e ativos, discretos e distribuídos, sinais elétricos, redes, circuitos, malhas e nós, grafos, árvores, cortes e percursos fechados. Relações entre variáveis elétricas em elementos passivos. Leis de Kirchhoff. Transformação de fontes. Teorema da superposição. Teoremas de Thévenin e Norton: aplicação a circuitos com e sem fontes controladas, interpretação. Técnicas de análise sistemáticas (aplicadas a circuitos resistivos): análise nodal, análise de malhas, análise de cortes, análise de percursos fechados. Potência média. Valor eficaz. Teorema da máxima transferência de potência. Equações de malhas e nós em circuitos com indutores, resistores e capacitores. Funções singulares (impulso, degrau unitário, etc.). Análise de transitórios em circuitos de primeira e segunda ordem: freqüências naturais, condições iniciais, resposta natural, resposta forçada, tipos de Amortecimento. Amplificador operacional ideal e aplicações elementares: seguidor de tensão, amplificadores inversor e não inversor, somador, subtrator, circuitos integradores e diferenciadores.' },
        { codigo: 'ENGC37', nome: 'LABORATÓRIO INTEGRADO II', cargaHoraria: 30, ementa: 'Utilização de fontes reguladas de tensão e geradores de sinais. Princípio de funcionamento e utilização do osciloscópio de raios catódicos. Análise de formas de onda com o osciloscópio: medição de amplitude e freqüência. Princípio de funcionamento e utilização de instrumentos analógicos: amperímetro, voltímetro, multimedidores. Utilização de ferramentas computacionais matemáticas. Atividades experimentais associadas às disciplinas Análise de Circuitos I, Tecnologia dos Materiais para a Engenharia Elétrica e Sistemas Lógicos.' },
        { codigo: 'FISD37', nome: 'FÍSICA GERAL TEÓRICA III', cargaHoraria: 60, ementa: 'Estudo teórico da teoria da eletricidade e do magnetismo clássicos, visando proporcionar ao estudante um conhecimento geral das leis e fenômenos do Eletromagnetismo necessários ao ciclo profissional.' },
        { codigo: 'FISD40', nome: 'FÍSICA GERAL EXPERIMENTAL III', cargaHoraria: 30, ementa: 'Estudo experimental do eletromagnetismo clássico, objetivando aprendizagem de conceitos fundamentais da eletrodinâmica, suas aplicações em casos práticos na física e na engenharia, bem como o desenvolvimento de habilidades de laboratório e de prática científica.' },
        { codigo: 'MATA04', nome: 'CÁLCULO C', cargaHoraria: 90, ementa: 'Equações diferenciais ordinárias e sistemas de equações diferenciais lineares. As integrais impróprias e a transformação de Laplace. A resolução de equações diferenciais e de sistemas de equações diferenciais pelas transformadas de Laplace. As séries numéricas e as séries de potências. A resolução de equações diferenciais por séries de potência. Introdução à teoria qualitativa.' },
        { codigo: 'MATA06', nome: 'CÁLCULO E', cargaHoraria: 90, ementa: 'As funções harmônicas (em R2) e as funções de uma variável complexa. As transformações do plano complexo em si mesmo. O limite, a continuidade e a derivação de funções de uma variável complexa. As funções holomorfas. As seqüências e as séries com termos complexos. O critério de Cauchy. As séries de potências. As funções analíticas. A adição, a multiplicação e a inversão de séries de potência. A integral de uma função complexa ao longo de um caminho. Primitivas de funções contínuas. O teorema integral de Cauchy. Enunciação do teorema de Cauchy-Goursat. A fórmula integral de Cauchy. As derivadas de funções holomorfas. Analiticidade das funções holomorfas. A expansão de Laurent e as singularidades. Uso da expansão de Laurent no cálculo de integrais. Os resíduos. O cálculo, mediante resíduos, de integrais de funções reais. Funções vetoriais de variável real. Curvas regulares no espaço tridimensional. As integrais de primeira e de segunda espécie ao longo de tais curvas. A paremetrização de superfícies e as integrais de primeira e de segunda espécie sobre superfície. As funções reais de variável vetorial. Estudo dos máximos e mínimos. Estudo dos extremos condicionados. As integrais triplas. As funções vetoriais de variável vetorial e os campos de vetores. Os campos conservativos de vetores e os potenciais escalares. A divergência de um campo de vetores e os campos solenoidais. O teorema de Ostrogradski-Gauss. O rotacional de um campo de vetores e os potenciais vetoriais. O teorema de Stokes.' },
      ],
    },
    {
      nome: '4º Semestre',
      numPasta: '4-semestre',
      disciplinas: [
        { codigo: 'ENG370', nome: 'FENÔMENOS DE TRANSPORTES I', cargaHoraria: 60, ementa: 'Propriedades dos fluídos. Hidrostática. Cinemática e Dinâmica dos Fluídos, transferência de Calor e de Massa.' },
        { codigo: 'ENGC24', nome: 'SINAIS E SISTEMAS I', cargaHoraria: 60, ementa: 'Introdução à Teoria dos Sinais e Sistemas. Sinais em tempo contínuo. Série de Fourier: trigonométrica, exponencial, simetria, propriedades, geração de formas de onda, espectro de frequência, Transformada de Fourier e Transformada Inversa de Fourier: propriedades. Conceito de modulação analógica. Transformada de Laplace e Transformada Inversa de Laplace: definição e propriedades. Teorema do valor inicial e do valor final. Descrição Matemática de Sistemas: integral de convolução, funções de transferência, pólos e zeros, representação por variáveis de estado. Aplicação da transformada de Laplace à análise de circuitos: análise de transitórios. Análise no domínio da frequência: ressonância, fator de qualidade, grau de amortecimnto, frequência de corte em 3 dB e em porcentagem da amplitude, banda equivalente, diagrama de Bode- técnicas de construção. Teorema de Parserval.' },
        { codigo: 'ENGC25', nome: 'ANÁLISE DE CIRCUITOS II', cargaHoraria: 60, ementa: 'Análise no regime senoidal permanente: Fasores. Impedância e admitância, reatância e susceptância. Adaptação das técnicas e teoremas válidos para circuitos resistivos aos circuitos com indutores e capacitores no regime permanente. Circuitos magneticamente aclopados: intutância mútua, coeficiente de acoplamento. Transformadores de potência e sinais. Potência ativa, reativa e aparente, Fator de potência. Circuitos trifásicos balanceados: conexões de geradores e cargas em estrela e em delta, potência trifásica. Transformadores trifásicos. Noções sobre circuitos trifásicos não balanceados. Quadripolos: modelos, conversão e associação, modelos de quadripolos para transformadores.' },
        { codigo: 'ENGC38', nome: 'LABORATÓRIO INTEGRADO III', cargaHoraria: 60, ementa: 'Atividades experimentais associadas às disciplinas Dispositivos Eletrônicos, Análise de Circuitos II, Sinais e Sistemas I, Eletrônica Digital.' },
        { codigo: 'ENGC40', nome: 'ELETRÔNICA DIGITAL', cargaHoraria: 30, ementa: 'Técnicas de implementação de circuitos digitais. Memórias. Multiplexadores. FPGAs. Registradores de deslocamento. Circuitos aritméticos: somadores e multiplicadores paralelo e seqüencial. Linguagem de descrição de Hardware (VHDL). Projeto de sistemas digitais. Famílias lógicas: propriedades e construção de portas lógicas.' },
        { codigo: 'ENGC41', nome: 'DISPOSITIVOS ELETRÔNICOS', cargaHoraria: 60, ementa: 'Semicondutores e propriedades. Junção PN. Diodos (retificador, Zener, emissor de luz): funcionamento, características, modelos e aplicações elementares - retificação de sinais, ceifamento, regulação de tensão. Conceito de reta (curva) de carga e ponto de operação. Transistores (Bipolar de Junção, JFET, MOSFET, Fototransistor): funcionamento, características, modelos, polarização e aplicações elementares - chaveamento, fonte e espelho de corrente, carga ativa, regulação de tensão, multivibradores, acoplamento ótico, noções sobre amplificação. Noções sobre tiristores.' },
        { codigo: 'FISD38', nome: 'FÍSICA GERAL TEÓRICA IV', cargaHoraria: 60, ementa: 'Estudo das ondas eletromagnéticas em nível básico, e suas implicações nos fenômenos ópticos. Introdução à Teoria da Relatividade Restrita e à Teoria Quântica.' },
        { codigo: 'FISD39', nome: 'FÍSICA GERAL EXPERIMENTAL IV', cargaHoraria: 30, ementa: 'Estudo experimental das ondas eletromagnéticas e fenômenos ópticos, aprendizagem de conceitos fundamentais relacionados, suas aplicações em casos práticos na física e na engenharia, bem como o desenvolvimento de habilidades de laboratório e de prática científica.' },
      ],
    },
    {
      nome: '5º Semestre',
      numPasta: '5-semestre',
      disciplinas: [
        { codigo: 'ENGC33', nome: 'SINAIS E SISTEMAS II', cargaHoraria: 60, ementa: 'Sinais em tempo contínuo e em tempo discreto. Conceitos de modulação digital, amostragem, interpolação e dizimação. Soluções de equações de diferenças. Transformada discreta de Fourier: Propriedades. Transformada Z: Propriedades, regiões de convergência. Mapeamento s-Z. Funções de transferência pulsadas. Aplicações das séries e transformadas de Fourier discreta e da transformada Z. Diagramas de blocos. Diagramas de fluxo de sinal. Soluções de equações de estado contínuas e discretas. Conceito e métodos de verificação de controlabilidade e observabilidade de sistemas lineares. Estabilidade de sistemas lineares.' },
        { codigo: 'ENGC34', nome: 'ELETROMAGNETISMO APLICADO', cargaHoraria: 60, ementa: 'Equações de ondas. Ondas transversais eletromagnéticas (TEM): propagação, polarização, difração e radiação. Linhas de transmissão. Casamento de impedâncias. Ondas transversais elétricas (TE) e ondas transversais magnéticas (TM). Guias de onda e cavidades ressonantes. Propagação em fibras óticas. Noções de antenas: processos de radiação, caracterização básica de uma antena, noções de antenas lineares. Enlaces de rádio.' },
        { codigo: 'ENGC39', nome: 'LABORATÓRIO INTEGRADO IV', cargaHoraria: 60, ementa: 'Atividades experimentais associadas às disciplinas Eletromagnetismo, Eletrônica Analógica, Sinais e Sistemas II e Sistemas Microprocessados' },
        { codigo: 'ENGC50', nome: 'SISTEMAS MICROPROCESSADOS', cargaHoraria: 60, ementa: 'Arquitetura de CPU: registradores, barramentos, pipelines, caches. Arquitetura de memórias. Dispositivos de entrada/saída, dispositivos periférico, barramentos padrões. Interrupção. Acesso direto a memória. Redes de microprocessadores. Programação de microprocessadores: tipo e formatos de instruções, modos de endereçamento, linguagens de máquina e Assembly. Microcontroladores. Análise e projeto de "hardware". Aplicações.' },
        { codigo: 'ENGC51', nome: 'ELETRÔNICA ANALÓGICA', cargaHoraria: 60, ementa: 'Amplificadores de pequenos sinais a TBJ e FET: configurações básicas, determinação de propriedades (ganho de tensão, corrente, impedâncias de entrada e saída). Cascata de amplificadores. Amplificadores de grandes sinais: classes (A, B, AB), distorção harmônica, rendimento, dissipação de potência. Resposta em freqüência de amplificadores: modelos para médias e altas freqüências de transistores, freqüências de corte em 3 dB. Realimentação em amplificadores: topologias, estabilidade. Amplificadores diferenciais e operacionais: blocos constituintes, não idealidades. Aplicações de amplificadores.' },
        { codigo: 'MAT174', nome: 'CÁLCULO NUMÉRICO I', cargaHoraria: 60, ementa: 'Erros nas aproximações numéricas. Série de Taylor. Resolução numérica de sistemas de equações lineares. Resolução de equações algébricas e trascendentes. Interpolação e diferenças finitas. Diferenciação e integração numérica. Resolução numérica de equações diferenciais' },
        { codigo: 'MAT236', nome: 'MÉTODOS ESTATÍSTICOS', cargaHoraria: 60, ementa: 'Aspectos preliminares do trabalho estatístico. Séries estatísticas e representação gráfica. Médias. Separatrizes. Principais medidas de dispersão. Conceito, teoremas e leis de probabilidade. Distribuições de probabilidades. Distribuições amostrais. Intervalos de confiança. Teste de hipótese. Correlação e regressão linear simples. Ajustamento de funções matemáticas pelo método dos mínimos quadrados.' },
      ],
    },
    {
      nome: '6º Semestre',
      numPasta: '6-semestre',
      disciplinas: [
        { codigo: 'ENGC27', nome: 'SISTEMAS DE COMUNICAÇÕES I', cargaHoraria: 60, ementa: 'Noções de Processos Estocásticos: variável aleatória, médias estatísticas, distribuições binomial, gaussiana, de Rayleigh, de Rice, de Nakagami e lognormal, limitantes de Chebychev e Chernoff, processos estacionários, densidade espectral de potência e função de autocorrelação, resposta de sistemas lineares a sinais aleatórios. Ruído Térmico: modelo de Johnson e potência disponível de ruído, temperatura equivalente de ruído, figura de ruído em amplificadores. Modulação em Amplitude (AM): faixa lateral dupla com e sem portadora livre, faixa lateral única, faixa lateral única vestigial, efeitos da falta de sincronismo na detecção coerente, receptor super-heteródino, desempenho da modulação em amplitude na presença de ruído. Modulação Angular: modulação em fase, modulação em freqüência (FM) faixa estreita e faixa larga, funções de Bessel e espectro de FM, laço travado em fase na geração e detecção da modulação angular, receptor de FM estéreo com pré-ênfase e de-ênfase, desempenho de FM na presença de ruído. Transmissão de Pulsos em Banda Base: filtro ideal e transmissão sem distorção, teorema da amostragem, modulação por amplitude de pulso (PAM), ruído de quantização, modulação por codificação de pulsos (PCM), quantização uniforme e não-uniforme, tipos de formas de onda PCM, sinalização duobinária. Detecção de Pulsos em Banda Base: detecção de pulsos binários na presença de ruído, filtro casado e probabilidade de erro de detecção, interferência inter-simbólica (ISI), filtros de forma para redução de ISI, padrão olho, equalização. Introdução à Teoria da Informação: entropia, capacidade de canal.' },
        { codigo: 'ENGC31', nome: 'TERMODINÂMICA', cargaHoraria: 60, ementa: 'Sistemas termodinâmicos, reversibilidade, termometria, variáveis e equações de estado, diagramas PVT. Trabalho e Primeira Lei da Termodinâmica. Equivalente mecânico do calor, energia interna, entalpia. Transferência de calor. Ciclo de Carnot. Mudanças de fases. Segunda Lei da Termodinâmica. Entropia e processos politrópicos. Principais ciclos motores: Rankine, Brayton, Otto, Diesel e Stirling.' },
        { codigo: 'ENGC35', nome: 'MODELAGEM E ANÁLISE DE SISTEMAS DINÂMICOS', cargaHoraria: 60, ementa: 'Introdução aos sistemas de controle, modelagem matemática de sistemas dinâmicos por: equações diferenciais e de diferença, funções de transferência e equações de estado, modelagem de circuitos elétricos e de sistemas mecânicos, eletro-mecânicos, de fluidos e térmicos, analogia entre modelos, linearização de sistemas, obtenção de modelos experimentais de 1ª e 2ª ordens, processamento e conversão de sinais, digitalização de modelos contínuos, simulação de sistemas dinâmicos, análise da resposta temporal, especificações de desempenho no domínio do tempo, erros de regime permanente.' },
        { codigo: 'ENGC36', nome: 'DISPOSITIVOS DE CONVERSÃO ELETROMECÂNICA I', cargaHoraria: 60, ementa: 'Sistemas e circuitos eletromagnéticos: indução de tensão, força eletromagnética, circuito equivalente magnético, energia armazenada no campo, indutância, histerese e perdas térmicas, excitação senoidal. Conversão eletromecância da energia: força e torque eletromagnético, tensões induzidas, sistemas eletromagnéticos lineares, máquinas rotacionais de pólos lisos e máquinas rotacionais cilíndricas. Transformadores: transformadores ideal e real, circuito equivalente, regulação de voltagem e rendimento, auto-transformador, transformadores trifásicos, harmônicos em transformadores trifásicos, sistema por unidade. Máquinas de corrente contínua: aspectos construtivos, equacionamento matemático em regime permanente, curva de magnetização, geradores com excitação em separado e auto-excitado, motores shunt e em série, partida. Máquinas síncronas: aspectos construtivos, geradores e motores, circuito equivalente, características de torque e de potência, curva de capacidade, controle de fator de potência.' },
        { codigo: 'ENGC44', nome: 'SISTEMAS DE POTÊNCIA I', cargaHoraria: 60, ementa: 'Modelos e impedâncias de equipamentos, em regimes permanente e transitório. Valores em por unidade. Circuitos elétricos desequilibrados. Componentes simétricos. Diagramas de seqüência. Faltas simétricas e assimétricas.' },
        { codigo: 'ENGC46', nome: 'SÍNTESE DE CIRCUITOS', cargaHoraria: 30, ementa: 'Filtros: Seletividade (passa-faixa, passa-baixa, passa-alta, rejeita-faixa, passa-tudo, "notch"), Funções de transferência padrões de primeira e segunda ordem, Especificações (gabarito). Funções básicas de aproximação (Butterworth, Chebychev, Chebyshev inversa, Elíptica etc.). Síntese de filtros passivos: redes "ladder" RL, RC e LC, redes duplamente terminadas. Síntese de filtros analógicos ativos RC: Cascata de biquads (SAB\'s e com múltiplos Amp Ops), Simulação de redes passivas (simulação de indutância através de GIC, redes do tipo "leap-frog"). Outras técnicas de síntese de filtros analógicos ativos (OTA-C, capacitores chaveados etc.). Sensibilidade.' },
        { codigo: 'ENGC53', nome: 'LABORATÓRIO INTEGRADO V', cargaHoraria: 60, ementa: 'Atividades experimentais associadas às disciplinas Dispositivos de Conversão Eletromecânica da Energia I, Síntese de Circuitos, Modelagem e Análise de Sistemas Dinâmicos, Sistemas de Potência I, Sistemas de Comunicações I.' },
      ],
    },
    {
      nome: '7º Semestre',
      numPasta: '7-semestre',
      disciplinas: [
        { codigo: 'ENG295', nome: 'HIGIENE E SEGURANÇA NO TRABALHO', cargaHoraria: 60, ementa: 'Produção e Higiene e Segurança do Trabalho, A Legislação de Higiene e Segurança do Trabalho, O ambiente do Trabalho e Segurança Ocupacional, Métodos de Estudo do Ambiente de trabalho, Ventilação natural e Sistemas de ventilação, Ventilação Industrial, Aerodispersóides, Gases e Vapores, Higiene e segurança do Ambiente, Resíduos Industriais/ sólidos Líquidos e Gasosos, Ruído Industrial, Iluminação da Indústria, Radiações ionizantes, Ergonomia, Acidentes de Trabalho, Proteção contra incêndio, Análise de Projeto, Proteção de Máquinas, Riscos em Eletricidade, Seminários (técnicos) sobre Saúde Ocupacional, Controle de Perdas, Gerência de Riscos e Toxicologia Industrial.' },
        { codigo: 'ENGC42', nome: 'SISTEMAS DE CONTROLE I', cargaHoraria: 60, ementa: 'Características básicas dos sistemas de controle, realimentação, análise pelo Lugar das Raízes, análise da resposta em freqüência, critério de estabilidade de Nyquist, especificações de desempenho no domínio da freqüência, técnicas de compensação, controladores P, PI, PID, redes em avanço-atraso, projeto via Lugar das Raízes, projeto via resposta em freqüência.' },
        { codigo: 'ENGC43', nome: 'DISPOSITIVOS DE CONVERSÃO ELETROMECÂNICA II', cargaHoraria: 60, ementa: 'Máquinas de indução trifásicas: aspectos construtivos, campo magnético girante, tensões induzidas, modos de operação, circuito equivalente, características de desempenho, efeito da resistência do rotor, harmônicas. Máquinas de indução monofásicas: campos girantes duplos, circuito equivalente, projeto da partida. Motor universal. Motor de passo. Análise dinâmica de máquinas de corrente contínua: controle e componentes do sistema. Análise dinâmica de máquinas de indução: controle e componentes do sistema. Análise dinâmica de máquinas síncronas: controle e componentes do sistema. Representações em espaço de estado. Soluções para o problema servo motor. Modelo térmico para dispositivos eletromagnéticos.' },
        { codigo: 'ENGC47', nome: 'TRANSMISSÃO E DISTRIBUIÇÃO DE ENERGIA ELÉTRICA', cargaHoraria: 60, ementa: 'Os sistemas de T&D. Cálculo dos parâmetros de linha. Modelos de linhas. Aspectos Mecânicos. Mercado e projeções. Operação e manutenção. Projeto. Planejamento da expansão. Noções de qualidade da energia: continuidade, níveis de tensão, flickers, oscilações momentâneas e harmônicos. Equipamentos da distribuição: reguladores de tensão, banco de capacitores, religadores, reatores, resistências e reatores de aterramento, transformadores de aterramento. Aspectos ambientais da transmissão e distribuição.' },
        { codigo: 'ENGC49', nome: 'MEDIÇÃO DE GRANDEZAS FÍSICAS', cargaHoraria: 60, ementa: 'Medidas de parâmetros elétricos e magnéticos em DC e 60 Hz: medidas de tensão, medidas de corrente, medidas de resistência, medidas de potência monofásica, medidas de potência trifásica a 2 e a 3 elementos, transformadores de corrente e tensão, medidas de campo magnético, medidas de campo elétrico, medidas de isolamento, medidas de resistência de aterramento. Medidas de Força e Deslocamento: transdutores tipo LVDT, extensômetros elétricos, transdutores de força e de torque. Medidas de Aceleração. Medidas de Pressão: manômetros, barômetro, medidores de peso morto, medidor de Bourdon, medidor de diafragma. Medidas de Vazão: medidores por diferença de pressão, tubo de Pitot, medidores de regime laminar, rotâmetros, anemômetros de fio quente, medidores de deslocamento positivo, turbinas, medidores eletromagnéticos. Medidas de Umidade. Medidas de Nível: ultra-som e radar. Medidas de Temperatura: medidores de expansão térmica, termopares, resistências e termistores, pirômetros.' },
        { codigo: 'ENGC54', nome: 'LABORATÓRIO INTEGRADO VI', cargaHoraria: 60, ementa: 'Atividades experimentais associadas às disciplinas Dispositivos de Conversão Eletromecânica da Energia II, Sistemas de Controle I, Medição de Grandezas Físicas, Transmissão e Distribuição de Energia Elétrica.' },
        { codigo: 'GENG0032', nome: 'CIÊNCIAS DO AMBIENTE', cargaHoraria: 60, ementa: 'A problemática ambiental. Biodiversidade. Impactos negativos no ambiente resultante do desenvolvimento dos processos produtivos e pelo consumo. Os diversos tipos de poluição. Prevenção da Poluição e Tecnologias Limpas. Legislação Ambiental aplicada. Avaliação de Impactos. Gestão Ambiental.' },
      ],
    },
    {
      nome: '8º Semestre',
      numPasta: '8-semestre',
      disciplinas: [
        { codigo: 'ADM012', nome: 'ADMINISTRAÇÃO', cargaHoraria: 60, ementa: 'Funções e princípios da administração e organização de empresas. Planejamento e controle administrativo. Administração geral e específica. Administração de pessoal. Administração financeira. Administração de suprimentos. Administração contábil.' },
        { codigo: 'ENGC45', nome: 'INSTALAÇÕES E EQUIPAMENTOS ELÉTRICOS I', cargaHoraria: 60, ementa: 'Padrões e normas técnicas pertinentes. Luminotécnica. Instalações prediais, especiais e comerciais em baixa tensão. Instalações telefônicas. Aterramento. Tecnologia e especificação de equipamentos para baixa tensão: disjuntores, chaves, reatores, pára-raios, capacitores, TC e TP. Normas e ensaios.' },
        { codigo: 'ENGC48', nome: 'ELETRÔNICA DE POTÊNCIA', cargaHoraria: 60, ementa: 'Dispositivos de potência: TBJ, MOSFET, IGBT, GTO, tiristores. Comutação. Retificadores a tiristor. Circuitos básicos para controle de fase. Técnicas de modulação. Conversores CC-CC. Conversores CC-CA. Dissipação térmica. Aplicações.' },
        { codigo: 'ENGC52', nome: 'GERAÇÃO DE ENERGIA ELÉTRICA', cargaHoraria: 60, ementa: 'A questão energética. O Balanço energético. Recursos e fontes energéticas. Centrais hidrelétricas e nucleares. Centrais termelétricas: ciclos termodinâmicos, combustíveis, estudos, equipamentos e especificidades. Geração distribuída. Fontes alternativas: solar, eólica, biomassa e células de combustível.' },
        { codigo: 'ENGC55', nome: 'LABORATÓRIO INTEGRADO VII', cargaHoraria: 30, ementa: 'Atividades experimentais associadas às disciplinas Geração de Energia Elétrica, Instalações e Equipamentos Elétricos e Eletrônica de Potência.' },
      ],
    },
    {
      nome: '9º Semestre',
      numPasta: '9-semestre',
      disciplinas: [
        { codigo: 'DIR175', nome: 'LEGISLAÇÃO SOCIAL', cargaHoraria: 60, ementa: 'Previdência Social. Assistência Social. Legislação Trabalhista. Código Civil. Segurança Social.' },
        { codigo: 'ECOB40', nome: 'INTRODUÇÃO À ECONOMIA I', cargaHoraria: 60, ementa: 'Principais escolas do pensamento econômico. Conceitos econômicos básicos. Oferta, demanda, elasticidades, excedente do produtor e do consumidor. Custos de produção. Estruturas de mercado: concorrência perfeita, monopólio, oligopólio e concorrência monopolística. A renda nacional e outros agregados. O fluxo circular da renda. Emprego e distribuição de renda. Moeda e inflação. Crescimento econômico' },
        { codigo: 'GENG0035', nome: 'ESTÁGIO CURRICULAR EM ENGENHARIA ELÉTRICA', cargaHoraria: 180, ementa: 'Atividade compatível com a profissão, realizada em Empresa ou Instituição, supervisionada obrigatoriamente por um engenheiro eletricista e por um professor do Departamento de Engenharia Elétrica.' },
        { codigo: 'GENG0036', nome: 'PROJETO DE CONCLUSÃO DE CURSO', cargaHoraria: 60, ementa: 'Elaboração de um projeto de conclusão de curso devendo este consistir-se de: desenvolvimento de um produto, hardware ou software, com explícita aplicação de recursos e técnicas de Engenharia Elétrica, desenvolvimento de uma metodologia com explícita aplicação em Engenharia Elétrica ou desenvolvimento de pesquisa científica em um ou mais dos diversos domínios da Engenharia Elétrica. O projeto deverá ser elaborado, sob supervisão de um(a) professor(a) orientador(a), contemplando os itens mínimos: introdução, objetivos, fundamentação teórica, metodologia, resultados esperados, cronograma de atividades e referências.' },
      ],
    },
    {
      nome: '10º Semestre',
      numPasta: '10-semestre',
      disciplinas: [
        { codigo: 'GENG0037', nome: 'TRABALHO DE CONCLUSÃO DE CURSO', cargaHoraria: 60, ementa: 'Execução do projeto de conclusão de curso aprovado. Elaboração de monografia ou artigo científico, sob supervisão de um(a) professor(a) orientador(a). Defesa do trabalho perante banca examinadora.' },
      ],
    },
];

const AbasMaterias: React.FC = () => {
    // Estado para a aba de semestre ativa
    const [activeIndex, setActiveIndex] = useState<number>(0);
    // Novo estado para a ementa ativa (usa a chave da matéria, que é única)
    const [openEmenta, setOpenEmenta] = useState<string | null>(null);

    const activeSemestre = semestres[activeIndex];
    const darkPrimary = '#0056b3'; // Cor ativa
    const lightGray = '#f8f9fa'; // Cor inativa
    const ementaBg = '#e9ecef'; // Cor de fundo para a ementa

    // Lógica para alternar a ementa
    const toggleEmenta = (codigo: string) => {
        setOpenEmenta(openEmenta === codigo ? null : codigo);
    };

    // Função para gerar o nome do arquivo PDF 
    const getPdfFullPath = (numPasta: string, codigo: string) => 
        `${PDF_BASE_PATH}${numPasta}/${codigo.toLowerCase()}.pdf`;

    // Componente do botão de voltar 
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
                {/* TÍTULO */}
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
                                style={{
                                    cursor: 'pointer',
                                    position: 'relative',
                                    zIndex: isActive ? 3 : 2, 
                                    padding: '8px 12px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    color: isActive ? 'white' : darkPrimary,
                                    transition: 'all 0.2s',
                                    transform: isActive ? 'translateY(-2px) perspective(1px) skewX(-10deg)' : 'perspective(1px) skewX(-10deg)', 
                                    marginRight: '0px', 
                                }}
                            >
                                {/* O texto dentro do trapézio */}
                                <span style={{ 
                                    position: 'relative', zIndex: 5,
                                    transform: 'skewX(10deg)', 
                                    display: 'block',
                                    transition: 'color 0.1s',
                                }}>
                                    {semestre.nome.replace(' Semestre', '')}
                                </span>
                                {/* Fundo que cria o formato Trapézio e a cor de fundo */}
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                    backgroundColor: isActive ? darkPrimary : lightGray,
                                    zIndex: 1,
                                    transition: 'all 0.2s',
                                    borderBottom: isActive ? '2px solid white' : 'none', 
                                    borderTopLeftRadius: '6px',
                                    borderTopRightRadius: '6px',
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
                        <React.Fragment key={disc.codigo}>
                            {/* ITEM DA MATÉRIA: Clicável */}
                            <li 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                onClick={() => toggleEmenta(disc.codigo)}
                                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                <div>
                                    <strong>{disc.codigo}:</strong> {disc.nome}
                                </div>
                                <span className="badge bg-info text-dark rounded-pill">
                                    {disc.cargaHoraria}h
                                </span>
                            </li>

                            {/* CAIXA DE EMENTA QUE ABRE ABAIXO */}
                            <div 
                                className={`collapse ${openEmenta === disc.codigo ? 'show' : ''}`}
                                style={{
                                    backgroundColor: ementaBg,
                                    padding: '10px 15px',
                                    borderBottom: '1px solid #dee2e6',
                                    fontSize: '0.9rem',
                                    color: '#495057'
                                }}
                            >
                                {/* Descrição sem caracteres Markdown */}
                                <p className="mb-2">
                                    <span style={{ fontWeight: 'bold' }}>Descrição:</span> {disc.ementa}
                                </p>
                                
                                {/* LINK DE DOWNLOAD DO PDF (APONTA PARA O NOVO CAMINHO) */}
                                <p className="mt-2 mb-0">
                                    <a 
                                        href={getPdfFullPath(activeSemestre.numPasta, disc.codigo)}
                                        download
                                        style={{ 
                                            color: darkPrimary, 
                                            fontWeight: 'bold',
                                            textDecoration: 'none'
                                        }}
                                        title={`Baixar PDF completo de ${disc.nome}`}
                                    >
                                        Clique aqui para mais informações (Baixar PDF)
                                    </a>
                                </p>
                            </div>
                        </React.Fragment>
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
                .collapse.show {
                    display: block;
                }
            `}</style>
        </>
    );
};

export default AbasMaterias;