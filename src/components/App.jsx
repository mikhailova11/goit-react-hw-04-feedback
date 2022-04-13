import {useState} from "react";
import Statistics from "./Statistics";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Notification from './Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback =(button)=>{

    switch (button) {
      case 'good':
        setGood(good + 1)
        break;

      case 'neutral':
        setNeutral(neutral + 1)
        break;
      
      case 'bad':
        setBad(bad + 1)
        break;
    
      default:
        return;
    }
  }
  
  const countTotalFeedback = () => {
      return  good + neutral + bad
  } 

  const countPositiveFeedbackPercentage= () => {
      if(!good){
          return 0;
      }
      return ((good*100)/countTotalFeedback()).toFixed(0)
  }


  return (
      <div className='container'>
          <Section title="Please leave feedback"/>
          <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
          />


          <Section title="Statics"/>
          {good || neutral || bad 
          ?<Statistics 
              positivePercentage={countPositiveFeedbackPercentage} 
              total={countTotalFeedback} 
              good={good} 
              neutral={neutral} 
              bad={bad} />

          : <Notification message="There is no feedback"/>}
          

      </div>

  );
}