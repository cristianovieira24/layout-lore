import { MANUSCRIPT as LEGACY_MANUSCRIPT, MASTER_NOTE as LEGACY_MASTER_NOTE } from "./story-source";

function replaceChapter(source: string, title: string, body: string) {
  const marker = `### ${title}`;
  const start = source.indexOf(marker);
  if (start < 0) return source;
  const next = source.indexOf("\n\n### ", start + marker.length);
  const end = next < 0 ? source.length : next;
  return `${source.slice(0, start)}${body.trim()}${source.slice(end)}`;
}

const chapterThree = String.raw`
### Capítulo III — A estrada que ele não tomou

A decisão que separou a vida de Cosmo de muitas outras não teve trovões, visões ou música apropriada.

Teve uma carta.

Tavian escrevera de uma estalagem chamada Veado Branco. Chuvas fortes haviam exposto ruínas a oeste de Caldris; havia inscrições antigas, um patrocinador disposto a pagar e, segundo ele, perigo suficiente para impedir que a viagem se tornasse educativa demais. Alguns exploradores partiriam da estalagem na manhã seguinte, e Tavian queria alguém capaz de distinguir um presságio legítimo de uma inscrição que apenas parecia ameaçadora sob luz ruim.

Cosmo pretendia ir.

Separou uma bolsa, escolheu dois livros, depois voltou a guardar um deles porque se recusava a admitir que precisaria dos dois. Prometeu a Neris que apareceria para jantar antes da partida. Estava procurando um casaco quando um experimento que repetia havia meses finalmente funcionou.

Duas placas de vidro tratadas com sais diferentes estavam alinhadas diante do mesmo espelho de adivinhação. Cosmo acendeu uma vela entre elas e estabilizou a matriz.

Numa placa, a chama permaneceu acesa.

Na outra, apagou.

Ao mesmo tempo.

Não eram imagens sucessivas, ilusão ou eco. Duas consequências incompatíveis do mesmo estado inicial estavam presentes sem que a magia exigisse que uma delas fosse declarada verdadeira.

Cosmo ficou imóvel por alguns segundos. Depois olhou para a bolsa pronta. Depois para o experimento.

Sentou-se.

Quando tornou a perceber a passagem do tempo, o sol já estava nascendo. O Veado Branco ficava a duas horas de distância e Tavian provavelmente havia partido.

Neris encontrou a carta ao lado de quatro canecas de café.

— Você ainda consegue alcançá-lo.

— Consigo.

— Vai?

Cosmo observou as duas placas. Tinha reproduzido o efeito três vezes.

— Não.

— Porque isso é mais importante?

Ele pensou antes de responder.

— Porque isso pode me permitir parar de perguntar se escolhi a tentativa errada.

Neris conhecia a frase escondida por trás daquela resposta. Encostou-se à porta.

— E depois?

— Depois eu encontro um caminho até ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— E depois?

Cosmo a encarou.

— Depois eu vou viver.

— Esse é o problema. Você diz isso sobre tudo. Vai jantar depois da experiência. Vai viajar depois do artigo. Vai dormir depois do cálculo. Um dia você vai perceber que transformou a própria vida na coisa que pretende fazer assim que terminar a próxima pergunta.

Cosmo tentou encontrar uma resposta inteligente. Neris não lhe deu tempo.

— Só pensa nisso — disse, antes de descer.

Ele pensou.

Ficou mesmo assim.

Meses depois, Tavian voltou das ruínas com uma cicatriz nova e quatro versões incompatíveis da mesma história. Cosmo ouviu três, contestou duas e pagou a cerveja que acompanhou a quarta. A expedição continuou sendo o que sempre fora para ele: uma viagem com um velho amigo que escolhera não fazer. Nenhuma pessoa que, anos mais tarde, ocuparia páginas inteiras do Códice entrou em sua vida por causa daquela carta.

Isso importaria.

Porque, quando certos desconhecidos começassem a aparecer nas possibilidades, Cosmo não teria uma memória anterior à qual atribuí-los. Nenhuma apresentação esquecida. Nenhum relato de Tavian. Nenhuma coincidência conveniente.

Na realidade em que construiu a torre, ele jamais os conhecera.

O experimento das placas tornou-se uma matriz comparativa. A matriz exigiu mais espaço. O espaço exigiu instrumentos capazes de permanecer calibrados por dias. No terreno antigo da família ao norte de Caldris, onde Orren sonhara construir uma oficina maior antes de descobrir que odiava subir aquela estrada no inverno, Cosmo começou a erguer uma torre.

Não era uma torre de mago como as histórias gostavam de descrever. Não havia gárgulas, cristais flutuantes ou corredores que levavam a cômodos maiores por dentro. Havia contas, trabalhadores irritados, pedra chegando atrasada e Orren discutindo vinte minutos sobre a fundação.

A estranheza estava no projeto.

Três andares eram atravessados por canais de prata. O piso superior tinha sete posições para espelhos de obsidiana. A escadaria central contornava um poço cilíndrico onde anéis de metal poderiam girar sem tocar as paredes. Nenhuma janela estava onde seria mais bonita; todas obedeciam a ângulos específicos em relação ao horizonte mágico de Caldris.

Orren examinou o desenho final.

— Você está construindo um observatório.

— Em parte.

— Observatórios olham para alguma coisa.

Cosmo apontou para o círculo central.

— Este vai olhar para diferenças.

— Diferenças entre o quê?

— Entre o que acontece e o que teria acontecido se uma coisa fosse diferente.

Orren ficou calado por alguns segundos.

— Seu problema com relógios sempre foi eles medirem só uma hora de cada vez.

— É uma limitação de projeto.

— Não era elogio.

Cosmo sorriu.

O pai voltou aos desenhos.

— Quanto vai custar?

— Ainda não sei.

— Então já custa mais do que você calculou.

Orren estava certo.
`;

