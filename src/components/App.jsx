import React from "react";
import Statistics from "./Statistics";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Notification from './Notification';
import PropTypes from "prop-types";


class App extends React.Component {
  state = {
      good: 0,
      neutral: 0,
      bad: 0
    }

  static propTypes = {
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
  };

  onLeaveFeedback =(button)=>{
    return this.setState({[button] : this.state[button] + 1})
  }
  
  countTotalFeedback = () => {
      const { good, neutral, bad} = this.state;
      return  good + neutral + bad
  } 

  countPositiveFeedbackPercentage= () => {
      const {good} = this.state;

      if(!good){
          return 0;
      }
      return ((good*100)/this.countTotalFeedback()).toFixed(0)
  }


render() {
    const {good, neutral, bad} = this.state
    
    
  return (
      <div className='container'>
          <Section title="Please leave feedback"/>
          <FeedbackOptions 
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
          />


          <Section title="Statics"/>
          {good || neutral || bad 
          ?<Statistics 
              positivePercentage={this.countPositiveFeedbackPercentage} 
              total={this.countTotalFeedback} 
              good={good} 
              neutral={neutral} 
              bad={bad} />

          : <Notification message="There is no feedback"/>}
          

      </div>

  );
}
}

export default App;