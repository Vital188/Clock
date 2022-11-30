import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState(12);
  const [minute, setMinute] = useState(0);
  const [angle, setAngle] = useState("");
  const [verification, setVerification] = useState(0);

  useEffect(() => {
    if (hour < 0 || hour > 12) {
      setVerification(1);
      setMinute(0);
      setHour(12);
      setAngle("");
    }
  }, [hour]);

  useEffect(() => {
    if (minute < 0 || minute > 59) {
      setVerification(1);
      setMinute(0);
      setHour(12);
      setAngle("");
    }
  }, [minute]);

  const minutesStyle = {
    transform: `rotate(${minute * 6}deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${hour * 30}deg)`,
  };

  const handleChange = () => {
    setHour(12);
    setMinute(0);
    setAngle(0);
    setVerification(0);
  };

  const minuteDegree = minute * 6;
  const hourDegree = hour * 30;

  const handleCalculation = () => {
    setAngle(minuteDegree - hourDegree);
  };

  useEffect(() => {
    if (angle > 180) {
      setAngle(360 - angle);
    }
  }, [angle]);

  useEffect(() => {
    if (angle < 0) {
      setAngle(angle * -1);
    }
  }, [angle]);

  console.log(
    "The lesser angle between hours arrow and minutes arrow is",
    angle
  );

  return (
    <div className="App">
      <header className="App-header">
        {verification === 0 ? null : (
          <div className="verification">Please, write correct number</div>
        )}

        <div className="time">
          <h1
            style={{
              marginBottom: "0px",
            }}
          >
            Please, select your time:
          </h1>
          <label>Hours (between 1 and 12):</label>
          <input
            type="hours"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
          <label>Minutes (between 0 and 59):</label>
          <input
            type="minutes"
            value={minute}
            onChange={(e) => setMinute(e.target.value)}
          />
          <button onClick={handleChange}>Drop the time</button>
          <button onClick={handleCalculation}>Calculate the angle</button>
        </div>
        <div className="clock">
          <div className="hour" style={hoursStyle}></div>
          <div className="minute" style={minutesStyle}></div>
          <div className="number number1">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number2 line">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number3">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number4">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number5">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number6">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number7">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number8">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number9">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number10">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number11">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
          <div className="number number12">
            <button
              style={{
                border: "none",
                height: "30px",
                backgroundColor: "black",
                padding: "4px",
                marginTop: "2px",
              }}
            ></button>
          </div>
        </div>
        <div className="boxfortext">
          <p>
            {" "}
            The lesser angle in degrees between hours arrow and minutes arrow is{" "}
            <b> {angle}</b>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
