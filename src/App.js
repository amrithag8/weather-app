import logo from './logo.svg';
import './App.css';
import Section from './Section';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  
  const[place, setPlace]=useState();
  const[val, setVal]= useState();
 const[url, setUrl]= useState();

 function fetchDataAll(){
  
setUrl(`https://api.weatherapi.com/v1/current.json?key=c7ad5db4a1434b5d9ae235021231104&q=${place}&aqi=no`);
setPlace("");
 }



 
 useEffect(()=>{ 

  axios.get(url).then(function(response){
    setVal(response.data);

   })

}, [url]);  
    



  return (
    <div className="App">
      <div className='AppWrapper'>
        <Section val={val} place={place} setPlace={setPlace} url={url} setUrl={setUrl} fetchDataAll={fetchDataAll}/>
      </div>
    </div> 
  );
}

export default App;
