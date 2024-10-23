
import './App.css';
import React, {useState} from 'react';

function App() {
  const[city,setCity]=useState('');
  const[cities,setCities]=useState([]);
  const[error,setError]=useState('');

  const handleSubmit =(e)=>{
    e.preventDefault();
    const trimmedCity = city?.trim()?.toLowerCase();
    if(!trimmedCity){
      setError('City name is required');
      return;
    }
    if(cities?.includes(trimmedCity)){
      setError('City name already exists');
      return;
    }
    setCities([...cities,trimmedCity]);
    setCity('');
    setError('');
  }
  return (
   <div>
    <form onSubmit={handleSubmit}>
      <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}}
      placeholder='Enter a city name'/>
      <button type='submit'>Add city</button>
    </form>
    {error && <p style={{color:'red'}}>{error}</p>}
    <ul>
      {cities?.map((city,index)=>(
      <li key={index}>{city}</li>))}
    </ul>
   </div>
  );
}

export default App;
