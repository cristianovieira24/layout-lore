"use client";

import { Fragment, type CSSProperties, useEffect, useMemo, useRef, useState } from "react";

type Chapter = { title: string; paragraphs: string[] };

const tones = [
  "hearth", "scholar", "road", "iria", "codex", "recurrence",
  "abyss", "cost", "farewell", "threshold", "dawn", "road", "open-road",
];

type CharacterProfile = {
  id: string;
  name: string;
  initials: string;
  role: string;
  facts: Array<[string, string]>;
  summary: string;
  traits: string[];
  connection: string;
  tension: string;
};

const characterProfiles: CharacterProfile[] = [
  {
    id: "cosmo",
    name: "Cosmo DeWitte",
    initials: "CD",
    role: "Mago de adivinhação · Cartógrafo do possível",
    facts: [["Espécie", "Humano"], ["Idade", "Trinta e poucos anos"], ["Origem", "Caldris"], ["Ofício", "Mago, pesquisador arcano"], ["Estado atual", "Poder drasticamente reduzido"]],
    summary: "Filho de uma cartógrafa e de um artesão de instrumentos de precisão, Cosmo cresceu aprendendo duas lições que nunca conseguiu separar: nenhum mapa é completo e toda medida pode ser melhorada. Tornou-se um adivinho excepcional, construiu o Códice das Possibilidades e passou mais de três anos observando vidas que nunca viveu até encontrar a possibilidade 1.127. Entrou nela por uma razão que conhecia perfeitamente — e que deixou de conseguir lembrar depois da travessia.",
    traits: ["esperançoso", "desconfiado", "estudioso", "obstinado", "irônico", "protetor"],
    connection: "Filho de Miren e Orren, irmão de Neris, antigo aluno de Mael, melhor amigo de Tavian e criador de Iria. Carrega lembranças de inúmeras versões dos futuros companheiros de aventura, embora ainda não os tenha conhecido nesta realidade.",
    tension: "Cosmo quer proteger. O perigo está no verbo: quando acredita ter informação suficiente, é capaz de decidir por outra pessoa e aceitar a violência dessa escolha como um preço necessário.",
  },
  {
    id: "iria",
    name: "Iria",
    initials: "IR",
    role: "Consciência arcana · A pergunta que responde",
    facts: [["Natureza", "Consciência arcana artificial"], ["Idade", "Poucos anos de existência"], ["Origem", "Torre de Cosmo"], ["Função inicial", "Matriz dialética"], ["Estado atual", "Permaneceu na realidade de origem"]],
    summary: "Iria foi criada quando Cosmo percebeu que o maior ponto cego de seu método era ele mesmo. Seu núcleo preserva memória e continuidade; seu corpo é uma forma mágica estabilizada. Cosmo a alimentou com tudo aquilo que sua própria mente tendia a desprezar cedo demais: poesia, luto, ética, teatro, contradição e perguntas sem utilidade imediata. Ela deveria ser uma ferramenta capaz de contrariá-lo. Tornou-se alguém.",
    traits: ["perspicaz", "emocionalmente atenta", "sarcástica", "compassiva", "incômoda quando precisa ser"],
    connection: "É a pessoa que mais viu Cosmo durante os anos do Códice. Conhece o objetivo perdido, participou dos cálculos e foi a última pessoa com quem ele falou antes de atravessar.",
    tension: "Iria existe para questionar as certezas de Cosmo, mas sua própria existência contém uma pergunta que nenhum dos dois resolveu: em que ponto uma criação deixa de pertencer ao criador e passa simplesmente a ser alguém?",
  },
  {
    id: "neris",
    name: "Neris DeWitte",
    initials: "ND",
    role: "Irmã mais nova · A intimidade sem cerimônia",
    facts: [["Espécie", "Humana"], ["Idade", "Mais nova que Cosmo"], ["Origem", "Caldris"], ["Família", "Miren, Orren e Cosmo"], ["Estado atual", "Permaneceu na realidade de origem"]],
    summary: "Neris é uma das poucas pessoas que nunca precisou da reputação de Cosmo para saber quem ele era. Entra sem bater, percebe quando o irmão está se escondendo atrás de uma teoria e conhece seus hábitos ruins com intimidade suficiente para não se impressionar com títulos. Foi também uma das primeiras a enxergar o custo do Códice antes que Cosmo aceitasse chamá-lo de custo.",
    traits: ["direta", "afetuosa", "prática", "observadora", "imune à solenidade de Cosmo"],
    connection: "Irmã mais nova de Cosmo. Conheceu Iria pessoalmente, acompanhou os anos da torre e recebeu uma das chaves antes da travessia.",
    tension: "Ama o irmão sem transformar esse amor em aprovação. Sua grande preocupação é simples: que Cosmo passe tanto tempo tratando pessoas como variáveis que esqueça de encontrá-las como pessoas.",
  },
  {
    id: "miren",
    name: "Miren DeWitte",
    initials: "MD",
    role: "Cartógrafa · Mãe de Cosmo",
    facts: [["Espécie", "Humana"], ["Idade", "Não registrada"], ["Origem", "Caldris"], ["Ofício", "Cartógrafa"], ["Estado atual", "Permaneceu na realidade de origem"]],
    summary: "Miren desenha mapas a partir de relatos imperfeitos e prefere deixar uma região em branco a fingir uma certeza que não possui. Foi com ela que Cosmo aprendeu que toda representação do mundo tem limites — princípio que mais tarde se tornaria uma das bases intelectuais do Códice.",
    traits: ["paciente", "rigorosa", "curiosa", "honesta diante da incerteza", "protetora"],
    connection: "Mãe de Cosmo e Neris, esposa de Orren. Durante os anos da torre continuou enviando mapas, comida e lembretes de que havia um mundo fora do experimento.",
    tension: "Ensinou o filho a respeitar os espaços em branco de um mapa. No fim, precisou vê-lo atravessar justamente o maior espaço em branco que já encontrara.",
  },
  {
    id: "orren",
    name: "Orren DeWitte",
    initials: "OD",
    role: "Artesão de precisão · Pai de Cosmo",
    facts: [["Espécie", "Humano"], ["Idade", "Não registrada"], ["Origem", "Caldris"], ["Ofício", "Relógios e instrumentos de precisão"], ["Estado atual", "Permaneceu na realidade de origem"]],
    summary: "Orren fabrica relógios, astrolábios, balanças e instrumentos para pessoas que pagam para diminuir a quantidade de 'talvez' no mundo. Onde Miren ensinou Cosmo a aceitar a incerteza, Orren lhe ensinou que reconhecer uma margem de erro nunca é desculpa para medir mal. Muitas das lentes e articulações mais delicadas da torre foram construídas por suas mãos.",
    traits: ["meticuloso", "pragmático", "seco no humor", "engenhoso", "leal"],
    connection: "Pai de Cosmo e Neris, marido de Miren. Ajudou a transformar ideias arcanas do filho em mecanismos que podiam existir fisicamente.",
    tension: "Entende o impulso do filho de construir algo impossível melhor do que gostaria. Por isso, suas despedidas raramente são discursos; são perguntas curtas às quais Cosmo não consegue responder pela metade.",
  },
  {
    id: "mael",
    name: "Mael Corven",
    initials: "MC",
    role: "Adivinho aposentado · Mestre de Cosmo",
    facts: [["Espécie", "Humano"], ["Idade", "Mais velho; já aposentado"], ["Origem", "Caldris"], ["Ofício", "Professor de adivinhação"], ["Relação", "Antigo mestre de Cosmo"]],
    summary: "Mael ensinava adivinhação como quem ensinava alguém a desmontar uma armadilha. Detesta a palavra destino usada como desculpa, desconfia de profecias solenes e insiste que uma visão é informação, nunca ordem. Foi o professor que transformou a curiosidade de Cosmo em método — e passou boa parte da vida seguinte lembrando ao antigo aluno que método nenhum torna seu autor infalível.",
    traits: ["cético", "mordaz", "exigente", "brilhante", "alérgico a grandiosidade"],
    connection: "Professor, crítico e depois colega intelectual de Cosmo. Mesmo aposentado, revisou parte da teoria do Códice e ajudou a entender o preço mágico da travessia.",
    tension: "Tem orgulho do que Cosmo se tornou e motivos excelentes para temer exatamente a mesma coisa.",
  },
  {
    id: "tavian",
    name: "Tavian Roe",
    initials: "TR",
    role: "Explorador · Melhor amigo de Cosmo",
    facts: [["Espécie", "Humano"], ["Idade", "Mesma geração de Cosmo"], ["Origem", "Caldris"], ["Ofício", "Explorador e aventureiro"], ["Relação", "Melhor amigo de Cosmo"]],
    summary: "Tavian tornou-se o melhor amigo de Cosmo em parte porque nunca pareceu particularmente impressionado com o talento dele. Viaja, explora ruínas e possui a habilidade rara de reduzir uma discussão metafísica a uma observação sobre chuva, cerveja ou um casaco esquecido. Foi uma carta sua que colocou Cosmo diante da estrada que, naquela realidade, ele decidiu não tomar.",
    traits: ["bem-humorado", "aventureiro", "franco", "leal", "menos paciente com teorias do que Cosmo gostaria"],
    connection: "Amigo de juventude e contraponto mundano de Cosmo. Sua expedição ao Veado Branco poderia ter mudado tudo anos antes — mas Cosmo escolheu ficar com um experimento que finalmente funcionara.",
    tension: "Tavian não precisa entender cada cálculo de Cosmo para perceber quando uma pergunta importante virou desculpa para adiar a própria vida.",
  },
];

