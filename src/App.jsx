import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlegood = () => {
    setGood(good + 1);
  };
  const handleneutral = () => {
    setNeutral(neutral + 1);
  };
  const handlebad = () => {
    setBad(bad + 1);
  };
  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleClick={handlegood} text="Good" />
      <Button handleClick={handleneutral} text="Neutral" />
      <Button handleClick={handlebad} text="Bad" />
      <h2>Statistics</h2>
      <br />
      <p>Good : {good}</p>
      <p>Neutral : {neutral}</p>
      <p>Bad : {bad}</p>
    </>
  );
};

const Button = ({ text, handleClick }) => {
  console.log(text);
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
