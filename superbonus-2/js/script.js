// DICHIARAZIONE VARIABILI
let btn = document.querySelector(".btn")
let grid = document.querySelector(".grid")
let message = document.querySelector(".message")
let square = "";
let cells= "";
let bombs = [];
let points = 0;
let gameOver = false;

// CREAZIONE FUNZIONI
// Funzione per generare i quadrati
function squareGenerator(a){
    let square = document.createElement("div")
    square.classList.add("square")
    square.classList.add(a)
    return square
}
//Funzione per generare la griglia
function gridGenerator(a, b, c){
    for( let i=a; i<=b; i++){
        let square=squareGenerator(c)
        square.innerHTML=i
        grid.append(square)

        // IMPOSTAZIONE CLICK SQUARE
        square.addEventListener("click", function(){

            if(gameOver === false){
                if(bombs.includes(parseInt(this.innerHTML))){
                    square.classList.add("bomb")
                    alert("Hai perso!")
                    message.classList.remove("d-none")
                    message.innerHTML = `Hai totalizzato un punteggio di : ${points}`
                    message.classList.add("d-block")
                    gameOver = true;

                    let squares = document.getElementsByClassName("square")

                    for( let j=0; j<squares.length; j++){
                        if(bombs.includes(j+1)){
                            squares[j].classList.add("bomb")
                        }
                    }
                } else {
                    square.classList.add("save")
                    points++
                    if(points == cells - 16){
                        alert("Hai vinto!")
                        message.classList.remove("d-none")
                        message.innerHTML = `Complimenti, hai totalizzato il punteggio massimo di : ${points}`
                        message.classList.add("d-block")
                    }
                }
            }
        })
    }
}
//Funzione per generare le bombe
function bombsGenerator(array, max){
    let check = false
    let bomb;
    while(check === false){
        bomb = Math.floor(Math.random() * (max - 1 + 1) + 1)
        
        if(!array.includes(bomb)){
            check = true
        }
    }
    return bomb
}

// IMPOSTAZIONE CLICK BTN
btn.addEventListener("click", function(){

    grid.innerHTML = "";
    bombs = []
    points = 0;
    // IMPOSTAZIONI PER LA DIFFICOLTA'
    let difficulty = document.querySelector(".form-select").value;
    if( difficulty == 0) {
        alert("Seleziona una difficoltà prima di continuare")
    } else {
        if( difficulty == 1){
            if(grid.innerHTML === ""){
                cells = 100
                square = "square-10"
            }
        } else if ( difficulty == 2){
            if(grid.innerHTML === ""){
                cells = 81
                square = "square-9"
            }
        } else if ( difficulty == 3){
            if(grid.innerHTML === ""){
                cells = 49
                square = "square-7"
            }
        }
        //GENERAZIONE GRIGLIA
        gridGenerator(1, cells, square)
        //GENERAZIONE BOMBE
        for(let i=1; i<=16; i++){
            let bomb=bombsGenerator(bombs, cells)
            bombs.push(bomb)
        }
        console.log(bombs)
    }
})