import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='time'>
          <h1 style={{
            marginBottom: '0px'
          }}>Please, choose your time:</h1>
        <label>Hours:</label>
        <input type="number" />
        <label>Minutes:</label>
        <input type="number" />
        <button>Add time</button>
        </div>
      <div className='clock'>
      <div className='hour'></div>
      <div className='center'></div>
      <div className='minute'></div>
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