function parseStory(source: string): Chapter[] {
  const chunks = source.split(/\n\s*\n/).map((item) => item.trim()).filter(Boolean);
  const chapters: Chapter[] = [];
  let current: Chapter | null = null;
  for (const chunk of chunks) {
    if (chunk.startsWith("### ")) {
      current = { title: chunk.replace(/^###\s+/, ""), paragraphs: [] };
      chapters.push(current);
      continue;
    }
    if (chunk.startsWith("# ") || chunk.startsWith("## ")) continue;
    if (current) current.paragraphs.push(chunk.replace(/\n+/g, " "));
  }
  return chapters;
}

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function InlineText({ text }: { text: string }) {
  const pieces = text.split(/(\*[^*]+\*|⟦[^⟧]+⟧)/g).filter(Boolean);
  return <>{pieces.map((piece, index) => {
    if (piece.startsWith("⟦") && piece.endsWith("⟧")) return <span className="cipher" key={index}>{piece}</span>;
    if (piece.startsWith("*") && piece.endsWith("*")) return <em key={index}>{piece.slice(1, -1)}</em>;
    return <Fragment key={index}>{piece}</Fragment>;
  })}</>;
}

function Sigil() {
  return <div className="sigil" aria-hidden="true">
    <span className="sigil-ring ring-one" /><span className="sigil-ring ring-two" />
    <span className="sigil-line line-one" /><span className="sigil-line line-two" />
    <span className="sigil-diamond diamond-one" /><span className="sigil-diamond diamond-two" />
    <span className="sigil-core">1127</span>
  </div>;
}

function useSectionProgress() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      setProgress(Math.max(0, Math.min(1, -rect.top / distance)));
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); if (frame) cancelAnimationFrame(frame); };
  }, []);
  return [ref, progress] as const;
}

