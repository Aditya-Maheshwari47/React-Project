import { useState } from "react";
export default function Player({intialName, symbol, isActive}){
  const[ playerName, setPlayerName ] = useState(intialName);
  const[ isEditing, setIsEditing ] = useState(false);
  
  function handleEditClick(){
    //best practice to use function --> react guarantee that state working is latest available value, instead of (!isEditing)
    setIsEditing((editing) => !editing); 
  }

  function handleChange(event){
    setPlayerName(event.target.value);
  }
  
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if(isEditing) {
    editablePlayerName = (
    <input type="text" required value={playerName} onChange={handleChange}/>
    ) ;
  }
  return(
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
            {editablePlayerName}
             <span className="player-symbol">{symbol}</span>
          </span>: 
          <button onClick = {handleEditClick}>{isEditing ? 'Save': 'Edit'}</button>  
        </li>

    );
    
}