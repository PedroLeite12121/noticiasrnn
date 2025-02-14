let userChoice = localStorage.getItem('userChoice'); 

let title = document.getElementById("title")
let text = document.getElementById("text")
let date = document.getElementById("date")
let image = document.getElementById("image")

switch(userChoice) {
    case "marco":
        title.innerText = 'Estátua de Marco Aurélio a Cavalo encontra seu novo lar'
        image.src = '../../imagem/marco.png'
        date.innerText = '11/11/175'
        text.innerHTML = ' Em um dia histórico para a Cidade Eterna, a magnífica escultura equestre do imperador Marco Aurélio foi finalmente instalada no novo Museu Imperial, onde poderá ser admirada por todos os cidadãos romanos e visitantes ilustres.  A obra, considerada uma obra-prima da arte romana, foi esculpida em bronze por um artista desconhecido e retrata o imperador em sua pose mais emblemática: montado em um cavalo, com uma expressão serena e um manto que esvoaça ao vento. A escultura é um símbolo do poder e da majestade do Império Romano, e sua instalação no museu marca um momento importante na história da arte e da cultura romana. <br><br>  A escultura foi encomendada pelo Senado Romano como um presente para o imperador Marco Aurélio em homenagem à sua vitória sobre os Marcomanos. A obra foi originalmente colocada no Fórum Romano, onde era vista por milhares de pessoas todos os dias. <br><br> Com o passar do tempo, a escultura começou a se deteriorar devido ao clima e à poluição. Para garantir sua preservação, as autoridades romanas decidiram transferi-la para o novo Museu Imperial, onde ela poderá ser apreciada em melhores condições.'
        break;

    case "laocoonte":
        title.innerText = 'Escultura retrata o castigo de Laocoonte e seus filhos'
        image.src = '../../imagem/laocoonte.png'
        date.innerText = '21/01/40'
        text.innerHTML = 'Em um átrio grandioso adornado com colunas de mármore e mosaicos vibrantes, uma obra de arte de tirar o fôlego acaba de ser exposta, causando espanto e admiração entre os cidadãos romanos. A escultura colossal, intitulada "Laocoonte e Seus Filhos", é um verdadeiro espetáculo de maestria artística, retratando com detalhes impressionantes o sofrimento de um sacerdote troiano e seus filhos enquanto são devorados por serpentes marinhas enviadas pelos deuses. <br><br> Esculpida em mármore branco imaculado, a obra apresenta figuras em tamanho real capturadas em um momento de agonia extrema. Laocoonte, com o corpo contorcido em dor, tenta em vão se livrar das serpentes que o prendem, enquanto seus filhos, cheios de terror, lutam contra o destino cruel. A expressividade dos rostos, a tensão dos músculos e a textura das escamas das serpentes criam um realismo avassalador, como se a cena estivesse se desenrolando diante dos olhos dos espectadores.'
        break;

    case "constantino":
        title.innerText = 'Estátua "Colosso de Constantino" é revelada ao público'
        image.src = '../../imagem/constantino.png'
        date.innerText = '15/12/315'
        text.innerHTML = 'Hoje, em uma cerimônia solene no coração do Fórum Romano, o Colosso de Constantino foi revelado ao povo de Roma, marcando um momento histórico de orgulho e admiração pela grandiosidade imperial.<br><br>O Colosso de Constantino não apenas comemora as vitórias e conquistas do imperador, incluindo sua notável vitória sobre Maxêncio na Batalha da Ponte Mílvia em 312 d.C., mas também representa a continuidade e estabilidade do império sob seu governo. "Este monumento é um testemunho da liderança e visão de Constantino," proclamou o Prefeito durante seu discurso.<br><br>Os detalhes da estátua são verdadeiramente impressionantes, com cada elemento meticulosamente esculpido em mármore branco. "Os escultores romanos demonstraram sua habilidade excepcional na criação desta obra-prima," comentou Júlio Maximo, um dos artistas envolvidos no projeto.<br><br>Os cidadãos de Roma reuniram-se em grande número para testemunhar a inauguração do Colosso, que imediatamente se tornou um ponto focal de admiração e respeito. "É um momento de grandeza que todos os romanos devem celebrar," disse Túlia Antonia, uma moradora local emocionada.'
        break;

    case "catao":
        title.innerText = 'Busto de Catão Uticense adorna o Palácio Imperial'
        image.src = '../../imagem/catao.png'
        date.innerText = '01/02/46 A.C'
        text.innerHTML = 'Em um dia memorável para a República Romana, o busto do ilustre estadista Catão Uticense foi solenemente instalado no Palácio Imperial, em meio a grande pompa e circunstância. A cerimônia, presidida pelo próprio Imperador Júlio César, contou com a presença de diversos senadores, patrícios e cidadãos romanos, todos ávidos por testemunhar a homenagem a um dos maiores heróis da República.  <br><br>  O busto de Catão, esculpido em mármore branco imaculado, captura com maestria a expressão austera e inquebrantável do célebre romano. Seus olhos penetrantes parecem fitar o futuro, enquanto sua boca firme e cerrada transmite a força de suas convicções. A obra, considerada uma verdadeira obra-prima da arte romana, serve como um lembrete constante das virtudes de Catão: sua incorruptível honestidade, sua devoção à República e sua bravura inabalável diante da tirania.  <br><br>  Apesar de ter sido um ferrenho opositor de Júlio César, Catão sempre foi admirado pelo Imperador por sua inabalável lealdade aos seus princípios e por sua recusa em ceder à corrupção e à ambição. Ao homenagear Catão com um busto em seu próprio palácio, César demonstra respeito por seu antigo adversário e reconhece a importância de seus valores para a República Romana.'
        break;

    case "busto":
        title.innerText = 'Exposição de bustos em Roma'
        image.src = '../../imagem/busto.png'
        date.innerText = '14/09/120'
        text.innerHTML = 'Uma nova coleção de bustos de mármore foi revelada hoje no Fórum Romano, enriquecendo ainda mais o panorama cultural e histórico da cidade. Estes bustos são uma homenagem aos líderes políticos, filósofos e pensadores que moldaram o curso da história romana. Os bustos foram exibidos em uma cerimônia especial, presidida pelo Cônsul Marcus Valerius, que destacou a importância dessas representações para preservar a memória dos grandes homens de Roma. "Cada busto não é apenas uma obra de arte, mas um testemunho da sabedoria e do legado deixado por esses indivíduos," declarou o Cônsul em seu discurso.<br><br>Os escultores romanos demonstraram sua habilidade excepcional na criação desses retratos realistas em mármore. Cada busto captura não apenas a semelhança física dos retratados, mas também suas expressões e características únicas. "Os bustos são uma janela para o passado, permitindo-nos conectar com figuras proeminentes da nossa história," comentou Lúcio Aelius, um historiador local.<br><br>Para os cidadãos romanos, os bustos são símbolos de identidade e orgulho cívico. "Ver os rostos dos nossos líderes nos lembra dos ideais pelos quais Roma se esforça," disse Quintus Marcellus, um senador respeitado. "É uma honra estar entre os que são lembrados desta maneira."'
        break;

    case "augusto":
        title.innerText = 'Augusto de Prima Porta: Uma obra-prima no coração de Roma'
        image.src = '../../imagem/augusto.png'
        date.innerText = '29/11/20 A.C'
        text.innerHTML = 'As ruas de Roma fervilham com a notícia: a estátua do imperador Augusto, Augusto de Prima Porta, acaba de ser instalada no Museu Imperial, e já se tornou a atração principal! Multidões se aglomeram para admirar a obra-prima, que captura a majestade e a sabedoria do nosso líder supremo.  <br><br>       Esculpida em mármore branco imaculado, a estátua retrata Augusto em toda sua glória. Ele veste a toga imperial, símbolo de seu poder e autoridade. Em sua mão direita erguida, segura um cetro, denotando sua liderança. Na esquerda, porta uma couraça finamente decorada, adornada com figuras mitológicas e cenas de suas vitórias. <br><br> Mas a verdadeira beleza de Augusto de Prima Porta reside na expressão de seu rosto. Seus olhos transmitem uma profunda sabedoria e benevolência, enquanto seus lábios curvam-se em um sorriso sereno. É como se o próprio imperador estivesse presente, observando seu povo com amor e compreensão.   <br><br>      A estátua de Augusto de Prima Porta não é apenas uma obra de arte, mas também um símbolo poderoso do Império Romano. Ela representa a força, a estabilidade e a prosperidade que Augusto trouxe ao nosso país. É um lembrete de que, sob sua liderança sábia, Roma alcançou o auge de sua glória.'
        break;

    case "vermelho":
        title.innerText = 'Popularização das artes em fundo vermelho'
        image.src = '../../imagem/vermelho.png'
        date.innerText = '23/02/40'
        text.innerHTML = 'Um novo capítulo na história da arte romana está sendo escrito com o advento das obras em fundos vermelhos, que têm conquistado os corações e mentes dos romanos. Nas paredes das villas dos patrícios mais influentes, assim como nos espaços públicos da cidade, mosaicos e afrescos meticulosamente executados destacam-se por suas cores vibrantes e intensas. O fundo vermelho não é apenas uma escolha estilística, mas uma afirmação de poder e paixão que ressoa profundamente na cultura romana.   <br><br>  Essas obras não se limitam à decoração; elas narram histórias épicas de conquistas militares, mitologia divina e o esplendor da vida cotidiana. Cenas de batalhas gloriosas e festividades extravagantes ganham vida com o contraste dramático proporcionado pelo fundo vermelho, evocando uma sensação de urgência e grandiosidade que captura a imaginação dos espectadores. Artistas habilidosos como Lúcio Varo e Cláudia Marcella estão na vanguarda deste movimento, elevando a arte romana a novas alturas com suas composições inspiradoras.  <br><br> Para o povo romano, estas obras não são apenas entretenimento visual, mas uma conexão profunda com suas raízes culturais e identidade nacional. Nas termas, onde os cidadãos se reúnem para relaxar e socializar, ou nos templos onde oferecem suas preces aos deuses, os mosaicos em fundo vermelho não passam despercebidos. Eles são símbolos de orgulho e uma demonstração tangível da riqueza e sofisticação que definem a grandeza de Roma.        '
        break;

    case "trajano":
        title.innerText = 'Roma é introduzida a Coluna de Trajano'
        image.src = '../../imagem/trajano.png'
        date.innerText = '01/10/290 A.C.'
        text.innerHTML = ' Hoje, a cidade de Roma comemora com grande pompa a inauguração da Coluna de Trajano, um novo marco arquitetônico e artístico erguido no Fórum de Trajano. Este monumento colossal celebra as vitórias do imperador Trajano nas Guerras Dácias, capturando em detalhes vívidos as glórias militares que consolidaram o poder romano na região. A coluna, com impressionantes 35 metros de altura, é uma obra-prima que destaca a habilidade dos artesãos e a grandeza do império.<br><br>   A Coluna de Trajano é adornada com uma espiral contínua de baixos-relevos que narram as campanhas militares contra os Dácios, desde o planejamento estratégico até as batalhas ferozes e a construção de fortificações. Cada cena esculpida na pedra oferece uma visão detalhada das façanhas de Trajano e seus soldados, tornando-se uma valiosa fonte de informação histórica e um testemunho da engenhosidade artística romana. "Os relevos são de uma precisão extraordinária, capturando a essência do poder e da resiliência romanos", comentou o historiador Ápio Cláudio. <br><br>  No topo da coluna, uma estátua de bronze do imperador Trajano se ergue imponente, simbolizando sua liderança e proteção contínua sobre o império. O interior da coluna abriga uma escadaria em espiral que permite aos visitantes subir até o topo, onde podem apreciar uma vista panorâmica do Fórum e da cidade de Roma. Este design inovador não apenas celebra Trajano, mas também oferece uma experiência interativa, conectando fisicamente o povo romano à grandeza do imperador.    <br><br>A inauguração da Coluna de Trajano representa mais do que uma celebração das vitórias passadas; é um símbolo duradouro da ambição e da visão de Roma. Este monumento, que combina arte, história e engenharia, assegura que o legado de Trajano perdurará por gerações futuras. À medida que os romanos se reúnem para admirar esta nova maravilha, fica claro que a Coluna de Trajano será um ponto focal de orgulho e identidade para a cidade eterna, inspirando tanto os contemporâneos quanto os descendentes a reconhecerem a glória e a resiliência do império romano. '
        break;

    case "pompeia":
        title.innerText = 'Tragédia em Pompeia: Cidade é Destruída por Lava Vulcânica'
        image.src = '../../imagem/vulcao.png'
        date.innerText = '26/08/79'
        text.innerHTML = 'Uma erupção catastrófica do Monte Vesúvio enterrou a cidade de Pompeia sob cinzas e rochas vulcânicas na última semana.    <br><br>No dia 24 de agosto, o vulcão expeliu uma nuvem gigantesca de cinzas, seguida por fluxos de lava que rapidamente cobriram a cidade e áreas próximas. Sobreviventes descrevem cenas apocalípticas de fumaça e tremores intensos.<br>   <br>   As autoridades romanas estão mobilizando operações de resgate, mas as esperanças são sombrias, com estimativas de milhares de mortos. O imperador Tito prometeu ajuda imediata. Pompeia, antes uma cidade vibrante, agora está congelada no tempo, coberta por metros de detritos.   <br>   <br>   Este desastre não apenas ceifou vidas, mas também preservou um instante trágico da história romana, oferecendo um vislumbre aterrorizante da força da natureza.  <br></br>'
        break;

    case "gladiador":
        title.innerText = 'Gladiador Desafia o Imperador em Ato de Coragem'
        image.src = '../../imagem/gladiador.png'
        date.innerText = '15/06/75'
        text.innerHTML = 'Um momento surpreendente ocorreu ontem no Coliseu quando o famoso gladiador Maximus desafiou o imperador durante os jogos.<br><br> Durante a cerimônia de premiação, em vez de aceitar a honra por ter derrotado todos os seus inimigos, Maximus confrontou o imperador, questionando sua coragem. Naquele momento Maximus gritou para que todos pudessem ouvir "Se és homem de verdade, porque você não deçe aqui pra me enfrentar ao invés de ficar olhando aí em cima no seu trono?" A multidão, ficou em choque e se dividiu entre a admiração pela bravura do gladiador e o medo do que o imperador poderia fazer.<br><br>Maximus foi preso imediatamente e levado sob forte escolta. Seu destino é incerto no momento, mas muitos temem punições severas. O imperador minimizou o incidente como um ato de loucura, em suas palavras "És um louco ou até mesmo um lunático! Ele achou que poderia me enfrentar..." A coragem de Maximus já ressoa como um símbolo de resistência, alguns acham que o imperador fez a coisa certa, mas a maioria, dizem que foi um ato de covardia ele não ter aceitado o duelo.<br><br>Maximus, de escravo a herói no coliseu, garantiu seu lugar na história ao desafiar o poder supremo de Roma, Maximus Seria uma lenda viva?'
        break;

    case "domus":
        title.innerText = 'Conheça as mais novas domus romanas'
        image.src = '../../imagem/domus.png'
        date.innerText = '18/03/55'
        text.innerHTML = 'Em um revival de luxo e sofisticação que ecoa os tempos áureos da Roma Antiga, os domus romanos estão emergindo como o epítome da moradia exclusiva para a elite moderna. Nestas espaçosas e imponentes residências, situadas nos bairros mais prestigiosos da cidade eterna, a arquitetura clássica se funde harmoniosamente com tecnologias de ponta e confortos contemporâneos.<br><br>  O renascimento dos domus não se limita apenas à estética. Cada residência é um testemunho vivo da história e cultura romanas, com átrios adornados por majestosos afrescos, pavimentos de mosaico que contam histórias de conquistas passadas, e colunas esculpidas que ecoam a grandiosidade do Império. Esses elementos não são apenas decorações, mas sim parte integrante de um estilo de vida que valoriza a beleza, a arte e o conforto.  <br><br>  Além da beleza arquitetônica, os domus oferecem um oásis de tranquilidade no coração da movimentada Roma contemporânea. Jardins internos repletos de plantas exóticas e fontes borbulhantes proporcionam um refúgio sereno para seus habitantes, enquanto salas de banho elaboradamente decoradas oferecem um luxuoso escape após um dia de negócios ou política na cidade.   <br><br>  Não apenas residências, mas verdadeiras fortalezas de segurança e privacidade, os domus modernos são equipados com as mais recentes inovações em tecnologia de segurança. Sistemas de monitoramento avançados, portões fortificados e até mesmo paredes que podem suportar os mais severos ataques garantem que os moradores desfrutem de paz de espírito em meio ao luxo.'
        break;

    case "basilica":
        title.innerText = 'Grande marco romano: Basílica de Majencio'
        image.src = '../../imagem/basilica.png'
        date.innerText = '18/03/55'
        text.innerHTML = 'Hoje, Roma celebra a grandiosa inauguração da Basílica de Majencio, uma estrutura monumental que redefine os padrões da arquitetura e engenharia romanas. Localizada no coração do Fórum Romano, esta nova basílica é um testemunho do poder e da visão do imperador Majencio, que encomendou sua construção para consolidar sua autoridade e proporcionar um novo centro para a vida pública da cidade. <br><br>A Basílica de Majencio, também conhecida como Basílica Nova, impressiona pela sua escala colossal e pelo uso inovador de técnicas de construção. Com aproximadamente 100 metros de comprimento e 65 metros de largura, a estrutura é dominada por três vastas naves separadas por colunas de mármore imponentes. O teto abobadado, sustentado por arcos de concreto, é uma maravilha da engenharia romana, demonstrando a habilidade dos arquitetos em criar espaços interiores amplos e sem precedentes. <br><br> Destinada a ser um centro vital para a administração pública e as atividades judiciais de Roma, a nave central da basílica, com seu teto abobadado e amplo espaço aberto, proporcionará um ambiente adequado para grandes assembleias e cerimônias. As naves laterais, menores, servirão como escritórios e salas de audiências, acomodando a burocracia crescente do império. A inauguração da Basílica de Majencio não é apenas um triunfo arquitetônico, mas também um símbolo do renascimento urbano de Roma sob o governo de Majencio, prometendo perpetuar a glória da cidade eterna por gerações futuras.'
        break;

    case "aqueduto":
        title.innerText = 'Roma celebra inauguração de novos aquedutos'
        image.src = '../../imagem/Aqueduto.png'
        date.innerText = '11/04/312 A.C.'
        text.innerHTML = 'Uma atmosfera de celebração e gratidão envolveu as ruas de Roma hoje, enquanto os cidadãos se reuniam para comemorar a conclusão do novo aqueduto que agora abastece a cidade com água fresca e limpa. <br><br> O aqueduto, um projeto ambicioso que durou vários anos, foi oficialmente inaugurado pelo Prefeito da Cidade, Lucius Aemilius, em uma cerimônia emocionante no fórum principal. "Este aqueduto não é apenas uma conquista da engenharia romana, mas um presente vital para todos os cidadãos de Roma," afirmou o prefeito em seu discurso de inauguração. <br><br> Com a conclusão deste aqueduto, que se estende por quilômetros a partir das fontes naturais nos arredores da cidade, os moradores de todas as classes sociais agora desfrutam de um suprimento regular de água. "É um alívio não precisar mais depender de poços e cisternas," comentou Gaius Flavius, um comerciante local. "A água agora flui diretamente para nossas casas e negócios."'
        break;

    case "arco":
        title.innerText = 'Novos arcos triunfais são criados em Roma'
        image.src = '../../imagem/arco.png'
        date.innerText = '15/10/114 A.C.'
        text.innerHTML = 'A cidade de Roma está testemunhando uma onda de construção de novos arcos triunfais, símbolos icônicos da grandeza e poder do Império. Estes monumentos majestosos, tradicionalmente erguidos para celebrar vitórias militares e homenagear generais vitoriosos, estão se multiplicando pelas vias principais da capital.<br><br> Os arcos triunfais não só enaltecem as conquistas militares, mas também desempenham um papel importante na vida pública. Muitos são decorados com relevos e inscrições que narram feitos heroicos e batalhas épicas, servindo como lembrança constante da glória romana. “Os novos arcos não apenas embelezam a cidade, mas também educam os cidadãos sobre a história e os valores de Roma”, comenta o arquiteto Marco Vitruvius. <br><br> A população de Roma tem recebido esses novos monumentos com grande entusiasmo. “Os arcos triunfais são uma fonte de orgulho para todos nós”, diz o comerciante Lucius Valerius. “Eles nos lembram da força e da grandeza do nosso império.” Cidadãos de todas as classes sociais apreciam a imponência e a beleza desses arcos, que se tornaram pontos de encontro populares e locais para celebrações públicas. <br><br> As autoridades romanas continuam a apoiar a construção de novos arcos, vendo neles uma forma de perpetuar a memória das conquistas romanas e de promover a coesão social. Com cada novo arco que se ergue, Roma reafirma sua posição como o centro do mundo civilizado, onde a história e a grandeza do Império são eternizadas em pedra e mármore.'
        break;

    case "aurea":
        title.innerText = 'Domus Aurea é edificado em Roma e Nero volta a acusar cristãos pelo incêndio'
        image.src = '../../imagem/aurea.png'
        date.innerText = '09/08/64'
        text.innerHTML = 'Após muito tempo de espera, a "Domus Aurea" finalmente teve sua obra concluída e foi inaugurada hoje no coração de roma, o imperador Nero, que acompanhou cada detalhe do projeto, discursou sobre a importãncia de um palácio imponente, dentre as suas falas, ele volta a acusar os perseguidos cristãos de roma de terem provocado o incêndio: <br><br> "Nosso magnífico império que havia queimado em chamas... que a propósito, foi causado por cristãos nojentos e invejosos! Todos sabem que isso é a mais pura verdade... e quem discordar, certamente é cristão escondido... e devem ser humilhados como o todo o resto desse povo" disse o imperador Nero.  <br><br>  A verdadeira causa e culpa do incêndio ainda é incerta, porém, a perseguição cristã pela culpa do ocorrido não parece não ter um fim próximo. <br><br> Abrangendo mais de 300 acres, a Domus Aurea inclui a residência do imperador, jardins, lagos artificiais e pavilhões. Seus interiores são adornados com frescos intrincados, pedras preciosas e folhas de ouro, criando uma atmosfera de luxo incomparável. A arquitetura da Domus Aurea é revolucionária, utilizando concreto para sustentar cúpulas expansivas e tetos abobadados. "Cada sala é uma obra-prima," diz o arquiteto Severus Spurius.'
        break;

    case "coliseu":
        title.innerText = 'Grande inauguração do coliseu'
        image.src = '../../imagem/coliseu.png'
        date.innerText = '04/07/80'
        text.innerHTML = ' Hoje, o Imperador Tito inaugurou oficialmente o Anfiteatro Flaviano, conhecido como Coliseu. Este monumental anfiteatro, situado no coração da cidade, representa a grandiosidade e a engenhosidade da arquitetura romana.<br><br>     A inauguração contou com uma série de festividades que durarão 100 dias, incluindo combates de gladiadores, caçadas e batalhas navais simuladas. "O Coliseu é um símbolo do poder e da glória de Roma," declarou o Imperador Tito. <br><br>   Com capacidade para mais de 50.000 espectadores, o Coliseu é uma proeza da engenharia romana. A arena elíptica e os sistemas de corredores e escadarias foram projetados para oferecer excelente visibilidade e acesso fácil.'
        break;

    case "marte":
        title.innerText = 'Construção do Templo de Marte Ultor é finalizada'
        image.src = '../../imagem/marte.png'
        date.innerText = '01/08/2 A.C.'
        text.innerHTML = 'A Cidade Eterna se encontra em estado de efervescência. O imperador Augusto acaba de inaugurar o Templo de Marte Ultor, um monumento grandioso dedicado ao deus da guerra, e a população romana se reúne em torno da obra para admirar sua beleza e imponência.<br><br>O templo, erguido no coração do Fórum de Augusto, se destaca por sua arquitetura majestosa. Uma colunata de mármore branco puro circunda o edifício, adornada com esculturas de deuses e heróis romanos. No interior, a estátua de Marte Ultor, esculpida em bronze dourado, domina a cena, transmitindo força e poder.Uma Obra de Arte que Simboliza a Grandeza de Roma <br><br> A construção do Templo de Marte Ultor representa mais do que um simples ato religioso. É um símbolo da grandeza de Roma e da glória do imperador Augusto. O templo foi erguido para celebrar a vitória de Augusto sobre os assassinos de Júlio César e a recuperação das águias romanas que haviam sido capturadas pelos partos.  <br><br>  O Templo de Marte Ultor se torna rapidamente um dos principais pontos turísticos de Roma. Cidadãos de todas as classes sociais se reúnem no local para orar ao deus da guerra, pedir proteção e agradecer pelas vitórias romanas. Artistas e poetas se inspiram na beleza do templo, criando obras que celebram sua grandiosidade.'
        break;

    case "templo":
        title.innerText = 'Criação de templos deixa locais confusos'
        image.src = '../../imagem/templo.png'
        date.innerText = '01/12/74'
        text.innerHTML = 'A construção de novos templos em Roma está gerando confusão entre os cidadãos. Muitos templos agora são dedicados a múltiplos deuses, rompendo com a tradição de um deus por templo. <br><br> Essa prática multifuncional, combinada com a variedade de estilos arquitetônicos, tem causado debates. "A mistura de elementos de diferentes épocas confunde nossa herança", diz o arquiteto Marco Vitruvius. "E dedicar um templo a vários deuses desvirtua seu propósito sagrado."  <br><br>  Alguns templos também estão sendo usados para reuniões públicas e eventos, o que aumenta a confusão sobre sua função original. "Precisamos de diretrizes claras para manter a integridade histórica e religiosa", afirma o edil Gaius Pompeius.  <br><br>  Os cidadãos de Roma enfrentam uma cidade em transformação, onde templos servem a múltiplos deuses e funções, tornando a paisagem urbana mais complexa e confusa.'
        break;

    default:
        console.log("Nenhuma notícia correspondente encontrada.");
}
