function Gameboard (){

    let board = [];

        for (let i = 0; i < 3; i++) {

            board[i] = [];
            
            for (let j = 0; j < 3; j++) {
                
                board[i].push(Cell());

            }
            
        }

    function setSymbol (row, column, playerSymbol){
        board[row][column].addSymbol(playerSymbol)
    }

    return {
        board,
        setSymbol
    }

}



function Cell (){
    let symbol = 'N';

    function addSymbol (playerSymbol) {

        symbol = playerSymbol;
    }

    function getSymbol (){

        return symbol;
    }


    return {
        addSymbol,
        getSymbol,
    }

    
}


function GamePlay (){

    boardObj = Gameboard();

    let activePlayer = Players[0];

    function setActivePlayer () {
        activePlayer = activePlayer === Players[0] ? Players[1] : Players[0];
    }

    const Players = [
        {
            name : 'One',
            symbol : 'X'
        },
        {
            name : 'Two',
            symbol : 'Y'
        }
    ];

    function printBoard (){

        for (let i = 0; i < 3; i++) {

            let r = ' ';

            for (let j = 0; j < 3; j++) {

                r += boardObj.board[i][j].getSymbol() + ' ';

            }

            console.log(r);

        }

        console.log(`Player ${activePlayer.name}'s Turn...`)


    }


    const playRound = function (row, coulmn){
        //Do 3 things, 1)change the state of the cell board[row][coulmn], 2)change the playerTurn, 3)print the updated board

        boardObj.setSymbol(row, coulmn, activePlayer.symbol);
        
        
        setActivePlayer();

        printBoard();
    }
//Initial Setup message
    printBoard();

    return {
        playRound,
    }
}


function start (){
    const game = GamePlay();
    game.playRound(0,0);
}
