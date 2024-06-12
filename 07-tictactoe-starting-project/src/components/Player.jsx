import { useState } from "react";


export default function Player({ initialName, symbol, isActive , onChangeName }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);
    
    const handleEditClick = () => {
        //setIsEditing(!isEditing); 대신에 아래 화살표함수를 써야하는이유
        //위처럼 사용하면 같은 set이 두번일때 같은 값을 참조하여 결과가 바뀌지않음
        //상태변경 시 이전의 상태값에 기반하여 변경한다면 화살표 함수로 작동 시켜야함
        setIsEditing(editing => !editing);

        if (isEditing) {
            onChangeName(symbol, playerName);
        }

    }
    
    const handleChange = event => {
        setPlayerName(event.target.value);

    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if(isEditing) {
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        );
        //btnCaption = 'Save';
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}