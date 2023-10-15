import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const handlegood = () => {
    setAll(all + 1);
    setGood(good + 1);
  };
  const handleneutral = () => {
    setAll(all + 1);
    setNeutral(neutral + 1);
  };
  const handlebad = () => {
    setAll(all + 1);
    setBad(bad + 1);
  };

  const total = all;
  const avg = (all / 3).toFixed(2);
  let positiveFeedback = parseFloat(((good / all) * 100).toFixed(2));
  if (!positiveFeedback) positiveFeedback = 0;
  console.log(all);
  return (
    <>
      <h2>Give Feedback</h2>
      <Button handleClick={handlegood} text="Good" />
      <Button handleClick={handleneutral} text="Neutral" />
      <Button handleClick={handlebad} text="Bad" />
      <h2>Statistics</h2>
      <StatisticsTable
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        avg={avg}
        positiveFeedback={positiveFeedback}
      ></StatisticsTable>
    </>
  );
};
const StatisticsTable = ({
  good,
  bad,
  neutral,
  total,
  avg,
  positiveFeedback,
}) => {
  console.log(good, bad, neutral, total, avg, positiveFeedback);

  if (total === 0) {
    return <p>No Feedback given</p>;
  } else {
    return (
      <>
        <Statistics text="Good" value={good} />
        <Statistics text="Neutral" value={neutral} />
        <Statistics text="Bad" value={bad} />
        <Statistics text="All" value={total} />
        <Statistics text="Average" value={avg} />
        <Statistics text="Positive(%)" value={positiveFeedback} />
      </>
    );
  }
};
const Statistics = ({ text, value }) => {
  return (
    <p>
      {text} : {value}
    </p>
  );
};
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default App;