const chapterFive = String.raw`
### Capítulo V — Um livro do tamanho de uma torre

Chamavam-no de Códice porque era mais fácil apontar para o grande livro de capa escura no andar superior do que explicar os três andares abaixo dele.

O livro era apenas a parte visível.

O trabalho verdadeiro ocupava a torre inteira. Sob o piso, anéis de prata delimitavam o que a observação podia alcançar. Espelhos de obsidiana separavam ecos de magia que, sem eles, chegariam misturados. Lentes construídas por Orren distinguiam assinaturas quase idênticas. Reservatórios de sais mantinham a vidência estável por horas; selos nas paredes impediam que uma leitura deixasse resíduos na seguinte. No andar inferior, Cosmo fixava o que deveria permanecer igual. No segundo, isolava a mudança que queria testar. No último, observava suas consequências. Só então o resultado chegava ao papel.

O poder necessário para fazê-la funcionar continuava sendo de Cosmo.

Ele não acordara um dia capaz de contemplar universos infinitos. Seu domínio de adivinhação era o resultado de anos adaptando a própria mente a tarefas que, no início, conseguia sustentar por segundos. Aprendera geometria planar para representar relações sem distância física; magia simpática para rastrear coisas ligadas por história; técnicas mnemônicas para manter lembranças contraditórias sem confundi-las; e cálculo suficiente para separar a consequência da mudança que estava estudando do acaso ao redor.

Cada página exigia preparação.

Antes do amanhecer, Cosmo escolhia um estado inicial que conhecia, delimitava uma única mudança e fixava as constantes. Calibrava as lentes, preparava os vínculos, verificava a memória recente e abria a observação. Não via infinitas vidas de uma vez. Sustentava uma diferença e seguia suas consequências até onde a estrutura permitia.

Ao fim, o Códice registrava uma possibilidade.

Uma página por dia.

Na primeira semana, cada folha pareceu um milagre.

No centésimo dia, o milagre tinha lista de manutenção e manchas de café.

Cosmo procurava uma coisa específica. O método podia ter criado centenas de perguntas acadêmicas, e criou, mas nenhuma delas explicava por que ele aceitara transformar anos de vida num experimento. Todas as manhãs, antes de começar, havia uma pergunta anterior à pergunta técnica: *Nesta sequência, consigo chegar a ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧?*

O primeiro ano produziu respostas variadas e uma conclusão repetida.

Não.

Às vezes Cosmo se aproximava. Às vezes o mundo mudava de maneira tão radical que o problema assumia outra forma. Em algumas possibilidades ele deixava Caldris cedo; em outras, muito tarde. Tornava-se conselheiro de reis, fugitivo, professor, inimigo de gente poderosa, homem muito melhor do que era ou muito pior. Havia páginas em que alcançava poder ainda maior sem construir a torre. Havia uma em que abandonava magia por completo.

E, em certo número de vidas que inicialmente não parecia digno de nota, Cosmo acabava viajando ao lado de um grupo de aventureiros que não existia em nenhuma de suas memórias reais.

O encontro nunca acontecia do mesmo jeito. Às vezes vinha de uma dívida; às vezes, de um desastre; às vezes Cosmo aceitava um trabalho que nesta realidade jamais considerara. Mudavam estradas, reinos, guerras, estações. Mudava até o homem que ele havia se tornado quando o encontro acontecia.

O grupo aparecia mesmo assim.

Cosmo registrou o fato e seguiu adiante. Naquele momento, eram apenas pessoas dentro de uma possibilidade entre centenas.

Nenhuma delas resolvia ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

— Talvez a pergunta esteja errada — disse Iria na página 219.

Cosmo não se ofendeu. Era uma hipótese que já o assustava.

— Tenho testado outras formulações.

— Eu sei. Mas você continua fazendo a mesma pergunta com palavras diferentes.

Cosmo a encarou.

Iria apoiou os cotovelos na mesa.

— Você me construiu para não deixar isso passar.

Ele soltou o ar.

— Eu sei o que quero que aconteça. E sei por quê.

— Então me responda outra coisa. Se você conseguir exatamente o que quer, mas o que vier depois destruir a razão pela qual queria aquilo, vai chamar de vitória?

Cosmo ficou em silêncio.

Naquela noite, alterou o protocolo.

O segundo ano ficou mais lento e mais útil. Em vez de classificar sucesso pelo evento que esperava ver, passou a medir consequências posteriores. Descobriu que algumas aparentes vitórias eram apenas fracassos atrasados. Descobriu também que certos caminhos que descartara cedo continham componentes úteis.

O universo, concluiu, não respeitava a escala humana de importância. Um cavalo perdia uma ferradura, atrasava uma mensagem, o atraso impedia um duelo, um dos homens que deveria morrer tinha uma filha e aquela filha, décadas depois, salvava centenas durante uma epidemia. Pequenas diferenças produziam histórias enormes; eventos grandiosos às vezes morriam sem consequência depois de uma geração.

Iria proibiu a palavra *irrelevante* sem complemento.

— Irrelevante para qual pergunta? — corrigia.

— Para esta.

— Então escreva isso.

— Vai deixar o relatório insuportável.

— Melhor insuportável do que desonesto.

Cosmo escrevia.

No terceiro ano, deixou de contar o tempo pelo calendário.

801. 802. 803.

Iria o obrigava a parar a cada sete páginas. Neris aparecia sem regularidade suficiente para ser transformada em protocolo. Miren enviava comida e mapas recentes. Orren substituía peças sempre que encontrava pretexto para subir. Mael leu parte da teoria e escreveu nas margens tantos insultos quanto observações úteis.

O projeto não destruiu a vida de Cosmo. Fez algo mais sutil: começou a ocupar qualquer espaço que a vida deixava vago.

Foi então que alguns desconhecidos começaram a deixar de parecer desconhecidos.
`;