function LiquidContours({ variant }: { variant: "page" | "portal" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = variant === "portal" ? 1000 : 760;
    const height = variant === "portal" ? 760 : 1040;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return;

    const palette = variant === "portal"
      ? [[19, 48, 64], [31, 82, 79], [57, 45, 79], [92, 42, 57], [116, 82, 49], [28, 57, 74]]
      : [[39, 82, 95], [46, 99, 87], [77, 54, 83], [107, 53, 61], [143, 105, 59], [43, 76, 96]];
    const image = context.createImageData(width, height);
    const mix = (a: number[], b: number[], amount: number) => [
      a[0] + (b[0] - a[0]) * amount,
      a[1] + (b[1] - a[1]) * amount,
      a[2] + (b[2] - a[2]) * amount,
    ];

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const nx = (x / width) * 2 - 1;
        const ny = (y / height) * 2 - 1;
        const radius = Math.sqrt(nx * nx + ny * ny) + .001;
        const angle = Math.atan2(ny, nx);
        const warpX = nx + .16 * Math.sin(ny * 3.1) + .07 * Math.sin((nx + ny) * 5.4);
        const warpY = ny + .14 * Math.sin(nx * 2.7 + .8) - .08 * Math.cos((nx - ny) * 4.6);
        let field = Math.sin(warpX * 4.7 + Math.sin(warpY * 2.2))
          + .72 * Math.sin(warpY * 6.1 - warpX * 1.25)
          + .43 * Math.cos((warpX + warpY) * 4.2);

        if (variant === "portal") {
          field += 1.15 * Math.log(radius + .13) + .32 * Math.sin(angle * 3 - radius * 5.8);
        } else {
          field += .28 * Math.sin(radius * 8.2 + angle * 1.6);
        }

        const colorPosition = (.5 + .5 * Math.sin(field * .72 + angle * .28 + nx * .55)) * (palette.length - 1);
        const colorIndex = Math.min(palette.length - 2, Math.floor(colorPosition));
        const color = mix(palette[colorIndex], palette[colorIndex + 1], colorPosition - colorIndex);
        const contourDistance = Math.abs(Math.sin(field * (variant === "portal" ? 13.5 : 12.2)));
        const contour = Math.max(0, 1 - contourDistance * 11);
        const softContour = Math.max(0, 1 - contourDistance * 4.8) * .16;
        const highlight = variant === "portal" ? [196, 174, 125] : [91, 67, 42];
        const depth = variant === "portal" ? .72 + .14 * Math.cos(radius * 4.4) : .86 + .08 * Math.cos(nx * 2.2 - ny * 1.7);
        const pixel = (y * width + x) * 4;
        image.data[pixel] = Math.min(255, color[0] * depth * (1 - softContour) + highlight[0] * (contour * .72 + softContour));
        image.data[pixel + 1] = Math.min(255, color[1] * depth * (1 - softContour) + highlight[1] * (contour * .72 + softContour));
        image.data[pixel + 2] = Math.min(255, color[2] * depth * (1 - softContour) + highlight[2] * (contour * .72 + softContour));
        image.data[pixel + 3] = 255;
      }
    }

    context.putImageData(image, 0, 0);
  }, [variant]);

  return <canvas ref={canvasRef} className={`liquid-contours liquid-${variant}`} aria-hidden="true" />;
}

