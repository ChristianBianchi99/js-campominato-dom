// DICHIARAZIONE VARIABILI
let btn = document.querySelector(".btn")
let grid = document.querySelector(".grid")
let square10 = "square-10"
let square9 = "square-9"
let square7 = "square-7"
let square = document.querySelector(".square-10");

// CREAZIONE FUNZIONI
// Funzione per generare i quadrati
function squareGenerator(a){
    let square = document.createElement("div")
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

            square.classList.add("clicked")
            console.log(this.innerHTML)
        })
    }
}

// IMPOSTAZIONE CLICK BTN
btn.addEventListener("click", function(){

    grid.innerHTML = "";
    // IMPOSTAZIONE PER LA DIFFICOLTA'
    let difficulty = document.querySelector(".form-select").value;
    if( difficulty == 1){
        if(grid.innerHTML === ""){
            gridGenerator(1, 100, square10)
        }
    } else if ( difficulty == 2){
        if(grid.innerHTML === ""){
            gridGenerator(1, 81, square9)
        }
    } else if ( difficulty == 3){
        if(grid.innerHTML === ""){
            gridGenerator(1, 49, square7)
        }
    } else {
        alert("Seleziona una difficoltà prima di continuare")
    }
})