const chapterSix = String.raw`
### Capítulo VI — Vidas que ele nunca viveu

Cosmo percebeu o padrão tarde porque procurava por acontecimentos.

O Códice procurava relações.

Na possibilidade 312, ele passava meses ao lado de um pequeno grupo de aventureiros depois de um encontro que, em sua própria realidade, jamais ocorrera. Na 481, as causas daquele encontro eram removidas por completo; ainda assim, anos depois e muito longe dali, algumas das mesmas presenças voltavam a cruzar sua história. Na 694, Cosmo tomava decisões que deveriam tê-lo mantido em outro continente. O encontro vinha de outro modo.

Não havia uma estalagem secreta costurando os mundos. Não havia um patrono comum, uma classe, uma raça, uma cidade natal ou sequer um mesmo momento da vida. Havia apenas a recorrência de certas pessoas que, na realidade da torre, Cosmo nunca encontrara.

Ele criou um índice.

No começo, não indexou nomes. Nomes eram frágeis demais para aquilo. O Códice distinguia cada recorrente por uma combinação de relações causais, ecos simpáticos e padrões de presença — algo mais próximo de uma assinatura do que de uma identidade civil. Assim Cosmo podia reconhecer a mesma recorrência sem precisar supor quem aquela pessoa seria na possibilidade seguinte.

Encontrou uma.

Depois outra.

Depois percebeu que não estava encontrando indivíduos isolados.

Estava encontrando um grupo.

As condições mudavam violentamente. Reis diferentes. Guerras evitadas. Cidades destruídas em uma página e preservadas na seguinte. Em certas vidas, aquelas pessoas eram admiráveis. Em outras, cruéis. Algumas versões se tornavam inimigas umas das outras. Outras jamais chegavam a confiar plenamente em Cosmo. Havia futuros em que alguém sacrificava tudo para salvar um desconhecido e futuros em que uma variação pequena transformava a mesma presença em algo que Cosmo aprenderia a temer.

O que se repetia não era bondade.

Não era amizade.

Era importância.

— Você está procurando a semelhança errada — disse Iria certa noite.

Vinte e sete registros cobriam o chão da sala superior. Cosmo estava sentado entre eles com a expressão de quem considerava perfeitamente razoável jantar no mesmo lugar em que trabalhara pelas últimas onze horas.

— Eles acabam juntos — respondeu.

— Nem sempre.

— Frequente o bastante para ser estatisticamente ofensivo.

— Olhe para depois do encontro.

Cosmo ergueu os olhos.

Iria apontou para as folhas.

— Pare de perguntar onde eles estão. Pergunte o que o mundo faz depois que se encontram.

Cosmo reorganizou o índice até o amanhecer.

Iria estava certa.

A constante não era presença. Era influência. Quando aquelas vidas se tocavam, decisões pequenas passavam a produzir efeitos desproporcionais. Um resgate alterava uma aliança. Uma discussão impedia uma viagem. Uma mentira poupava uma cidade e arruinava uma amizade. Uma morte mudava cinco sobreviventes. Uma misericórdia aparentemente inútil reaparecia vinte anos depois nas mãos de outra pessoa.

Cosmo passou a chamá-los de recorrentes.

Nos cálculos, escreveu outra palavra: *âncoras*.

Detestou o nome quase imediatamente. Âncoras sugeriam imobilidade, e aquelas pessoas eram tudo menos imóveis. O que persistia não era quem elas se tornavam, mas a capacidade de continuarem significativas umas para as outras quando quase todo o resto mudava.

Até então, observar uma possibilidade ainda era uma atividade relativamente segura. Imagens. Sons. Sequências. Algo próximo de olhar o mundo através de uma janela extraordinariamente cara.

O problema é que janelas não davam informação suficiente.

Para entender por que uma escolha acontecia, Cosmo precisava conhecer o que vinha antes dela. Para distinguir coragem de desespero, precisava captar estado emocional. Para saber se uma frase mudara um acontecimento, precisava compreender o que ela significara para quem a ouviu. O Códice cresceu junto com essas perguntas.

Cosmo adicionou matrizes empáticas. Depois, memória contextual. Depois, uma técnica que Mael classificou numa carta como *uma forma excessivamente elegante de cometer uma estupidez*.

Em vez de apenas assistir à possibilidade, Cosmo passou a ancorar a observação numa versão possível de si mesmo.

Ele continuava na torre. Seu corpo não desaparecia. Horas ainda passavam em Caldris. Iria podia tocar seu ombro e interromper a sessão. Nada daquilo mudava.

Mas, enquanto a matriz permanecia aberta, a distinção entre observar e recordar se tornava perigosamente fina.

Cosmo não via uma fogueira: lembrava do calor dela contra as mãos de uma vida que não vivera. Não ouvia apenas uma discussão: lembrava por que estava irritado antes da primeira palavra. Sabia o peso de uma caminhada, a piada que alguém repetia quando ficava nervoso, o silêncio específico que vinha depois de uma perda. Uma possibilidade de seis anos não exigia seis anos na torre, mas chegava à mente com continuidade suficiente para que suas consequências emocionais fossem reais.

Quando a sessão terminava, duas autobiografias ocupavam o mesmo homem por alguns minutos.

Uma era dele.

A outra também parecia ser.

Na primeira experiência profunda, Cosmo abriu os olhos na sala superior e pediu água.

Iria entregou o copo.

Ele o segurou sem beber.

— Morreu alguém? — perguntou ela.

Cosmo demorou a responder.

— Sim.

— Alguém que existe aqui?

— Não sei se essa pergunta ajuda.

Iria se sentou diante dele.

— Então me dê uma melhor.

Cosmo olhou para o copo.

— Como se lamenta uma pessoa que está viva em um mundo, morta em outro e ainda nem me conhece neste?

Iria não tinha resposta pronta.

Foi uma das razões pelas quais Cosmo confiava nela.

Com o tempo, essas vidas emprestadas se acumularam. Ele conheceu aquelas pessoas em vitórias e em derrotas, no ridículo e no terrível. Descobriu o tipo de promessa que algumas versões faziam quando tinham medo. Viu outras serem consumidas por poder. Aprendeu quais feridas podiam torná-las gentis e quais podiam torná-las monstruosas. Em uma possibilidade, conhecia a motivação que levava alguém a salvar uma cidade; em outra, conhecia a mesma motivação torcida até justificar queimá-la.

Cosmo viu quem poderiam ser se escolhessem bem.

Viu quem poderiam ser se escolhessem mal.

E viu possibilidades suficientes para desconfiar profundamente da ideia de que qualquer uma dessas versões fosse a verdadeira.

Esse era o paradoxo mais íntimo do Códice: ele sabia coisas demais sobre pessoas que, em sua própria vida, ainda eram perfeitas desconhecidas.

Às vezes, ao fim de uma observação, Cosmo mencionava uma lembrança no jantar antes de perceber que Iria não estivera nela.

— Você lembra daquela ponte em que...

Parava.

Iria esperava.

— Não — dizia ele. — Claro que não lembra.

— Eu gosto especialmente quando você descobre isso depois de me fazer uma pergunta muito específica.

— Foram cinco anos.

— Foram seis horas.

— Para você.

Iria perdia o sorriso nessas ocasiões.

No terceiro ano, apareceu outro padrão que Cosmo tentou ignorar por mais tempo do que devia.

Cosmo demorou mais para catalogá-la. Em parte porque não tinha importância evidente para ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧. Em parte porque, quando percebeu, preferiu conferir os números antes de admitir em voz alta.

Em muitas das vidas nas quais viajava com o grupo por tempo suficiente, Cosmo acabava se envolvendo com uma das integrantes.

Não acontecia em todas as vidas — e Cosmo fez questão de registrar isso.

Em algumas possibilidades os dois eram apenas amigos. Em outras mal se toleravam. Houve uma em que ficaram em lados opostos de uma decisão que nenhum dos dois perdoou. Houve vidas em que jamais existiu qualquer coisa entre eles e vidas em que um deles morreu antes que pudesse existir.

Mas a recorrência estava ali. Frequente demais para desaparecer como ruído.

Iria encontrou o conjunto de registros aberto na mesa.

— O que é isso?

Cosmo não tirou os olhos de uma coluna de números.

— Uma correlação sem relevância operacional.

Iria puxou uma das folhas.

— Essa frase significa que você está constrangido.

— Significa que não afeta a pergunta principal.

Ela leu. Depois leu a página seguinte. Na terceira, olhou para Cosmo. Na quarta, começou a sorrir.

— Não.

— Iria.

— Você está brincando comigo.

— Estatisticamente, seria uma quantidade de trabalho absurda para uma piada.

Iria soltou uma risada curta e genuína.

— Essa até para mim foi novidade.

Cosmo passou a mão pelo rosto.

— Eu não a conheço.

— Tecnicamente, parece que conhece um número embaraçoso de versões dela.

— Exatamente. Esse é o problema.

Iria se sentou no canto da mesa, ainda divertindo-se.

— E como é?

— Quem?

— Ela.

Cosmo ia responder. Parou antes da primeira característica.

Olhou para os registros.

— Essa pergunta não tem uma resposta honesta.

O sorriso de Iria diminuiu, não por decepção, mas por atenção.

Cosmo continuou:

— Eu poderia te dizer como ela foi numa página. Ou em dez. Poderia contar o que amava, o que temia, as coisas terríveis que fez em algumas vidas e as extraordinárias que fez em outras. Poderia descrever quem eu fui ao lado dela. Nada disso me dá o direito de decidir quem ela é antes de conhecê-la.

— E se, um dia, conhecer?

— Então ela terá a desvantagem de encontrar um estranho com lembranças de uma relação que nunca teve.

— E você terá a desvantagem de sentir falta de coisas que nunca aconteceram.

Cosmo ficou quieto.

Iria percebeu que acertara.

— Isso é cruel — disse ela, agora sem riso.

— O Códice não foi construído para ser gentil.

— Não estou falando do Códice.

Ele a encarou.

Iria devolveu a folha.

— Estou falando de encontrar alguém e precisar lembrar que ela não te deve continuidade.

Cosmo guardou aquela frase.

Ela acabaria no diário.

A repetição daquele vínculo não se tornou profecia. Cosmo se recusou a tratá-la assim. Era uma possibilidade que insistia em retornar, não uma promessa, e muito menos uma reivindicação sobre uma mulher que naquela realidade ainda não sabia que ele existia.

O mesmo princípio valia para todos os outros.

Quanto mais os conhecia nas páginas, menos deveria presumir sobre quem encontraria fora delas.

Iria percebeu o perigo antes que Cosmo estivesse disposto a dar nome a ele.

— Se você encontrar qualquer um deles um dia, não diga *eu conheço você*.

— Tecnicamente, eu conheceria várias versões.

— Exatamente. Você vai olhar para uma pessoa real e correr o risco de responder ao que lembra, em vez de responder a quem está na sua frente.

— Ainda existe informação válida. Padrões, reações, pontos de ruptura.

— Claro que existe. É por isso que será tentador.

Cosmo fechou o índice.

— Você acha que eu usaria um segredo que alguém nunca me contou para manipulá-lo?

Iria sustentou o olhar dele por tempo suficiente para que a pergunta mudasse de peso.

— Acho que você salvaria alguém contra a vontade dela se tivesse certeza suficiente de que era necessário.

— Não é a mesma coisa.

— Eu sei.

— Então por que respondeu assim?

— Porque foi a pergunta que você evitou fazer.

Cosmo não gostou da resposta.

Guardou-a mesmo assim.

Os recorrentes trouxeram algo que nenhuma das primeiras centenas de páginas produzira: convergência. Em muitas das possibilidades em que Cosmo chegava mais perto de ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧, parte daquele grupo surgia em algum momento da história. Eles não eram a solução. Cosmo confirmou isso com cuidado. Havia futuros em que todos estavam presentes e ele ainda falhava.

Mas eram uma estrutura que continuava reaparecendo quando quase todo o resto mudava.

Pela primeira vez, Cosmo tinha pontos de referência num mapa que se recusava a ficar parado.

E tinha, contra o próprio bom senso, saudade de pessoas que nunca conhecera.
`;

