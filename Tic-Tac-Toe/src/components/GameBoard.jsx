const intialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard({onSelectSquare,turns}){
    let gameBoard = intialGameBoard;

    for(const turn of turns){
        const { square , player } = turn;
        const { row , col } = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(intialGameBoard);  // React state to store the current board state

    // function handleSelectSquare(rowIndex, colIndex){

    //     // We must NOT mutate state directly.So we create a deep copy of the previous board.
    //         // First map copies outer array
    //         // Second spread copies each inner row array
    //     setGameBoard((prevGameBoard) =>{
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;        // Return the new board to update state
    //     });

    //     onSelectSquare();S

    // }
    return (  
    <ol id = "game-board">
        {gameBoard.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex,colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
    );
}