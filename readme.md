PROBLEMA : Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

1 - START
2 - Creo l'array che andrà a contenere le bombe generate;
3 - Creo la funzione che andrà a generare le bombe;
    3.1 - Per prima cosa verrà descritta una variabile di controllo;
    3.2 - Successivamente verrà creato il ciclo che genererà i numeri random escludendo quelli già presenti nell'array;
    3.3 - Per finire la funzione riporterà all'esterno i numeri randomici che il ciclo while ha generato;
4 - La funzione verrà poi chiamata all'interno di un ciclo che riempirà l'array delle bombe fino a raggiungere il numero di 16;
5 - Verrà poi modificato il click dei quadrati che ora includerà la possibilità di trovare le "bombe";
    5.1 - ? SE il numero della casella corrisponde ad uno di quelli presenti nell'array delle bombe;
        5.1.1 - Quest'ultima si colorerà di rosso e terminerà la partita;
    5.2 - : ALTRIMENTI
        5.2.1 - La casella si comporterà normalmente e aumenterà nel frattempo il counter dei punti;
        5.2.2 - ? SE il counter dei punti raggiunge il numero di quadrati meno il numero di bombe;
            5.2.2.1 - Il giocatore ha vinto la partita;
6 - Al termine della partita, qualunque sia il risultato, il dom dovrà mostrare il counter dei punti;
7 - FINISH