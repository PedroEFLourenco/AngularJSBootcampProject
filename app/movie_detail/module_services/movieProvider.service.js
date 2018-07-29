'use strict'

angular.module('movie_detail')
.service('movieProvider', MovieProvider);

function MovieProvider(){
    var selectedMovieIndex = 0;

  this.getSelectedMovie = function()
  {
    return this.movieList[this.selectedMovieIndex];
  }

  this.getSelectedMovieIndex= function()
  {
    return this.selectedMovieIndex;
  }

  this.setMovieIndex = function(int)
  {
    this.selectedMovieIndex = int;
  }

this.getMovieDB = function()
{
  return this.movieList
}



  this.movieList = [
          {
              nome: 'Rambo: First Blood',
              ano: '1982',
              plot: 'O soldado das forças especiais John Rambo (Stallone) após dar baixa, retorna ao seu país. Durante a Guerra do Vietnã após muitas missões de infiltração em campo inimigo, acabou por tornar-se prisioneiro de guerra dos norte-vietnamitas.',
              elenco: [
                  { nome: 'Sylvester Stallone' },
                  { nome: 'Richard Crenna' },
                  { nome: 'Brian Dennehy' },
                  { nome: 'Bill McKinney' },
                  { nome: 'Jack Starrett' },
              ],
              trailer: 'https://www.youtube.com/watch?v=I4LxsAUIjgQ',
              poster: 'https://images-na.ssl-images-amazon.com/images/I/61b45D94wWL.jpg',
              rented:false
          },
          {
              nome: 'Thor: The Dark World',
              ano: '2013',
              plot: "Marvel's 'Thor: The Dark World' continues the adventures of Thor, the Mighty Avenger, as he battles to save Earth and all the Nine Realms from a shadowy enemy that predates the universe itself. In the aftermath of Marvel's 'Thor' and 'Marvel's The Avengers,' Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. To defeat an enemy that even Odin and Asgard cannot withstand, Thor sets upon his most dangerous and personal journey yet, forced into an alliance with the treacherous Loki to save not only his people and those he loves...but our universe itself.",
              elenco: [
                  { nome: 'Chris Hemsworth' },
                  { nome: 'Natalie Portman' },
                  { nome: 'Tom Hiddleston' },
                  { nome: 'Anthony Hopkins' },
                  { nome: 'Rene Russo' },
              ],
              trailer: 'https://www.youtube.com/watch?v=DpSTUUvvMfs',
              poster: 'https://vignette.wikia.nocookie.net/marveldatabase/images/8/8e/Thor_The_Dark_World_poster_006.jpg',
              rented:false
          },
          {
              nome: 'Divergente',
              ano: '2014',
              plot: 'Divergente passa-se numa Chicago futurísta destruída após uma guerra. Para manter a paz os fundadores construiram uma cerca e dividiram a população em cinco grupos denominados facções, cada uma representa uma qualidade humana são elas: honestidade (Franqueza), generosidade (Amizade), coragem (Audácia), inteligência (Erudição) e altruísmo (Abnegação). No dia de seu teste de aptidão, Beatrice Prior descobre que é um divergente, ou seja, apresenta uma personalidade para mais de uma facção. Na cerimônia de escolha, Beatrice surpreende ao escolher uma facção completamente diferente da sua antiga. Lá ela conhece Quatro (Theo James), um rapaz mais experiente na facção que ela, que passa a ser seu instrutor de treino e que consegue intrigá-la e encantá-la ao mesmo tempo.',
              elenco: [
                  { nome: 'Shailene Woodley' },
                  { nome: 'Theo James' },
                  { nome: 'Kate Winslet' },
                  { nome: 'Zoë Kravitz' },
                  { nome: 'Ansel Elgort' },
              ],
              trailer: 'https://www.youtube.com/watch?v=sutgWjz10sM',
              poster: 'https://i.pinimg.com/564x/42/aa/b6/42aab6591a9a7d5ce3a20536b04164d4.jpg',
              rented:false
          },
          {
              nome: 'O exorcista',
              ano: '1973',
              plot: 'Numa casa onde habita uma atriz com a sua filha menor, ouvem-se estranhos sons no sótão. Com o passar do tempo a criança começa a evidenciar comportamentos cuja natureza desafia a razão. Desesperada, a atriz recorre à ajuda de um padre que decide fazer um... exorcismo. Em pouco tempo, a pacata casa de família torna-se numa arena onde se degladiam o Bem e o Mal, Deus e o Diabo.',
              elenco: [
                  { nome: 'Max von Sydow' },
                  { nome: 'Linda Blair' },
                  { nome: 'Ellen Burstyn' },
                  { nome: 'Jason Miller' }
              ],
              trailer: 'https://www.youtube.com/watch?v=YDGw1MTEe9k',
              poster: 'https://slm-assets3.secondlife.com/assets/17918758/lightbox/Movie_Poster_The_Exorcist.jpg',
              rented:false
          },
          {
              nome: 'Eyes Wide Shut',
              ano: '1999',
              plot: 'A New York City doctor, who is married to an art curator, pushes himself on a harrowing and dangerous night-long odyssey of sexual and moral discovery after his wife admits that she once almost cheated on him.',
              elenco: [
                  { nome: 'Tom Cruise' },
                  { nome: 'Nicole Kidman' },
                  { nome: 'Sydney Pollack' },
                  { nome: ' Marie Richardson' }
              ],
              trailer: 'https://www.youtube.com/watch?v=YEfyfcEdW4Y',
              poster: 'https://images-na.ssl-images-amazon.com/images/I/41c9Qi%2BYuBL.jpg',
              rented:false
          },
          {
              nome: 'The Room',
              ano: '2003',
              plot: 'Johnny (Tommy Wiseau) é um banqueiro bem-sucedido que vive e trabalha em São Francisco com sua Lisa (Juliette Danielle). Entediada e frustrada com sua vida e relacionamento, Lisa seduz o melhor amigo de Johnny, Mark (Greg Sestero).',
              elenco: [
                  { nome: 'Tommy Wiseau' },
                  { nome: 'Juliette Danielle' },
                  { nome: 'Greg Sestero' },
                  { nome: 'Philip Haldiman' }
              ],
              trailer: 'https://www.youtube.com/watch?v=KRAUPqK9Y7I',
              poster: 'http://www.theroommovie.com/roompics/posterb.jpg',
              rented:false
          },
          {
              nome: 'The Godfather',
              ano: '1972',
              plot: 'A saga conta a história de uma família mafiosa que luta para estabelecer sua supremacia na América depois da Segunda Guerra. Uma tentativa de assassinato deixa Vito Corleone incapacitado e força os filhos Michael e Sonny a assumirem os negócios.O filme conta a história da família mafiosa Corleone, de 1945 até 1955.',
              elenco: [
                  { nome: 'Marlon Brando' },
                  { nome: 'Al Pacino' },
                  { nome: 'James Caan' },
                  { nome: 'Richard S. Castellano' },
                  { nome: 'Robert Duvall' }
              ],
              trailer: 'https://www.youtube.com/watch?v=5DO-nDW43Ik',
              poster: 'https://i.pinimg.com/564x/96/aa/3b/96aa3b216dd49e2a7b83aa1799e0a6cf.jpg',
              rented:false
          },
          {
              nome: 'Os Salteadores da Arca Perdida',
              ano: '1981',
              plot: 'Em 1936, o arqueólogo Indiana Jones desbrava um antigo templo cheio de armadilhas no Peru e recupera um ídolo de ouro. Ele é confrontado pelo arqueólogo rival, René Belloq, e Hovito, povos indígenas. Cercado e em menor número, Indy entrega o ídolo para Belloq e escapa a bordo de um hidroavião.',
              elenco: [
                  { nome: 'Harrison Ford' },
                  { nome: 'Karen Allen' },
                  { nome: 'Paul Freeman' }
              ],
              trailer: 'https://www.youtube.com/watch?v=XkkzKHCx154',
              poster: 'https://images-na.ssl-images-amazon.com/images/I/61a9P8QtEVL.jpg',
              rented:false
          },
          {
              nome: 'Crianças Invisíveis',
              ano: '2005',
              plot: 'Um trabalho de conjunto que juntou produtores italianos, a UNICEF, o Programa Alimentar Mundial e um grupo de realizadores à volta de um manifesto de apoio a crianças em vários pontos do planeta, entre os quais Brasil, China, Sérvia, e Estados Unidos da América. Os filmes, sobre crianças que lidam todos os dias com as maiores atrocidades, são assinados por realizadores de renome, como Emir Kusturica, Spike Lee e John Woo.',
              elenco: [
                  { nome: 'Mehdi Charef' },
                  { nome: 'Emir Kusturica' },
                  { nome: 'Spike Lee' },
                  { nome: 'Kátia Lund' }
              ],
              trailer: 'https://www.youtube.com/watch?v=trGs9Jmeom0',
              poster: 'http://www.cineteka.com/img/filmes/002532_big.jpg',
              rented:false
          },
          {
              nome: 'A Fábrica de Nada',
              ano: '2017',
              plot: 'A história de um grupo de operários que tenta salvaguardar os seus postos de trabalho e evitar o encerramento de uma fábrica através de um sistema de autogestão colectiva. Quando se apercebem que a administração está a roubar máquinas e matérias-primas, os trabalhadores decidem organizar-se para impedir o deslocamento da produção. Como forma de retaliação, enquanto decorrem as negociações para os despedimentos, os patrões obrigam-nos a permanecer nos seus postos, sem nada que fazer. Entre o ensaio e o musical, “A Fábrica de Nada” conta com assinatura de Pedro Pinho (“Bab Sebta”, co-realizado com Frederico Lobo em 2008; “Um Fim do Mundo”, 2013; “As Cidades e as Trocas”, co-realizado com Luísa Homem, em 2014). O argumento, escrito por Pinho, Luísa Homem, Leonor Noivo e Tiago Hespanha, parte de uma ideia de Jorge Silva Melo: adaptar a peça de Judith Herzberg e fazer um musical para crianças. Apesar de Silva Melo ter desistido do projecto, Pedro Pinho resolveu transformá-lo em filme.',
              elenco: [
                  { nome: 'Carla Galvão' },
                  { nome: 'Joaquim Bichana Martins' },
                  { nome: 'Dinis Gomes' },
                  { nome: 'Niamy Sebastião' },
                  { nome: 'Américo Silva' },
                  { nome: 'José Smith Vargas' },
              ],
              trailer: 'https://www.youtube.com/watch?v=OP1I-3kHesE',
              poster: 'https://4.bp.blogspot.com/-assH1UQB4NI/WaKofAJdRFI/AAAAAAAA2Vk/AATlopuk7OM-unON2_fY9CwUgLfgC1nsACLcBGAs/s1600/download%2B%25282%2529.jpeg',
              rented:false
          },
          {
              nome: 'Get Out',
              ano: '2017',
              plot: 'A young African-American visits his white girlfriends parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
              elenco: [
                  { nome: 'Não tem atores, é um filme sem atores nem atrizes, é somente um titulo, não ºe Gonçalo :)' },

              ],
              trailer: 'https://www.youtube.com/watch?v=DzfpyUB60YY',
              poster: 'http://img.moviepostershop.com/get-out-movie-poster-2017-1020777214.jpg',
              rented:false
          },
          {
              nome: 'pulp fiction',
              ano: '1994',
              plot: 'Os caminhos de vários criminosos se cruzam nestas três histórias de Quentin Tarantino. Um pistoleiro se apaixona pela mulher de seu chefe, um boxeador não se sai bem em uma luta e um casal tenta executar um plano de roubo que foge do controle.',
              elenco: [
                  { nome: 'John Travolta' },
                  { nome: 'Uma Thurman' },
                  { nome: 'Samuel L. Jackson' },
                  { nome: 'Maria de Medeiros' },

              ],
              trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
              poster: 'https://imgc.allpostersimages.com/img/print/u-g-F5UYZ20.jpg?w=338&h=450',
              rented:false
          },
          {
              nome: 'PANTERA NEGRA',
              ano: '2018',
              plot: 'Após a morte do rei T&#39;Chaka (John Kani), o príncipe T&#39;Challa (Chadwick Boseman) retorna a Wakanda para a cerimônia de coroação. Nela são reunidas as cinco tribos que compõem o reino, sendo que uma delas, os Jabari, não apoia o atual governo. T&#39;Challa logo recebe o apoio de Okoye (Danai Gurira), a chefe da guarda de Wakanda, da irmã Shuri (Letitia Wright), que coordena a área tecnológica do reino, e também de Nakia (Lupita Nyong&#39;o), a grande paixão do atual Pantera Negra, que não quer se tornar rainha. Juntos, eles estão à procura de Ulysses Klaue (Andy Serkis), que roubou de Wakanda um punhado de vibranium, alguns anos atrás.',
              elenco: [
                  { nome: 'Chadwick Boseman,' },
                  { nome: 'Michael B. Jordan' },
                  { nome: 'Lupita Nyong.o' }

              ],
              trailer: 'https://www.youtube.com/watch?v=wL4a4MafSjQ',
              poster: 'http://www.joblo.com/posters/images/full/pantherposterhandsmain.jpg',
              rented:false
          },
          {
              nome: 'Bridge of Spies',
              ano: '2015',
              plot: 'Durante a Guerra Fria, um advogado americano é recrutado para defender um espião soviético preso no tribunal e depois ajudar a CIA a facilitar a troca do espião pelo piloto de avião espião americano capturado pelos soviéticos, Francis Gary Powers.',
              elenco: [
                  { nome: 'Tom Hanks' },
                  { nome: 'Mark Rylance' },
                  { nome: 'Alan Alda' }

              ],
              trailer: 'https://www.youtube.com/watch?v=mBBuzHrZBro',
              poster: 'http://img.goldposter.com/2015/10/Bridge-of-Spies_poster_goldposter_com_9.jpg?x-oss-process=image/resize,m_fill,h_800,w_547/quality,q_80',
              rented:false
          },
          {
              nome: 'O Bom, o Mau e o Vilão',
              ano: '1966',
              plot: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
              elenco: [
                  { nome: 'Clint Eastwood' },
                  { nome: 'Eli Wallach' },
                  { nome: 'Lee Van Cleef' }

              ],
              trailer: 'https://www.youtube.com/watch?v=h1PfrmCGFnk',
              poster: 'https://i.pinimg.com/564x/4f/70/01/4f7001337da0befc5a9f259b21414201.jpg',
              rented:false
          },
          {
              nome: 'RUTH',
              ano: '2018',
              plot: 'Um filme de  António Pinhão Botelho sobre a sociedade portuguesa metropolitana e ultramarina no início da década de 60, que relata a história de um jovem futebolista moçambicano chamado Eusébio, atleta predestinado do Sporting Clube Lourenço Marques, que se vê cobiçado e contratado pelo clube rival, o Benfica. Chantagem, tentativas de rapto, envolvimento de ministros, delírio nos jornais e promessas milionárias fazem da história da transferência do futebolista, um miúdo que nunca ninguém vira jogar - uma saga desenrolada em dois continentes. Termina quando a lenda começa : com a estreia de Eusébio na Luz.',
              elenco: [
                  { nome: 'Igor Regalla' },
                  { nome: 'Miguel Nunes' },
                  { nome: 'Miguel Borges' },
                  { nome: 'Rui Morisson' },
                  { nome: 'Anabela Moreira' },
                  { nome: 'José Raposo' },

              ],
              trailer: 'https://www.youtube.com/watch?v=7PMaQNXuiUU',
              poster: 'https://image.jimcdn.com/app/cms/image/transf/dimension=600x1024:format=jpg/path/scda7fac961c5b9db/image/i0c925b8aab4f6b90/version/1522926800/image.jpg',
              rented:false
          }
      ];
}
