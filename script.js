function Gameboard (){

    let board = [];

        for (let i = 0; i < 3; i++) {

            board[i] = [];
            
            for (let j = 0; j < 3; j++) {
                
                board[i].push(Cell());

            }
            
        }

    function setSymbol (row, column, playerSymbol){

        if(board[row][column].getSymbol() === '_'){
            board[row][column].addSymbol(playerSymbol)

            return true;
        }
        else{
            console.log('Invalid Move, Try Again!');
            return false;
        }

    }

    return {
        board,
        setSymbol
    }

}



function Cell (){
    let symbol = '_';

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

    const Players = [
        {
            name : 'One',
            symbol : 'X'
        },
        {
            name : 'Two',
            symbol : 'O'
        }
    ];

    let activePlayer = Players[0];

    function setActivePlayer () {
        activePlayer = activePlayer === Players[0] ? Players[1] : Players[0];
    }

    

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

        let moveSuccessfull = boardObj.setSymbol(row, coulmn, activePlayer.symbol);
        
        if(moveSuccessfull){

            setActivePlayer();
            printBoard();
        }

    }

    //Initial Setup message
    printBoard();

    return {
        playRound,
    }
}


    const game = GamePlay();

