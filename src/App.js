import './App.css';
import React, { useState } from 'react';
import Header from './Header';
import Timings from './Timings';

function App() {

  const [country, setCountry] = useState("UnitedStates");
  const [city, setCity] = useState("Chicago");
  const [input, setInput] = useState();
  const [input2, setInput2] = useState();
  const [fajr, setFajr] = useState();
  const [dhuhr, setDhuhr] = useState();
  const [asr, setAsr] = useState();
  const [maghrib, setMaghrib] = useState();
  const [isha, setIsha] = useState();

    const clickHandler = () => {
        setCountry(input);
        setCity(input2);
        fetch(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=04&year=2017`)
        .then((response) => response.json())
        .then(data => {
    
            setFajr(data.data[0].timings.Fajr);
    
        })
        fetch(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=04&year=2017`)
        .then((response) => response.json())
        .then(data => {
    
            setDhuhr(data.data[0].timings.Dhuhr);
    
        })
        fetch(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=04&year=2017`)
        .then((response) => response.json())
        .then(data => {
    
            setAsr(data.data[0].timings.Asr);
    
        })
        fetch(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=04&year=2017`)
        .then((response) => response.json())
        .then(data => {
    
            setMaghrib(data.data[0].timings.Maghrib);
    
        })
        fetch(`https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=2&month=04&year=2017`)
        .then((response) => response.json())
        .then(data => {
    
            setIsha(data.data[0].timings.Isha);
    
        })
    }

    const changeHandler = (e)=>{
      setInput(e.target.value)
    }
    const changeHandler2 = (e)=>{
      setInput2(e.target.value)
    }

  return (
    <div className="App">
      <Header country={country} city={city} clickHandler={clickHandler} changeHandler={changeHandler} changeHandler2={changeHandler2} />
      <Timings fajr={fajr} dhuhr={dhuhr} asr={asr} maghrib={maghrib} isha={isha} />
    </div>
  );
}

export default App;
