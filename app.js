document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 5, 6,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
    1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1,
    1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2,
    2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1,
    2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1,
    1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1,
    1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
    0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  /*Aqui podemos ver as constantes criadas para manipulação dos elementos relacionados ao modal,
  que são os botões de abrir e fechar o modal, além do próprio modal e do "fade", que nada mais
  é do que o fundo cinza presente quando se abre o modal*/
  const openModalButton = document.querySelector("#open-modal");
  const closeModalButton = document.querySelector("#close-modal");
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");

  /*Abaixo tem-se uma função responsável por alternar os estados do modal e do fade, pois para
  esses 2 elementos somente existem 2 possibilidades: ou estão sendo exibidos ou não estão. Essa
  alternância de estados é feita utilizando o "toggle"*/
  const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
  };

  /*Aqui pode-se visualizar a função anterior sendo aplicada ao elementos que se relacionam com
  o modal: botões de abrir e fechar e o "fade"*/
  // [openModalButton, closeModalButton, fade].map((el) => {
  //   el.addEventListener("click", () => toggleModal());
  // });
  
  const squares = [];

  //create your board

  const createBoard = (x) => {
    const square = document.createElement("div");
    grid.appendChild(square);
    
    if(x === 0) {
      square.classList.add('pac-dot')
    } else if (x === 1) {
      square.classList.add('wall')
    } else if (x === 2) {
      square.classList.add('ghost-lair')
    } else if (x === 3) {
      square.classList.add('power-pellet')
    }
    squares.push(square);
  }
  layout.map(createBoard);

  //create Characters
  //draw pacman onto the board
  let pacmanCurrentIndex = 490;
  squares[pacmanCurrentIndex].classList.add("pac-man");
  //get the coordinates of pacman on the grid with X and Y axis
  // function getCoordinates(index) {
  //   return [index % width, Math.floor(index / width)]
  // }

  // console.log(getCoordinates(pacmanCurrentIndex))

  //move pacman
  function movePacman(e) {
    squares[pacmanCurrentIndex].classList.remove("pac-man");
    switch (e.keyCode) {
      case 37:
        if (
          pacmanCurrentIndex % width !== 0 &&
          !squares[pacmanCurrentIndex - 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= 1;
        if (squares[pacmanCurrentIndex - 1] === squares[363]) {
          pacmanCurrentIndex = 391;
        }
        break;
      case 38:
        if (
          pacmanCurrentIndex - width >= 0 &&
          !squares[pacmanCurrentIndex - width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex - width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex -= width;
        break;
      case 39:
        if (
          pacmanCurrentIndex % width < width - 1 &&
          !squares[pacmanCurrentIndex + 1].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += 1;
        if (squares[pacmanCurrentIndex + 1] === squares[392]) {
          pacmanCurrentIndex = 364;
        }
        break;
      case 40:
        if (
          pacmanCurrentIndex + width < width * width &&
          !squares[pacmanCurrentIndex + width].classList.contains("wall") &&
          !squares[pacmanCurrentIndex + width].classList.contains("ghost-lair")
        )
          pacmanCurrentIndex += width;
        break;
    }
    squares[pacmanCurrentIndex].classList.add("pac-man");
    pacDotEaten();
    powerPelletEaten();
    checkForGameOver();
    checkForWin();
    showGate();
  }
  document.addEventListener("keyup", movePacman);

  /* A função showGate filtra o array squares duas vezes, esse filtro retorna outros dois arrays, um contém todos os elementos 
  pac-dot, chamado numberOfPacDot, e o outro array, chamado numberOfPowerPellet, contém todos os elementos power-pellet. 
    Se o tamanho dos dois arrays for igual a 0 significa que o usuário comeu todos os pac-dots e power-pellets, então, por meio de
  um indexOf no array layout encontramos as posições das portas direita e esqueda do portão, rightPortalDoor  e leftPortalDoor
  respectivamente, esses valores serão utilizados para identificar o portão no array squares e modificar o css, removendo a class
  "gate" e adicionando a class "show-gate" em ambas as portas. Após isso o usuário poderá localizar o portão e ao passar por ele 
  o jogo finaliza
  */
  const showGate = () => {

    const numberOfPacDot = squares.filter(square => square.classList.contains("pac-dot"));
    const numberOfPowerPellet = squares.filter(square => square.classList.contains("power-pallet"));

    if(numberOfPacDot.length === 0 && numberOfPowerPellet.length === 0){
      const rightPortalDoor = layout.indexOf(5);
      const leftPortalDoor = layout.indexOf(6);

      squares[rightPortalDoor].classList.remove("invisibleGate");
      squares[rightPortalDoor].classList.add("show-gate");

      squares[leftPortalDoor].classList.remove("invisibleGate");
      squares[leftPortalDoor].classList.add("show-gate");
    } 
  }

  /* Função realiza os seguintes ecentos quando o usuário come um pac-dot: 
    * Adiciona +1 ao score e atualiza o score no display.
    * Remove o pac-dot do tabuleiro. */
  const pacDotEaten = () => {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score += 1;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  /* Função realiza os seguintes eventos quando o usuário come uma power-pellet: 
    * Adiciona +10 ao score e atualiza o score no display.
    * Seta o estado "isScared" de cada ghost em listGhost de false para true, todos os ghosts ficaram azul e se o pacman 
    colidir com algum, o ghost será mandado de volta para o centro do tabuleiro, e é adicionado +100 ao score..
    * Usando o setTimeOut esperamos 10 segundos e chamamos a função unScareGhosts, que setará o estado "isScare" 
    de true para false, ou seja, os ghosts voltaram a ficar coloridos e o pacman não pode mais entrar em contato com eles. 
    * Remove a power-pellet do tabuleiro */
  const powerPelletEaten = () => {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      listGhosts.map((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[pacmanCurrentIndex].classList.remove("power-pellet");
    }
  }

  /*Função que passa em cada ghost presente em listGhosts e torna "isScare" false. Nesse momento os Ghosts
  voltaram a ser coloridos e se o pacman colidir com algum ghost o jogo finaliza*/ 
  const unScareGhosts = () => {
    listGhosts.map((ghost) => (ghost.isScared = false));
  }

  /*Abaixo foram criados 4 registros representando os 4 fantasminhas que aparecerão no labirinto. 
  Não foi possível utilizar o "Object.freeze" pois o 'currentIndex' representa a localização atual
  do fantasma, que sofre alteração, visto que ele realiza movimentos aleatórios conforme visualizado 
  em uma função mais à frente. 
  Não é viável retirar essa condição de os fantasmas se moverem pois isso é parte do jogo; 
  os fantasmas devem se mover a fim de capturar o PacMan.*/
  const ghost1 = {
    ghostName: "blinky",
    startIndex: 348,
    currentIndex: 348,
    speed: 250,
    isScared: false,
    timerId: NaN,
  };

  const ghost2 = {
    ghostName: "pinky",
    startIndex: 376,
    currentIndex: 376,
    speed: 400,
    isScared: false,
    timerId: NaN,
  };

  const ghost3 = {
    ghostName: "inky",
    startIndex: 351,
    currentIndex: 351,
    speed: 300,
    isScared: false,
    timerId: NaN,
  };

  const ghost4 = {
    ghostName: "clyde",
    startIndex: 379,
    currentIndex: 379,
    speed: 500,
    isScared: false,
    timerId: NaN,
  };

  //Aqui podemos ver a criação de uma lista para agrupar os 4 registros referentes aos fantasmas.
  const listGhosts = [ghost1, ghost2, ghost3, ghost4];

  /*Abaixo pode-se observar a lista criada anteriormente sendo percorrida, a fim de que seja
  atribuído um quadrado para cada um dos registros da lista (que representam os fantasmas). 
  Detalhando um pouco mais: para cada fantasma - em sua localização atual - será adicionado um 
  quadrado. A função ".add" atua sobre o css, havendo uma referência no arquivo "style.css" a cada 
  fantasma a partir de seu nome, que é justamente o "ghostName" acessado na função abaixo.*/
  listGhosts.map((ghost) => {
    squares[ghost.currentIndex]?.classList.add(ghost.ghostName);
    squares[ghost.currentIndex]?.classList.add("ghost");
  });

  //Neste ponto, para cada fantasma presente em "listGhosts" é chamada a função "moveGhost"
  listGhosts.map((ghost) => moveGhost(ghost));

  /*Essa é a função responsável pela movimentação dos fantasmas, que acontece aleatoriamente. Nela
  é passado como parâmetro o objeto "ghost", como observado na chamada da função apresentada 
  anteriormente.*/
  function moveGhost(ghost) {
    /*Aqui temos uma constante que delimita o deslocamento do fantasma em altura
    e largura.*/
    const directions = [-1, +1, width, -width];
    /*Aqui temos a constante responsável por selecionar aleatoriamente o movimento que o fantasma 
    realizará, dentro dos limites estabelecidos em "directions".
    Por ser responsável por selecionar números para o movimento dos fantasmas repetidas vezes, 
    o valor recebido por ela é sempre alterado e por isso foi preciso utilizar "let" em sua 
    declaração em vez de se utilizar "const".*/
    let direction = directions[Math.floor(Math.random() * directions.length)];

    const intervalRecursive = (callback = ()=>{}, tempo=0) => {
      let cancel = false; 
  
      const repeat = () => {
          if(cancel === false){
              callback();
              setTimeout(repeat, tempo); 
         }
      }
  
      setTimeout(repeat, tempo);
  
      return () => {
          cancel = true;
      }
  }
    ghost.timerId = intervalRecursive(function () {
      /*Nesse "if" temos que o fantasma de fato se moverá caso não aja um outro fantasma nem uma 
      parede na direção em que ele esteja indo*/
      if (
        !squares[ghost.currentIndex + direction]?.classList.contains("ghost") &&
        !squares[ghost.currentIndex + direction]?.classList.contains("wall")
      ) {
        /*A ideia de movimentação dos fantasmas segue a ideia de removê-lo do lugar em que está
        atualmente e redesenhá-lo no novo espaço escolhido aleatoriamente, então a ideia das 2 linhas de
        código abaixo é justamente essa: remover as classes do CSS vinculadas ao fantasma em questão na
        localização atual dele. No caso, essas classes são 2: "ghost" e "scared-ghost", para cada 
        um dos fantasmas*/
        squares[ghost.currentIndex]?.classList.remove(ghost.ghostName);
        squares[ghost.currentIndex]?.classList.remove("ghost", "scared-ghost");
        /*Abaixo temos a continuidade do pensamento descrito acima: agora, cada fantasma está em uma
        nova localização (que foi calculada somando-se o "direction" que já comentamos com a localização
        atual do fantasma) e portanto deve ser redesenhado*/
        ghost.currentIndex += direction;
        squares[ghost.currentIndex]?.classList.add(ghost.ghostName, "ghost");
        /*Aqui temos o else pro caso em que as condições do if acima forem falsas: neste caso deve-se,
        seguindo o mesmo padrão aleatório comentado anteriormente, selecionar uma nova direção para ir*/
      } else direction = directions[Math.floor(Math.random() * directions.length)];

      /*Se o fantasma estiver assustado, ou seja, o atributo "isScared" estiver retornando "true",
      então é desenhado na tela, na localização atual do fantasma, o "fantasma assustado", 
      definido no "style.css" como "scared-ghost"*/
      if (ghost.isScared) {
        squares[ghost.currentIndex]?.classList.add("scared-ghost");
      }

      /*Se o fantasma estiver assustado e a localização atual dele for a mesma do pacman, então ele
      retorna à posição inicial (seguindo aquela ideia de removê-lo de uma localização e redesenhá-lo
      em outra). Além disso, 100 pontos são adicionados ao score do jogador*/
      if (
        ghost.isScared &&
        squares[ghost.currentIndex]?.classList.contains("pac-man")
      ) {
        squares[ghost.currentIndex]?.classList.remove(
          ghost.ghostName,
          "ghost",
          "scared-ghost"
        );
        ghost.currentIndex = ghost.startIndex;
        score += 100;
        squares[ghost.currentIndex]?.classList.add(ghost.ghostName, "ghost");
      }
      //Por fim, é chamada a função para checar se o jogador perdeu o jogo
      checkForGameOver();
    }, ghost.speed);
  }

  /*Essa função é responsável por validar se o usuário perdeu o jogo. Isso acontece quando o Pacman esbarra em um fantasma que não
  esteja em sua condição vulnerável de "scared-ghost".
  Adicionalmente, quando o jogo é perdido, uma mensagem de alerta é exibida para o usuário informando que ele perdeu o jogo.*/
  const checkForGameOver = () => {
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      listGhosts.map((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("Você PERDEU! Que pena :(");
      }, 500);
    }
  }

  /* A função CheckForWin confere se o jogador ganhou o jogo, essa verificação é feita por meio da posição atual do pacman,
  se ele estiver na posição onde a class é "show-gate", ou seja, a posição do portão, o jogo finalizará. Lembrando que o 
  portão só aparece no labirinto quando todas as pac-dots e power-pellets forem comidas. O recusiveInterval será limpo e
  um alert informará o jogador que ele venceu. 
   */
  const checkForWin = () => {
    if (squares[pacmanCurrentIndex].classList.contains("show-gate")) {
      listGhosts.map((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("Você VENCEU! Parabéns! ;)");
      }, 500);
    }
  }
});
