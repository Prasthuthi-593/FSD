import React from 'react';
import ListItem from './ListItem';

const App=()=>{
  const list=['cat','dog','cow'];
  return(
    <div>
    <h1>Animal List</h1>
    <ListItem items={list}/>
    </div>
  )
}
export default App;