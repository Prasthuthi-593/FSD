import React from 'react';
const ListItem=({items})=>{
    return(
        <ul>
    {items.map((item,index)=>(
        <li key={index}>{item}</li>
    ))}
    </ul>
);
};
export default ListItem;