import React from 'react';
const Joke=({items})=>{
    return(
        <div>
            {items.map((item,index)=>(
            <p key={index}>{item}</p>
            ))}
        </div>
    )
};
export default Joke;