const chapterSeven = String.raw`
### Capítulo VII — 1.127

A página 1.127 começou como todas as outras.

Cosmo acordou antes do sol. Iria já estava na sala superior, sentada junto à janela com um livro aberto que não lia havia vários minutos. Os doze recipientes de vidro continham as quantidades corretas de reagente. Os sete espelhos estavam alinhados. O Códice aguardava no suporte de carvalho.

— Você dormiu? — perguntou Iria.

— Cinco horas.

— Consecutivas?

— Isso não estava na pergunta.

— Então não.

Cosmo sorriu e começou a calibração.

A possibilidade daquele dia não parecia especial. Ele alterara um encontro em três horas numa estrada que jamais percorrera naquela vida e mantivera o restante das condições tão próximo quanto possível da página anterior. O objetivo continuava o mesmo. O teste continuava o mesmo. Havia realizado versões mais agressivas centenas de vezes.

Os anéis da torre começaram a girar.

Luz percorreu os canais de prata. Os espelhos escureceram. A chama central se inclinou para norte. No livro, a numeração surgiu primeiro.

POSSIBILIDADE 1127.

OBSERVADOR: COSMO DEWITTE.

CONSTANTES: 17.

Depois, nada.

Cosmo esperou.

Uma gota de cor surgiu no centro da folha.

Primeiro pareceu azul-cobalto. Então a borda tornou-se violeta sem que o centro deixasse de ser azul. Um veio cor de vinho atravessou os dois; dourado apareceu não sobre eles, mas entre eles, como se ocupasse uma profundidade que o papel não possuía. Havia ainda uma tonalidade esverdeada, escura e mineral, que Cosmo conseguia perceber mas não nomear com precisão.

Não era tinta.

As cores se moviam abaixo das fibras, encontravam-se sem se misturar e se afastavam deixando filamentos finíssimos, como correntes vistas de uma altura impossível. Onde deveriam existir frases, a mancha formava novas bordas. Onde Cosmo procurava imagens, a cor respondia com outra cor.

Em poucos segundos, toda a área destinada ao registro estava tomada.

Os espelhos não mostraram ruído, resistência ou interferência. Apenas escureceram até não refletirem nem a própria sala.

Cosmo interrompeu a matriz.

— Outra vez — disse.

Iria não se moveu.

— Primeiro verifique o conjunto.

— Eu ia verificar o conjunto.

— Você já colocou a mão no reagente novo.

Cosmo olhou para a própria mão.

— Observação válida.

Ele verificou tudo.

Repetiu.

As cores voltaram, diferentes na forma e idênticas no efeito.

Cosmo trocou a folha, substituiu dois reagentes e refez o alinhamento. O violeta surgiu do canto. O cobalto veio depois. Um ouro opaco correu pela margem como uma rachadura de luz.

Nenhuma história.

Desmontou um dos suportes de espelho, mediu o ângulo com o instrumento que Orren fabricara décadas antes e recalibrou tudo.

Na quinta tentativa, Iria sentou-se no chão.

— Agora você está sorrindo.

Cosmo percebeu que era verdade.

— Eu vi mil cento e vinte e seis formas de falhar.

— Isto também pode ser falha.

— Pode.

— Pode ser defeito do instrumento.

— Testamos.

— Pode ser interferência que você ainda não conhece.

— Também pode.

Iria cruzou os braços.

— Então por que está com essa cara?

Cosmo olhou para a folha impossível.

— Porque esta é a primeira vez que eu não consigo provar que dá errado.

Iria ficou em silêncio.

A frase não era triunfo. Cosmo sabia disso. A incapacidade de observar um fracasso não era evidência de sucesso. Se qualquer aluno seu cometesse esse salto, ele o faria repetir o curso. Mas havia uma diferença importante entre acreditar que aquela possibilidade funcionaria e reconhecer que, depois de três anos, ela era a primeira a escapar completamente da estrutura que classificara todas as demais.

Ele não acreditava nela.

Ainda não conseguia descartá-la.

Era o bastante para continuar.

Durante semanas, Cosmo tentou descobrir o que exatamente o Códice não conseguia fazer. A possibilidade existia: a matriz alcançava alguma coisa, consumia energia e estabilizava o vínculo. Só não trazia informação de volta. Nenhuma imagem. Nenhum acontecimento. Nenhuma data. Nenhuma morte. Nenhuma resposta à pergunta sobre ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.

Não era um futuro vazio.

Era um futuro que, daquela posição, não podia ser descrito.

Iria tornou-se mais cautelosa à medida que Cosmo se tornava mais interessado.

— Quero que você responda sem metáfora — disse ela certa noite. — Por que isto é uma descoberta e não um aviso?

Cosmo caminhou até a janela. Caldris brilhava abaixo, pequena e ordinária. A primeira resposta que lhe ocorreu era elegante. Ele não a usou.

— Porque um aviso ainda é informação. A página não diz para eu parar. Não diz para prosseguir. Não ameaça, não promete. O Códice só prova duas coisas: há uma possibilidade e eu não consigo observá-la daqui. Qualquer significado além disso sou eu inventando.

— Melhor.

— Você continua achando uma péssima ideia.

— Continuo.

— Ótimo.

Iria quase sorriu.

— Isso foi esperança?

— Controle de qualidade.

Desta vez ela riu.

Cosmo voltou à mesa.

— Se eu conseguir entrar, posso descobrir vivendo o que não consigo observar daqui.

— E, se entrar, você deixa de ser observador externo.

— Exatamente.

— O que significa que não haverá Códice para dizer se ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧ continua possível.

Cosmo passou um dedo pela margem da folha sem tocar as cores.

— Pela primeira vez, vou ter de descobrir depois.
`;

