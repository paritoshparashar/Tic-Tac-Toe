function Gameboard (){

    let board = [];

    const createBoard = function (){

        for (let i = 0; i < 3; i++) {

            board[i] = [];
            
            for (let j = 0; j < 3; j++) {
                
                board[i].push('N');

            }
            
        }
    };

}

