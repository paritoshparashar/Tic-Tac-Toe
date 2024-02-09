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

    function getActivePlayer (){
        return activePlayer;
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
    

    function printBoard (row, column){

        // for (let i = 0; i < 3; i++) {

        //     let r = ' ';

        //     for (let j = 0; j < 3; j++) {

        //         r += boardObj.board[i][j].getSymbol() + ' ';

        //     }

        //     console.log(r);

        // }


        return boardObj.board[row][column].getSymbol();
    }


    const playRound = function (row, column){
        //Do 3 things, 1)change the state of the cell board[row][coulmn], 2)change the playerTurn, 3)print the updated board
        let status;

        let moveSuccessfull = boardObj.setSymbol(row, column, activePlayer.symbol);
        
        if(moveSuccessfull){

            setActivePlayer();
            status = checkWin();
            let move =  printBoard(row, column);
            return { moveSuccessfull , move , status};
        }

        else return {moveSuccessfull } ;
    }

    //Initial Setup message

    //printBoard(status);

    return {
        playRound,
        getActivePlayer,

    }
}


function ScreenController () {

    let game = GamePlay();

    
    //Populate boardDiv
    for (let i = 0; i < 3; i++) {
    
        for (let j = 0; j < 3; j++) {
            
            const cellBtn = document.createElement('button');
            cellBtn.id = '' + i + j;
            cellBtn.classList.add('cell');
            cellBtn.addEventListener('click', handleBoardClick)
            boardDiv.appendChild(cellBtn);
        }
    }

    function resetGameBoard (){

        game = GamePlay();

        let cellsArray = boardDiv.getElementsByClassName('cell');

        // Set the text content of each button to an empty string
        setTimeout(() => {
            for (var i = 0; i < cellsArray.length; i++) {
            cellsArray[i].textContent = '';
        }
        }, 2000); 
    }


    function updateScreen(cell, move, status){

        cell.textContent = move;
        if (status.WIN) {
             
            winStatusDiv.textContent = `${status.WINSYMBOL} wins!`;
            resetGameBoard();
        }

        else if (status.TIE){
            winStatusDiv.textContent = 'It\'s a tie!';
            resetGameBoard();
        }

        else{
            winStatusDiv.textContent = `Player ${game.getActivePlayer().name}'s Turn...`;
        }
        
    }

    function handleBoardClick (event) {

        let clickedBtn = event.target;
        let content = game.playRound(parseInt(clickedBtn.id[0]) , parseInt(clickedBtn.id[1])) //Extract row and column form id and pass as arg

        if (content.moveSuccessfull){
            updateScreen(clickedBtn, content.move , content.status);
        }

        

    }



}


const boardDiv = document.querySelector('.board');
const winStatusDiv = document.querySelector('.winner');

ScreenController ();
