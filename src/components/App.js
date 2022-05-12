import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import React, { Component } from 'react';
import s from './App.module.css';

class App extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
      options: ['Good', 'Neutral', 'Bad'],
   };

   countPositiveFeedbackPercentage = () => {
      const { good, neutral, bad } = this.state;
      if (!good) {
         return 0;
      }
      const total = good + neutral + bad;
      const feedback = (good * 100) / total;
      return Math.round(feedback);
   };
   handelClick = name => {
      this.setState(prevState => ({ [name]: prevState[name] + 1 }));
   };
   countTotalFeedback = () => {
      const { good, bad, neutral } = this.state;
      return good + neutral + bad;
   };
   render() {
      const { good, neutral, bad, options } = this.state;
      return (
         <div className={s.main}>
            <Section title="Please leave feedback">
               <FeedbackOptions
                  options={options}
                  onLeaveFeedback={this.handelClick}
               />
            </Section>
            <Section title="Statistics">
               {!(good + neutral + bad) ? (
                  <Notification message="There is no feedback" />
               ) : (
                  <Statistics
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={this.countTotalFeedback()}
                     percentage={this.countPositiveFeedbackPercentage()}
                  />
               )}
            </Section>
         </div>
      );
   }
}

export default App;
