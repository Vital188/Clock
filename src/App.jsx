import { useState, useEffect } from 'react';

import './App.css';

function App() {


  const [hour, setHour] = useState(1);
  const [minute, setMinute] = useState(0);
  const [angle, setAngle] = useState('')

  const minutesStyle = {
    transform: `rotate(${minute * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${hour * 30}deg)`
  };

  const handleChange = () => {
    setHour(1);
    setMinute(0);
    setAngle(0)
  }

const minuteDegree = minute * 6;
const hourDegree = hour * 30;

const handleCalculation = () => {
  setAngle(minuteDegree - hourDegree)
}

// useEffect (() => {
//   if (angle > 180 || angle < 0 ) {
//     setAngle(hourDegree - minuteDegree)
//   }
// }, [angle, hourDegree, minuteDegree]);



console.log(minuteDegree, hourDegree)

  return (
    <div className="App">
      <header className="App-header">
        <div className='time'>
          <h1 style={{
            marginBottom: '0px'
          }}>Please, select your time:</h1>
        <label>Hours (between 1 and 12):</label>
        <input 
        type="hours"
        value={hour}
        onChange={e => setHour(e.target.value)} 
        />
        <label>Minutes (between 0 and 59):</label>
        <input 
        type="minutes"
        value={minute}
        onChange={e => setMinute(e.target.value)}
         />
        <button onClick={handleChange}>Drop the time</button>
        <button onClick={handleCalculation}>Calculate angle</button>
        </div>
      <div className='clock'>
      <div className='hour' style={hoursStyle}></div>
      <div className='center'></div>
      <div className='minute' style={minutesStyle}></div>
      <div className='number number1'>1</div>
      <div className='number number2'>2</div>
      <div className='number number3'>3</div>
      <div className='number number4'>4</div>
      <div className='number number5'>5</div>
      <div className='number number6'>6</div>
      <div className='number number7'>7</div>
      <div className='number number8'>8</div>
      <div className='number number9'>9</div>
      <div className='number number10'>10</div>
      <div className='number number11'>11</div>
      <div className='number number12'>12</div>
      
      </div>
      <div className='boxfortext'>
      <p> The lesser angle in degrees between hours arrow and minutes arrow is <b> {angle}</b></p>
      </div>
      </header>
      
    </div>
  );
}

export default App;