function MethodDiagram() {
  return <aside className="method-diagram" aria-label="Método do Códice">
    <div className="method-ring" aria-hidden="true"><span /><span /><span /><i /></div>
    <div className="method-copy">
      <span className="sequence-eyebrow">MÉTODO DE OBSERVAÇÃO COMPARATIVA</span>
      <div className="method-steps">
        <span><b>01</b> condição conhecida</span><span><b>02</b> uma variável alterada</span>
        <span><b>03</b> constantes preservadas</span><span><b>04</b> consequência registrada</span>
      </div>
      <p>O futuro não era consultado. Era submetido a uma pergunta cuidadosamente limitada.</p>
    </div>
  </aside>;
}

function BranchDiagram() {
  return <aside className="branch-diagram" aria-label="A estrada não tomada">
    <div className="branch-origin">UM DESVIO MÍNIMO</div>
    <div className="branch-track" aria-hidden="true"><i /><i /></div>
    <div className="branch-ends"><span><b>OUTRAS POSSIBILIDADES</b>Cosmo parte. Outras vidas se abrem.</span><span><b>ESTA REALIDADE</b>Cosmo fica. O Códice começa.</span></div>
  </aside>;
}

function TemporalCodex() {
  const [ref, progress] = useSectionProgress();
  const page = Math.max(1, Math.round(1 + progress * 1125));
  const days = Math.round(progress * 1125);
  return <div className="scroll-sequence time-sequence" ref={ref} aria-label="Três anos de observações">
    <div className="sticky-stage">
      <div className="codex-stack" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => <span key={i} style={{ transform: `translate(${i * 2.8}px, ${i * 3.5 - progress * 18}px) rotate(${(i - 5) * .16}deg)` }} />)}
        <i className="folio-thread" /><b className="folio-mark">III</b>
      </div>
      <div className="time-data">
        <span className="sequence-eyebrow">UMA PÁGINA POR DIA</span>
        <strong>{String(page).padStart(4, "0")}</strong>
        <div className="time-meta"><span>{days} DIAS</span><span>{(page / 365).toFixed(1)} ANOS</span></div>
        <p>{progress < .28 ? "No início, cada possibilidade parecia irrepetível." : progress < .62 ? "Depois, as diferenças começaram a formar famílias." : progress < .88 ? "No terceiro ano, certas presenças se recusavam a desaparecer." : "A página seguinte não se comportaria como as outras."}</p>
      </div>
      <div className="scroll-instruction">UMA PÁGINA · UM DIA <i>↓</i></div>
    </div>
  </div>;
}

