

export default function GameBoard({ onSelectSquare, board }) {
    
   
    // const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    // const handleSelectSquare = (rowIndex, colIndex) => {
    //     setGameBoard(prevGameBoard => {
    //         // 자바스크립트 객체나 배열을 수정할때에는 깊은 복사를 하고 그 값을 변경하는 것이 좋음
    //         const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (
                        <li key={colIndex}>
                            <button 
                                onClick={() => onSelectSquare(rowIndex, colIndex)} 
                                disabled={playerSymbol !== null}
                            >
                                {playerSymbol}
                            </button>
                        </li>
                    ))}
                </ol>
            </li>) }
        </ol>
    );
}