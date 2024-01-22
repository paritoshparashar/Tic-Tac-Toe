function Gameboard (){

    let board = [];

    const createBoard = function (){

        for (let i = 0; i < 3; i++) {

            board[i] = [];
            
            for (let j = 0; j < 3; j++) {
                
                board[i].push(Cell());

            }
            
        }
    };

}



function GamePlay (){

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
        
    }

    return {
        playRound,
    }
}

const game = GamePlay();