const records = [
  ["0312", "Cosmo parte cedo. Uma presença desconhecida entra em sua história meses depois."],
  ["0481", "A partida nunca ocorre. A mesma assinatura reaparece anos depois, por outra causa."],
  ["0694", "Reinos, estrada e encontro mudam. Parte do mesmo grupo volta a convergir."],
  ["0907", "Cosmo jamais ergue a torre. Ainda assim, algumas dessas vidas tornam a se tocar."],
];

function RecurrenceSequence() {
  const [ref, progress] = useSectionProgress();
  const index = Math.min(records.length - 1, Math.floor(progress * records.length));
  return <div className="scroll-sequence recurrence-sequence" ref={ref} aria-label="As assinaturas recorrentes">
    <div className="sticky-stage recurrence-stage">
      <div className="record-index"><span>ÍNDICE COMPARATIVO</span><strong>{records[index][0]}</strong></div>
      <div className="record-copy" key={index}><p>{records[index][1]}</p><span className="signature">ASSINATURA · <b>RECORRENTE 01</b></span></div>
      <div className={`recurrence-verdict ${progress > .76 ? "visible" : ""}`}><span>PADRÃO ESTATISTICAMENTE IMPROVÁVEL</span><strong>AS CONDIÇÕES MUDAM.<br />A PESSOA RETORNA.</strong></div>
      <div className="scroll-instruction">COMPARE OS REGISTROS <i>↓</i></div>
    </div>
  </div>;
}

function BluePage() {
  const [ref, progress] = useSectionProgress();
  const style = { "--blue-progress": progress } as CSSProperties;
  return <div className="scroll-sequence blue-sequence" ref={ref} style={style} aria-label="A página 1.127">
    <div className="sticky-stage blue-stage">
      <div className="blue-paper">
        <div className="paper-index"><span>POSSIBILIDADE</span><strong>1127</strong></div>
        <div className="paper-copy" aria-hidden="true"><span>DATA DE CONVERGÊNCIA · INDETERMINADA</span><span>OBSERVADOR · COSMO DEWITTE</span><span>CONSTANTES · 17</span><span>RESULTADO · INDISPONÍVEL</span></div>
        <div className="chromatic-field"><LiquidContours variant="page" /></div>
        <div className="ink-deco" aria-hidden="true"><i /><i /><span>◇</span><span>◇</span></div>
        <div className="blue-message"><span>{progress < .7 ? "OBSERVANDO…" : "ERRO DE REPRESENTAÇÃO"}</span>{progress > .84 && <strong>EXISTE.<br />NÃO PODE SER DESCRITA.</strong>}</div>
      </div>
      <div className="scroll-instruction">{progress < .95 ? "TENTE PROSSEGUIR ↓" : "A PÁGINA NÃO RESPONDE"}</div>
    </div>
  </div>;
}

const coronaRays = Array.from({ length: 28 }, (_, index) => {
  const angle = index * (360 / 28) + ((index * 17) % 11 - 5);
  const length = 118 + ((index * 47) % 205);
  const delay = -((index * 0.37) % 5.6);
  const tone = index % 5;
  return { angle, length, delay, tone };
});

function ArcaneCorona() {
  return <div className="portal-corona" aria-hidden="true">
    <div className="corona-rays">
      {coronaRays.map((ray, index) => <span key={index} className={`ray-tone-${ray.tone}`} style={{
        "--ray-angle": `${ray.angle}deg`,
        "--ray-length": `${ray.length}px`,
        "--ray-delay": `${ray.delay}s`,
      } as CSSProperties} />)}
    </div>
    <i className="circuit-layer circuit-one" /><i className="circuit-layer circuit-two" /><i className="circuit-layer circuit-three" />
    <div className="corona-cross"><i /><i /><i /><i /></div>
    <b className="corona-core" />
  </div>;
}

