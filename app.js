document.addEventListener("DOMContentLoaded", () => {
  const scoreDisplay = document.getElementById("score");
  const width = 28;
  let score = 0;
  const grid = document.querySelector(".grid");
  const layout = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1,
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

  const squares = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < layout.length; i++) {
      const square = document.createElement("div");
      grid.appendChild(square);
      squares.push(square);

      //add layout to the board
      if (layout[i] === 0) {
        squares[i].classList.add("pac-dot");
      } else if (layout[i] === 1) {
        squares[i].classList.add("wall");
      } else if (layout[i] === 2) {
        squares[i].classList.add("ghost-lair");
      } else if (layout[i] === 3) {
        squares[i].classList.add("power-pellet");
      }
    }
  }
  createBoard();

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
  }
  document.addEventListener("keyup", movePacman);

  // what happens when you eat a pac-dot
  function pacDotEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("pac-dot")) {
      score++;
      scoreDisplay.innerHTML = score;
      squares[pacmanCurrentIndex].classList.remove("pac-dot");
    }
  }

  //what happens when you eat a power-pellet
  function powerPelletEaten() {
    if (squares[pacmanCurrentIndex].classList.contains("power-pellet")) {
      score += 10;
      listGhosts.forEach((ghost) => (ghost.isScared = true));
      setTimeout(unScareGhosts, 10000);
      squares[pacmanCurrentIndex].classList.remove("power-pellet");
    }
  }

  //make the ghosts stop flashing
  function unScareGhosts() {
    listGhosts.forEach((ghost) => (ghost.isScared = false));
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

    ghost.timerId = setInterval(function () {
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

  //check for a game over
  function checkForGameOver() {
    if (
      squares[pacmanCurrentIndex].classList.contains("ghost") &&
      !squares[pacmanCurrentIndex].classList.contains("scared-ghost")
    ) {
      listGhosts.map((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("Game Over");
      }, 500);
    }
  }

  //check for a win - more is when this score is reached
  function checkForWin() {
    if (score >= 274) {
      listGhosts.map((ghost) => clearInterval(ghost.timerId));
      document.removeEventListener("keyup", movePacman);
      setTimeout(function () {
        alert("You have WON!");
      }, 500);
    }
  }
});
