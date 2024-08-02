import React from 'react';
import './App.css'
import Joke from './Joke.jsx';
const App=()=>{
  const list=['jbdiuhddsbdbnmsdcb cdndb dcbd dcd' ,'hd gdjwhsbu edw us dj'];
  return(
    <div>
      <h1>Jokes</h1>
      <Joke items={list} />
    </div>
  )
}
export default App;