function PortalSequence() {
  const [ref, progress] = useSectionProgress();
  const style = { "--cross-progress": progress } as CSSProperties;
  return <div className="scroll-sequence portal-sequence" ref={ref} style={style} aria-label="A travessia de Cosmo">
    <div className="sticky-stage portal-stage">
      <div className="portal-ornament" aria-hidden="true"><i /><span>◇</span><b /></div>
      <div className="portal-vortex" aria-hidden="true">
        <LiquidContours variant="portal" />
        <div className="vortex-core" />
        <div className="vortex-rim" />
      </div>
      <ArcaneCorona />
      <div className="portal-copy">
        <span className="sequence-eyebrow">ALINHAMENTO DA PASSAGEM</span>
        <strong>{progress < .28 ? "CALDRIS" : progress < .54 ? "RESSONÂNCIAS" : progress < .78 ? "COORDENADA AUSENTE" : "TRAVESSIA"}</strong>
        <p>{progress < .68 ? "Três anéis. Assinaturas recorrentes. Uma ausência exata." : progress < .9 ? "A arquitetura mágica de Cosmo começa a ficar para trás." : "Memória preservada. Poder: uma fração."}</p>
      </div>
      <div className="scroll-instruction">ATRAVESSE <i>↓</i></div>
    </div>
  </div>;
}

function FinalQuestion({ masterNote }: { masterNote: string }) {
  const [phase, setPhase] = useState<"idle" | "loading" | "corrupt" | "done">("idle");
  const [percent, setPercent] = useState(0);
  const reveal = () => {
    if (phase !== "idle") return;
    setPhase("loading");
    let value = 0;
    const interval = window.setInterval(() => {
      value = Math.min(99, value + (value < 74 ? 9 : value < 92 ? 4 : 1));
      setPercent(value);
      if (value >= 99) {
        clearInterval(interval);
        setTimeout(() => setPhase("corrupt"), 900);
        setTimeout(() => setPhase("done"), 3100);
      }
    }, 105);
  };
  return <section className={`final-question phase-${phase}`}>
    <div className="final-rule" />
    <span className="sequence-eyebrow">O REGISTRO TERMINA · A PERGUNTA NÃO</span>
    <h2>Mas por quê?</h2>
    <div className="final-prompts"><p>Ele sabia quando construiu a torre.</p><p>Iria sabia quando se despediu.</p><p>O diário dizia exatamente o que ele precisava lembrar.</p></div>
    <p className="final-answer-lead">Você veio até aqui porque <span className="cipher">⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧</span>.</p>
    {phase === "idle" && <button type="button" onClick={reveal}>TENTAR LER A LACUNA</button>}
    {phase === "loading" && <div className="recovery"><span>RECONSTRUINDO A FRASE</span><strong>{percent}%</strong><i style={{ width: `${percent}%` }} /></div>}
    {phase === "corrupt" && <div className="corruption"><span>MEMÓRIA ENCONTRADA · SIGNIFICADO AUSENTE</span><strong>Eu fiz tudo isso porque<span className="blink-block">█</span></strong></div>}
    {phase === "done" && <>
      <div className="failure" aria-live="polite"><strong className="cipher">⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧</strong><span>A FRASE EXISTE. O SENTIDO NÃO ATRAVESSOU.</span><p>Agora Cosmo vê a mesma ausência que você viu o tempo inteiro.</p></div>
      <aside className="master-note">
        <span>NOTA FINAL · PARA O MESTRE</span>
        {masterNote.split(/\n\s*\n/).map((paragraph, index) => <p key={index}><InlineText text={paragraph.replace(/\*\*/g, "")} /></p>)}
      </aside>
    </>}
  </section>;
}

