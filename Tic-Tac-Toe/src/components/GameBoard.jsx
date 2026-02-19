export default function GameBoard({onSelectSquare, board}){

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
        {board.map((row, rowIndex) => (
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex,colIndex)}
                                disabled = {playerSymbol !== null}
                                >
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
    );
}