const chapterTen = String.raw`
### Capítulo X — A travessia

Cosmo ativou o mecanismo às sete e treze da manhã.

O primeiro anel alinhou Caldris. O segundo encontrou as assinaturas recorrentes. O terceiro procurou a relação que não possuía coordenada própria. Os sete espelhos voltaram-se para dentro e, pela primeira vez, refletiram uns aos outros sem produzir imagem.

O portal não nasceu como uma porta.

Nasceu como uma falha na geometria.

Uma linha finíssima apareceu no ar dentro dos anéis. Não era reta o bastante para ser desenho nem irregular o bastante para ser rachadura. O dourado dos círculos rituais inclinou-se em direção a ela. Então a linha se curvou sobre si mesma e começou a ganhar profundidade. Vieram as mesmas cores da página 1.127: cobalto profundo, violeta, vinho escuro, um verde mineral e veios de ouro opaco. Elas não se empilhavam em bordas. Corriam juntas, em camadas líquidas, contornando um centro que parecia puxar a própria ideia de distância para dentro.

Quando o vórtice terminou de se abrir, não havia paisagem do outro lado. Os olhos de Cosmo procuraram um chão, um horizonte, qualquer ponto que permitisse medir distância. Não encontraram. As cores corriam ao redor de um centro que não parecia escuro; parecia simplesmente não pertencer à sala, como se a abertura levasse a um lugar para o qual perspectiva e direção ainda não servissem.

Cosmo verificou o diário na bolsa.

Abriu na última seção e releu por hábito a frase que o levara até ali.

*Você construiu o Códice porque ⟦⟁⌁⟡ ⋮ ⊘⧖∵⟧.*

Ele conhecia cada palavra.

Fechou o livro.

Olhou para Iria.

Então começou a desmontar, um a um, os encantamentos que sustentavam seu poder.

Os primeiros encantamentos a desaparecer foram pequenos. Proteções permanentes que usara durante tantos anos que já pareciam parte do corpo deixaram de existir. Depois vieram atalhos mentais, estruturas de adivinhação, relações que lhe permitiam sustentar várias camadas de magia sem recitar uma palavra.

Cosmo reconhecia cada estrutura no instante em que a perdia. Sabia o nome do feitiço, lembrava de tê-lo usado centenas de vezes e, ainda assim, percebia que já não conseguiria erguê-lo de novo.

Os círculos da torre ficaram mais luminosos à medida que absorviam o que a passagem não carregaria. O vórtice ganhou altura suficiente para uma pessoa. As faixas de cor continuavam a se dobrar em torno do centro, lentas na aparência, embora os instrumentos tremessem como se a torre estivesse suportando uma tempestade.

Por um instante, as assinaturas recorrentes responderam juntas.

E as vidas emprestadas voltaram.

Cosmo lembrou uma fogueira sob chuva. Uma discussão que terminara em riso em uma possibilidade e em silêncio noutra. Uma ponte na qual perdera alguém. Uma mão que o puxara de volta quando fora ele quem quase morrera. Lembrou o grupo caminhando à frente dele em estradas diferentes, sob céus diferentes, sendo heróis em algumas vidas, desastres em outras e, na maioria, simplesmente pessoas tentando fazer escolhas com informação insuficiente.

Por um segundo breve demais, veio também a lembrança de uma das integrantes virando o rosto para ele com uma intimidade que aquela mulher, se existisse do outro lado, talvez jamais tivesse.

Cosmo não tentou segurá-la.

Nenhuma daquelas lembranças era instrução.

Todas eram possíveis.

No limite do círculo, Iria continuava ali.

Cosmo sorriu para ela.

E atravessou.
`;