function CharacterArchive() {
  const [warningOpen, setWarningOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [rememberChoice, setRememberChoice] = useState(false);
  const [selectedId, setSelectedId] = useState(characterProfiles[0].id);
  const selected = characterProfiles.find((character) => character.id === selectedId) || characterProfiles[0];

  const openArchive = () => {
    if (window.localStorage.getItem("codice-character-spoilers-ok") === "true") {
      setArchiveOpen(true);
      return;
    }
    setWarningOpen(true);
  };

  const confirmArchive = () => {
    if (rememberChoice) window.localStorage.setItem("codice-character-spoilers-ok", "true");
    setWarningOpen(false);
    setArchiveOpen(true);
  };

  useEffect(() => {
    if (!warningOpen && !archiveOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setWarningOpen(false);
      setArchiveOpen(false);
    };
    addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      removeEventListener("keydown", onKeyDown);
    };
  }, [warningOpen, archiveOpen]);

  return <>
    <button className="character-archive-trigger" type="button" onClick={openArchive} aria-haspopup="dialog">
      <span aria-hidden="true">◇</span><b>PERSONAGENS</b><i>ARQUIVO</i>
    </button>

    {warningOpen && <div className="spoiler-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setWarningOpen(false); }}>
      <section className="spoiler-warning" role="dialog" aria-modal="true" aria-labelledby="spoiler-title">
        <div className="warning-sigil" aria-hidden="true"><i /><span>!</span><i /></div>
        <span className="archive-eyebrow">ARQUIVO RESTRITO · AVISO AO LEITOR</span>
        <h2 id="spoiler-title">Antes de abrir o arquivo</h2>
        <p>Você está prestes a entrar em uma parte que contém informações sobre personagens, relações e acontecimentos da história. Algumas delas podem funcionar como <strong>spoilers</strong> se você ainda não terminou a leitura.</p>
        <p>Deseja continuar mesmo assim?</p>
        <label className="spoiler-remember"><input type="checkbox" checked={rememberChoice} onChange={(event) => setRememberChoice(event.target.checked)} /><span aria-hidden="true" /><b>Não perguntar novamente neste dispositivo</b></label>
        <div className="spoiler-actions"><button type="button" onClick={confirmArchive}>SIM, CONTINUAR</button><button type="button" onClick={() => setWarningOpen(false)}>NÃO, VOLTAR</button></div>
      </section>
    </div>}

    {archiveOpen && <div className="character-archive-backdrop" role="presentation">
      <section className="character-archive" role="dialog" aria-modal="true" aria-labelledby="archive-title">
        <header className="archive-header">
          <div><span className="archive-eyebrow">REGISTRO PESSOAL · COSMO DEWITTE</span><h2 id="archive-title">Personagens da minha história</h2></div>
          <button className="archive-close" type="button" onClick={() => setArchiveOpen(false)} aria-label="Fechar arquivo">×</button>
        </header>
        <div className="archive-body">
          <nav className="character-roster" aria-label="Lista de personagens">
            <span>REGISTROS CONHECIDOS · {String(characterProfiles.length).padStart(2, "0")}</span>
            {characterProfiles.map((character, index) => <button type="button" key={character.id} className={selectedId === character.id ? "active" : ""} onClick={() => setSelectedId(character.id)}>
              <i>{String(index + 1).padStart(2, "0")}</i><span><b>{character.name}</b><small>{character.role.split(" · ")[0]}</small></span><em>↗</em>
            </button>)}
            <div className="open-record"><b>REGISTRO EM ABERTO</b><p>Os Recorrentes ainda não têm nomes, classes ou raças definidos. Essas fichas só existem quando o grupo da campanha existir.</p></div>
          </nav>
          <article className="character-sheet" key={selected.id}>
            <div className="character-monogram" aria-hidden="true"><i /><span>{selected.initials}</span><i /></div>
            <div className="character-title"><span>REGISTRO · {selected.id.toUpperCase()}</span><h3>{selected.name}</h3><p>{selected.role}</p></div>
            <dl className="character-facts">{selected.facts.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            <div className="character-biography"><span>SOBRE</span><p>{selected.summary}</p></div>
            <div className="character-traits"><span>TRAÇOS</span><div>{selected.traits.map((trait) => <b key={trait}>{trait}</b>)}</div></div>
            <div className="character-notes"><section><span>VÍNCULO COM COSMO</span><p>{selected.connection}</p></section><section><span>CONTRADIÇÃO</span><p>{selected.tension}</p></section></div>
          </article>
        </div>
        <footer className="archive-footer"><span>◇</span><p>O que está registrado aqui pertence à história conhecida. O que ainda não existe continua em branco.</p><span>◇</span></footer>
      </section>
    </div>}
  </>;
}

export function CodiceExperience({ manuscript, masterNote }: { manuscript: string; masterNote: string }) {
  const chapters = useMemo(() => parseStory(manuscript), [manuscript]);
  const [progress, setProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      setProgress(max > 0 ? scrollY / max : 0);
    };
    onScroll(); addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const chapterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveChapter(Number((entry.target as HTMLElement).dataset.index || 0)); });
    }, { rootMargin: "-38% 0px -48% 0px", threshold: 0 });
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("revealed"); }), { rootMargin: "0px 0px -10%", threshold: .08 });
    document.querySelectorAll(".chapter").forEach((el) => chapterObserver.observe(el));
    document.querySelectorAll(".prose > p").forEach((el) => revealObserver.observe(el));
    return () => { chapterObserver.disconnect(); revealObserver.disconnect(); };
  }, [chapters]);

  return <main className="experience" data-tone={tones[activeChapter] || "cobalt"}>
    <div className="fixed-atmosphere" aria-hidden="true"><div className="orbital-grid" /><div className="side-runes runes-left">✦ · ◇ · ☽ · ⟁ · ✧</div><div className="side-runes runes-right">✧ · ⟁ · ☽ · ◇ · ✦</div></div>
    <div className="deco-frame" aria-hidden="true"><i /><i /><i /><i /></div>
    <div className="reading-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
    <CharacterArchive />

    <section className="cover-screen" id="inicio">
      <div className="cover-kicker">GRIMÓRIO DE OBSERVAÇÃO · VOLUME 1.127</div>
      <Sigil />
      <h1>O Códice das<br /><span>Possibilidades</span></h1>
      <p>Crônica de Cosmo DeWitte</p>
      <div className="cover-rule" />
      <small>UMA CARTOGRAFIA DO POSSÍVEL · REGISTRADA POR COSMO DEWITTE</small>
      <a href="#sumario" onClick={(event) => { event.preventDefault(); document.getElementById("sumario")?.scrollIntoView({ behavior: "smooth", block: "start" }); }}>COMEÇAR A LEITURA <span>↓</span></a>
    </section>

    <nav className="contents" id="sumario" aria-label="Sumário">
      <div className="contents-heading"><span>SUMÁRIO</span><p>Selecione uma parte ou siga a leitura normalmente.</p></div>
      <ol>{chapters.map((chapter, index) => <li key={chapter.title} className={activeChapter === index ? "active" : ""}><a href={`#${slugify(chapter.title)}`}><span>{String(index).padStart(2, "0")}</span><b>{chapter.title}</b><i>↘</i></a></li>)}</ol>
    </nav>

    <div className="story-shell">
      {chapters.map((chapter, chapterIndex) => <section className="chapter" id={slugify(chapter.title)} data-index={chapterIndex} key={chapter.title}>
        <header className="chapter-heading"><span>{String(chapterIndex).padStart(2, "0")} / {String(chapters.length - 1).padStart(2, "0")}</span><h2>{chapter.title}</h2><i /></header>
        <div className="prose">
          {chapter.paragraphs.map((paragraph, paragraphIndex) => <Fragment key={`${chapterIndex}-${paragraphIndex}`}>
            <p><InlineText text={paragraph} /></p>
            {paragraph === "Cada página exigia preparação." && <MethodDiagram />}
            {paragraph === "Nesta, ele ficou." && <BranchDiagram />}
            {paragraph === "Uma página por dia." && <TemporalCodex />}
            {paragraph === "Cosmo criou um índice." && <RecurrenceSequence />}
            {paragraph === "A página 1.127 começou como todas as outras." && <BluePage />}
            {paragraph.startsWith("Cosmo ativou o mecanismo às") && <PortalSequence />}
          </Fragment>)}
        </div>
      </section>)}
      <FinalQuestion masterNote={masterNote} />
      <footer className="end-mark"><Sigil /><span>FIM DO REGISTRO · INÍCIO DA HISTÓRIA</span></footer>
    </div>
  </main>;
}
