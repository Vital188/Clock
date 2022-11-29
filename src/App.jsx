import { useState } from 'react';

import './App.css';

function App() {


  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);

  const minutesStyle = {
    transform: `rotate(${minute * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${hour * 30}deg)`
  };

  const handleChange = () => {
    setHour(12);
    setMinute(0);
  }

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
        <button>Calculate angle</button>
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
      </header>
    </div>
  );
}

export default App;
