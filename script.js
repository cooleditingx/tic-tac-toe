(function Game(){
    let row;
    let column;
    function GameBoard(){
        let gameBoard = []
        for (let i = 0; i < 3; i++) {
            gameBoard[i] = [];
            for (let j = 0; j < 3; j++) {
                gameBoard[i][j]= ""
            }
        }
        return gameBoard
    }
    function Players(name,token,score){
        this.name = name;
        this.token = token;
        this.score = score;
    }
    let player1 = new Players("player1","O",0)
    let player2 = new Players("player2","X",0)
    function changeTurn(){
        if (activePlayer == player2){
            activePlayer = player1
        } else {
            activePlayer = player2
        }
        return activePlayer
    }
    function activePlayer(){
        for (let x = 0; x < 9; x++) {
            if (x == 0 ){
                activePlayer = player2
            } else if (x > 0){
                activePlayer = changeTurn()
            }
        }
        return activePlayer
    }
    let currentPlayer = activePlayer()
    let gameBoard = []
    gameBoard = GameBoard()
    function validateInput(gameBoard,currentPlayer,row,column){
        if (row<0 || row>2) {
            console.log("Please enter a valid row and column number (from 0,2,1")
        } 
        if (column<0 || column>2) {
            console.log("Please enter a valid row and column number (from 0,2,1")
        }
        if (gameBoard[row][column] == ""){
            gameBoard[row][column] = currentPlayer.token;
            return gameBoard
        } else {
            console.log("This cell is taken please enter a new cell")
            return validateInput(gameBoard,currentPlayer,row,column)
        }
    }
    function checkWinner(x){
        if ((x[0][0] == player2.token && x[0][1] == player2.token && x[0][2] == player2.token) || (x[1][0] == player2.token && x[1][1] == player2.token && x[1][2] == player2.token) || (x[2][0] == player2.token && x[2][1] == player2.token && x[2][2] == player2.token) || (x[0][0] == player2.token && x[1][0] == player2.token && x[2][0] == player2.token) || (x[0][1] == player2.token && x[1][1] == player2.token && x[2][1] == player2.token) || (x[0][2] == player2.token && x[1][2] == player2.token && x[2][2] == player2.token) || (x[0][0] == player2.token && x[1][1] == player2.token && x[2][2] == player2.token) || (x[2][0] == player2.token && x[1][1] == player2.token && x[0][2] == player2.token)){
            return true
        } else if ((x[0][0] == player1.token && x[0][1] == player1.token && x[0][2] == player1.token) || (x[1][0] == player1.token && x[1][1] == player1.token && x[1][2] == player1.token) || (x[2][0] == player1.token && x[2][1] == player1.token && x[2][2] == player1.token) || (x[0][0] == player1.token && x[1][0] == player1.token && x[2][0] == player1.token) || (x[0][1] == player1.token && x[1][1] == player1.token && x[2][1] == player1.token) || (x[0][2] == player1.token && x[1][2] == player1.token && x[2][2] == player1.token) || (x[0][0] == player1.token && x[1][1] == player1.token && x[2][2] == player1.token) || (x[2][0] == player1.token && x[1][1] == player1.token && x[0][2] == player1.token)){
            return true
        } else{
            return false
        }
    }
    function checkDraw(moves){
        if (checkWinner(gameBoard) == false && moves == 8){
            return true
        }
    }
    function addMark(cell){
        if(activePlayer.token == "X"){
            const img = document.createElement("img")
            img.src = "arrow.png"
            cell.appendChild(img)
        } else if (activePlayer.token == "O"){
            const img = document.createElement("img")
            img.src = "circle.png"
            cell.appendChild(img)
        }
    }
    activePlayer = player2
    const squares = document.querySelectorAll(".square")
    for (i=0;i<squares.length;i++){
        squares[i].addEventListener("click",function (event){
            let cell= event.currentTarget
            let id = event.currentTarget.id
            row = id.slice(0,1)
            column = id.slice(1,2)
            validateInput(gameBoard,activePlayer,row,column)
            addMark(cell)
            changeTurn()
        })
    }









    /*function playGame(){
        let gameBoard = GameBoard()//initializing gameboard
        console.log("1 | 2 | 3")//print board
        console.log("4 | 5 | 6")// print board
        console.log("7 | 8 | 9")// print board
        let i = 0; 
        while (checkWinner(gameBoard) == false && i<=8){
            if (i == 0 ){
                activePlayer = player2
                console.log("This is player",player2.token, "turn")
                validateInput(gameBoard,activePlayer)
                console.log(`
                    ${gameBoard[0][0]} | ${gameBoard[0][1]} | ${gameBoard[0][2]}
                    ---------
                    ${gameBoard[1][0]} | ${gameBoard[1][1]} | ${gameBoard[1][2]}
                    ---------
                    ${gameBoard[2][0]} | ${gameBoard[2][1]} | ${gameBoard[2][2]}
                `)
            } else if (i > 0){
                activePlayer = changeTurn()
                console.log("This is player",activePlayer.token, "turn")
                validateInput(gameBoard,activePlayer)
                console.log(`
                    ${gameBoard[0][0]} | ${gameBoard[0][1]} | ${gameBoard[0][2]}
                    ---------
                    ${gameBoard[1][0]} | ${gameBoard[1][1]} | ${gameBoard[1][2]}
                    ---------
                    ${gameBoard[2][0]} | ${gameBoard[2][1]} | ${gameBoard[2][2]}
                `)
                if (checkWinner(gameBoard) == true){
                    console.log(`The winner is player ${activePlayer.token}`)
                } else if (checkDraw(i) == true){
                    console.log("It's a tie")
                }
            }
            i = i +1
        }
    }
    playGame()*/
})()