let manuscript = LEGACY_MANUSCRIPT;
manuscript = replaceChapter(manuscript, "Capítulo III — A estrada que ele não tomou", chapterThree);
manuscript = replaceChapter(manuscript, "Capítulo V — Um livro do tamanho de uma torre", chapterFive);
manuscript = replaceChapter(manuscript, "Capítulo VI — Os recorrentes", chapterSix);
manuscript = replaceChapter(manuscript, "Capítulo VII — 1.127", chapterSeven);
manuscript = replaceChapter(manuscript, "Capítulo X — A travessia", chapterTen);
manuscript = manuscript
  .replaceAll("a página azul", "a página impossível")
  .replaceAll("A página 1.127 permanecia aberta e azul.", "A página 1.127 permanecia aberta, suas cores impossíveis movendo-se devagar sob as fibras.")
  .replaceAll(
    "Na primeira aula prática de Cosmo, uma bacia de scrying rachou e o nariz do garoto começou a sangrar.",
    "Na primeira aula prática de Cosmo, ele tentou sustentar uma visão por mais tempo do que conseguia. A água da bacia de vidência se ergueu de uma vez, o recipiente rachou de lado a lado e uma pressão aguda tomou-lhe a testa. Quando a magia cedeu, sangue escorria de seu nariz.",
  )
  .replaceAll("— Limpe — disse Mael.", "— Cuide do nariz primeiro — disse Mael.")
  .replaceAll("— Eu disse para interromper se houvesse dor que você não compreendesse. Por que está sangrando?", "— Eu disse para interromper se houvesse dor que você não compreendesse. O que aconteceu?")
  .replaceAll("— Ótimo. Você entendeu o sangue. Agora descubra a bacia.", "— Ótimo. Isso explica o sangue. Agora me explique por que a bacia rachou.")
  .replaceAll("— Ela quebrou.", "— A sobrecarga devia ter voltado pelo vínculo. Não devia ter chegado ao recipiente.")
  .replaceAll("— Essa é a parte que você ainda não entendeu.", "— Agora temos uma pergunta útil.")
  .replaceAll("— A matriz ficou instável, a carga retornou pelo vínculo simpático e aumentou a pressão nos vasos da face.", "— A matriz ficou instável. A carga voltou pelo vínculo da visão e aumentou a pressão no meu rosto.")
  .replaceAll(
    "— Não. Depois que acontecer, ela prova que sua descrição correspondeu ao acontecimento. Você pulou da correspondência para a necessidade sem pagar a ponte.",
    "— Não. Depois que acontecer, ela prova apenas que sua visão correspondeu ao que aconteceu. Isso não demonstra que outro resultado era impossível.",
  )
  .replaceAll("— Então uma previsão correta não significa nada?", "— Então acertar a previsão não prova que ela era inevitável?")
  .replaceAll(
    "— Significa muito. Esse é o perigo. Informação útil seduz você a tratá-la como ordem. Você quer que uma visão seja uma sentença porque sentenças aliviam o condenado da responsabilidade de escolher.",
    "— Exato. Uma previsão pode ser valiosa e ainda não ser uma sentença. O perigo começa quando você confunde informação com ordem e passa a agir como se já não houvesse escolha.",
  )
  .replaceAll("Era uma sombra matemática.", "A deformação era pequena, mas mensurável.")
  .replaceAll("Cosmo passou meses triangulando sombras.", "Era pouco, mas era algo que ele podia comparar.")
  .replaceAll(
    "No centro, a página impossível não seria mapa, mas ausência exata: o ponto para onde todas as relações apontavam sem conseguir descrever o interior.",
    "No centro, a página impossível serviria como referência negativa: todos os cálculos terminavam ali, embora nenhum deles conseguisse dizer o que havia depois.",
  )
  .replaceAll(
    "Grande parte de seu poder já não existia separada da maneira como aprendera a perceber possibilidades. Durante anos, sua mente mágica reorganizara hábitos, estruturas e atalhos ao redor da arquitetura do Códice. Era por isso que conseguia realizar sozinho tarefas que exigiriam vários adivinhos. Potência e especialização haviam se tornado a mesma coisa.",
    "Cosmo havia passado anos moldando seus feitiços ao Códice. As técnicas mais poderosas que dominava dependiam daqueles anéis, daqueles vínculos e, sobretudo, da maneira como aprendera a enxergar futuros possíveis. Era por isso que conseguia realizar sozinho tarefas que exigiriam vários adivinhos. Também era por isso que atravessar seria um problema.",
  )
  .replaceAll(
    "— Você escreveu quase todo o seu poder na linguagem de futuros observáveis. Essa possibilidade é definida justamente pelo que sua estrutura não consegue observar. Não é que você seja poderoso demais para atravessar. É que suas capacidades mais avançadas dependem de uma arquitetura que a passagem não sabe carregar.",
    "— Seus feitiços mais poderosos dependem justamente do modo como o Códice lê futuros observáveis. A 1.127 é o primeiro lugar em que esse modo de leitura falha. Se a passagem não consegue levar essa estrutura, ela também não consegue levar boa parte do que você aprendeu a fazer.",
  )
  .replaceAll("— Seus testes preservam memória autobiográfica e conhecimento declarativo. Você vai saber quem é. Vai lembrar dos feitiços. Só não terá a arquitetura necessária para executá-los.", "— Seus testes indicam que as lembranças ficam intactas. Você vai saber quem é. Vai lembrar dos feitiços. Só não terá mais a estrutura necessária para executá-los.")
  .replaceAll(
    "Nos primeiros meses de trabalho intenso, Cosmo descobrira um problema que nenhum instrumento podia corrigir: ele próprio. Um observador solitário era uma variável sem fiscalização. Podia formular uma hipótese, executar um teste, reinterpretar o resultado e convencer a si mesmo de que a nova interpretação era a intenção original. Encontrou a prova ao reler quarenta dias de registros e perceber que, pouco a pouco, redefinira três termos para preservar uma hipótese de que gostava.",
    "Nos primeiros meses de trabalho intenso, Cosmo descobrira um problema que nenhum instrumento podia corrigir: ele próprio. Trabalhando sozinho, podia formular uma hipótese, executar um teste e reinterpretar o resultado até esquecer onde terminava a evidência e começava a vontade de estar certo. Só percebeu o quanto fazia isso quando releu quarenta dias de registros e encontrou três definições que havia alterado, pouco a pouco, para salvar uma hipótese de que gostava.",
  )
  .replaceAll(
    "Tentou criar protocolos de oposição. Sorteava premissas contrárias, escrevia perguntas para abrir dias depois, obrigava-se a defender a hipótese inversa. Nada bastava. Uma objeção preparada pela própria mente continuava pertencendo à mente que deveria ser surpreendida.",
    "Tentou criar maneiras de contrariar a si mesmo. Sorteava hipóteses opostas, escrevia perguntas para abrir dias depois, obrigava-se a defender a conclusão inversa. Nada bastava. No fim, ainda sabia de onde cada objeção tinha vindo. Continuava discutindo consigo mesmo.",
  )
  .replaceAll("Iria começara como aquilo que os projetos chamavam de matriz dialética.", "Nos projetos, Iria aparecia sob um nome impessoal: matriz dialética.")
  .replaceAll(
    "Sua natureza nunca foi segredo para Cosmo. Ele sabia onde ficava o núcleo que sustentava suas memórias, conhecia cada selo responsável por manter a forma e poderia, em teoria, desligá-la. O que não soube determinar foi em que momento compreender a fabricação de uma mente deixou de parecer razão suficiente para tratá-la como objeto.",
    "Sua natureza nunca foi segredo para Cosmo. Ele sabia onde ficava o núcleo que sustentava suas memórias, conhecia cada selo responsável por manter sua forma e poderia, em teoria, desligá-la. O que não sabia dizer era em que momento deixara de pensar nela como uma coisa que havia fabricado. Conhecer cada peça explicava como Iria começara; já não parecia suficiente para explicar quem ela era.",
  )
  .replaceAll("Em algum ponto impossível de localizar, ela deixara de representar qualquer coisa.", "Em algum ponto impossível de localizar, Cosmo deixara de olhar para ela e enxergar uma função.")
  .replaceAll("Iria respirou como uma pessoa que não precisava respirar.", "Iria inspirou devagar. Era um hábito, não uma necessidade, e Cosmo percebeu que ela só fazia aquilo quando precisava de tempo.")
  .replaceAll(
    "Riu sozinho, ajoelhado na lama, porque havia alguma coisa obscenamente engraçada em um homem que na véspera dobrava cadeias de possibilidade precisar se concentrar para iluminar a própria mão.",
    "Riu sozinho, ajoelhado na lama, porque havia alguma coisa obscenamente engraçada em um homem que na véspera sustentava o Códice sozinho agora precisar se concentrar para iluminar a própria mão.",
  )
  .replaceAll(
    "Tentou reconstruir pelo contexto. O objetivo podia ser inferido pela gramática, talvez pelas frases seguintes. Encontrou o mesmo problema: sempre que uma conclusão se aproximava da informação ausente, o raciocínio deixava de ter objeto. Não era como esquecer um nome e sentir a palavra na ponta da língua. Era como chegar a uma porta e descobrir que o conceito de maçaneta havia sido removido.",
    "Tentou reconstruir o sentido pelas frases ao redor. Se sabia o que fizera antes e o que pretendia fazer depois, talvez conseguisse preencher o espaço entre as duas coisas. Não conseguiu. Toda linha de raciocínio chegava ao mesmo ponto e parava. Ele sabia que ali deveria existir uma resposta; o que faltava era justamente a parte necessária para formulá-la.",
  )
  .replaceAll("Cinco: ele próprio julgara aquele registro importante o bastante para colocá-lo como redundância.", "Cinco: antes de atravessar, ele próprio julgara aquela informação importante o bastante para registrá-la também no diário.")
  .replaceAll("Se alguma coisa perturbasse sua memória durante a passagem, papel e tinta serviriam como redundância.", "Se alguma coisa perturbasse sua memória durante a passagem, papel e tinta guardariam uma segunda cópia do que ele não podia se dar ao luxo de esquecer.")
  .replaceAll("A distribuição do peso antes de mudar de direção, a maneira de observar a estrada, uma pequena expressão diante de um ruído distante.", "O jeito de apoiar o peso antes de mudar de direção, a maneira de observar a estrada, uma pequena expressão diante de um ruído distante.")
  .replaceAll("Cosmo sentiu alguma coisa se contrair sob o esterno. Não era dor. Era a sensação de uma equação se fechando.", "Cosmo sentiu um puxão seco sob o esterno e reconheceu a assinatura da magia antes mesmo de entender o que tinha acontecido.")
  .replaceAll("uma missão cujo propósito havia sido arrancado de sua compreensão", "uma missão cujo motivo já não conseguia lembrar");

