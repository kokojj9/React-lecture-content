export default function Log({ turns }) {

    // 백틱 ``과 ${}는 동적으로 문자열을 생성해줌
    return (
        <ol id="log">
            {turns.map(turn => 
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected {turn.square.row}, {turn.square.col}
                </li>
            )}
        </ol>
    );
}