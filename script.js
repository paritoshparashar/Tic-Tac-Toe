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

    function checkWin(){

        let current = boardObj.board;
        let winStatus = {
            WIN : false,
            TIE : false,
            WINSYMBOL : '_'
        }

        switch (true) {
            case ((current[0][0].getSymbol() === current[0][1].getSymbol()) && (current[0][2].getSymbol() === current[0][0].getSymbol()) && (current[0][0].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[0][0].getSymbol();
                break;

            case ((current[1][0].getSymbol() === current[1][1].getSymbol()) && (current[1][0].getSymbol()=== current[1][2].getSymbol()) && (current[1][0].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[1][0].getSymbol();
                break;

            case ((current[2][0].getSymbol() === current[2][1].getSymbol()) && (current[2][2].getSymbol() === current[2][0].getSymbol()) && (current[2][0].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[2][0].getSymbol();
                break;

            case ((current[0][0].getSymbol() === current[1][0].getSymbol()) && (current[2][0].getSymbol() === current[0][0].getSymbol()) && (current[0][0].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[0][0].getSymbol();
                break;

            case ((current[0][1].getSymbol() === current[1][1].getSymbol()) && (current[2][1].getSymbol() === current[0][1].getSymbol()) && (current[0][1].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[0][1].getSymbol();
                break;

            case ((current[0][2].getSymbol() === current[1][2].getSymbol()) && (current[2][2].getSymbol() === current[0][2].getSymbol()) && (current[0][2].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[0][2].getSymbol();
                break;

            case ((current[0][0].getSymbol() === current[1][1].getSymbol()) && (current[2][2].getSymbol() === current[0][0].getSymbol()) && (current[0][0].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[0][0].getSymbol();
                break;

            case ((current[2][0].getSymbol() === current[1][1].getSymbol()) && (current[0][2].getSymbol() === current[0][2].getSymbol()) && (current[2][0].getSymbol() !== '_')):
                winStatus.WIN = true;
                winStatus.WINSYMBOL = current[2][0].getSymbol();
                break;

            default:
                break;
        }

        return winStatus
        
    }
    

    function printBoard (status){

        for (let i = 0; i < 3; i++) {

            let r = ' ';

            for (let j = 0; j < 3; j++) {

                r += boardObj.board[i][j].getSymbol() + ' ';

            }

            console.log(r);

        }

        if (status.WIN) {
            
            console.log(`${status.WINSYMBOL} wins!`);
        }

        else if (status.TIE){
            console.log('It\'s a tie!')
        }

        else{
            console.log(`Player ${activePlayer.name}'s Turn...`)
        }


    }


    const playRound = function (row, coulmn){
        //Do 3 things, 1)change the state of the cell board[row][coulmn], 2)change the playerTurn, 3)print the updated board

        let moveSuccessfull = boardObj.setSymbol(row, coulmn, activePlayer.symbol);
        
        if(moveSuccessfull){

            setActivePlayer();
            let status = checkWin();
            printBoard(status);
            

        }

    }

    //Initial Setup message

    //printBoard(status);

    return {
        playRound,
    }
}

function start (){
        const game = GamePlay();
        game.playRound(0,0);
        game.playRound(0,1);
        game.playRound(1,0);
        game.playRound(2,2);
        game.playRound(2,0);
}

