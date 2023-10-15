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

  const all = good + bad + neutral;
  const avg = (all / 3).toFixed(2);
  const positiveFeedback = ((good / all) * 100).toFixed(2);
  console.log(all);
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
      <p>All : {all}</p>
      <p>Average : {avg}</p>
      <p>Positive : {positiveFeedback} %</p>
    </>
  );
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
