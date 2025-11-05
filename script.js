(function Game(){
    let row;
    let column;
    function GameBoard(){
        let gameBoard = []
        //let x = 1
        for (let i = 0; i < 3; i++) {
            gameBoard[i] = [];
            for (let j = 0; j < 3; j++) {
                gameBoard[i][j]= ""
                //x= x+1
            }
        }
        gameBoard[2][2] = "O"
        return gameBoard
    }
    function Players(name,token,score){
        this.name = name;
        this.token = token;
        this.score = score;
    }
    let player1 = new Players("player1","O",0)
    let player2 = new Players("player2","X",0)
    function playerTurn(){
        let activePlayer;
        if (player1.token == "X"){
            activePlayer = player1.name
        } else if (player2.token == "X"){
            activePlayer = player2.name
        }
        return activePlayer
    }
    function validateInput(){
        row = prompt("Enter row number");
        if (row<0 || row>2) {
            console.log("Please enter a valid row and column number (from 0,2,1")
            row = (prompt("Enter row number")); 
        } 
        column = prompt("Enter a column number")
        if (column<0 || column>2) {
            console.log("Please enter a valid row and column number (from 0,2,1")
            column = (prompt("Enter column number"));
        }
        let gameBoard = []
        gameBoard = GameBoard()
        if (gameBoard[row][column] == ""){
            gameBoard[row][column] = "X";
            return gameBoard
        } else {
            console.log("This cell is taken please enter a new cell")
            return validateInput()
        }
    }
    function updateDisplay(){
        let gameBoard = GameBoard()
        let board = validateInput()
        gameBoard.forEach(row => {
            row.forEach((element,index) => {
                if(gameBoard[index] = ""){
                    gameBoard[index] = board[index]
                }
            })
        })
        return gameBoard
    }
    console.log(updateDisplay())
    console.log(updateDisplay())
    console.log(GameBoard())
})()