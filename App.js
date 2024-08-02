import React,{useState} from 'react';
import './App.css';

const Button=({number,onClick})=>{
  return(
    <button onClick={onClick}>Button{number}</button>
  );
};
const App=()=>{
  const[clickCount,setClickCount]=useState({btn1:0,btn2:0,btn3:0});
  const handleClick=(buttonNumber,number)=>{
    setClickCount(prevCounts=>({
      ...prevCounts,
      [buttonNumber]:prevCounts[buttonNumber]+1
    }));
    alert(`Button ${number} was Clicked`)
  };
  return(
    <div>
      <Button number="1" onClick={()=>handleClick('btn1',1)}/>
        <p>Button 1 has been clicked {clickCount.btn1} times.</p>
        <Button number="2" onClick={()=>handleClick('btn2',2)}/>
        <p>Button 2 has been clicked {clickCount.btn2} times.</p>
        <Button number="3" onClick={()=>handleClick('btn3',3)}/>
        <p>Button 3 has been clicked {clickCount.btn3} times.</p>
    </div>
  );
};
export default App;