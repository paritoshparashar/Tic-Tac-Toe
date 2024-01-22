function Gameboard (){

    let board = [];

        for (let i = 0; i < 3; i++) {

            board[i] = [];
            
            for (let j = 0; j < 3; j++) {
                
                board[i].push(Cell());

            }
            
        }

    return {

        board,


    }

}

function Cell (){
    let symbol = 'N';

    function addSymbol () {
        //We will need the status of the activePlayer to implement this
    }



    return {
        addSymbol,
    }

    
}


function GamePlay (){

    board = Gameboard();

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

    const playRound = function (row, coulmn){
        //Do 3 things, 1)change the state of the cell board[row][coulmn], 2)change the playerTurn, 3)print the updated board

        function changeCellState () {
            //We will need the Cell method to implement this
            
        }
    }

    return {
        playRound,
    }
}

const game = GamePlay();