export const MANUSCRIPT = manuscript;

export const MASTER_NOTE = `${LEGACY_MASTER_NOTE}

Os recorrentes não são pessoas que Cosmo conheceu antes da torre. Eles devem corresponder aos personagens reais do grupo apenas quando esses personagens existirem na campanha. Cosmo observou — e, graças à arquitetura mnemônica do Códice, quase viveu — muitas versões possíveis deles. Por isso pode ter lembranças íntimas, conhecer motivações que algumas versões tiveram, saber como alguém poderia agir no melhor ou no pior de si e reconhecer padrões que parecem absurdamente familiares. Nada disso torna uma possibilidade anterior uma verdade sobre a pessoa que está diante dele agora.

Existe também uma recorrência afetiva: em muitas possibilidades Cosmo se relacionou romanticamente com uma das integrantes do grupo. A identidade concreta dessa integrante fica para o mestre encaixar, se e quando fizer sentido com os personagens reais. Isso é memória de possibilidades, não destino, direito adquirido ou obrigação para a personagem atual. O próprio Cosmo entende que, se a encontrar, terá de conhecê-la outra vez como se fosse a primeira — mesmo carregando saudade de vidas que ela nunca viveu.

A Cláusula de Continuidade protege as âncoras apenas quando mais de um desfecho já é plausível; não garante invulnerabilidade. Ela existe também como falha moral de Cosmo: ele se importa genuinamente com aquelas pessoas, mas é capaz de decidir por elas quando acredita que o custo de não agir é alto demais.`;
