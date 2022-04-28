import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import React, { Component } from 'react';

class App extends Component {
   state = {
      good: 0,
      neutral: 0,
      bad: 0,
      total: 0,
   };
   countTotalFeedback = () => {
      this.setState(prevState => ({
         total: prevState.good + prevState.neutral + prevState.bad,
      }));
   };
   countPositiveFeedbackPercentage = () => {
      const { good, total } = this.state;
      if (!good) {
         return 0;
      }
      const feedback = (good * 100) / total;
      return Math.round(feedback);
   };
   handelClick = async e => {
      const { name, nodeName } = e.target;
      if (nodeName === 'BUTTON') {
         await this.setState(prevState => ({ [name]: prevState[name] + 1 }));
      }
      this.countTotalFeedback();
   };
   render() {
      const { good, neutral, bad, total } = this.state;
      return (
         <div>
            <Section title="Please leave feedback">
               <FeedbackOptions
                  options={['Good', 'Neutral', 'Bad']}
                  onLeaveFeedback={this.handelClick}
               />
            </Section>
            <Section title="Statistics">
               {!total ? (
                  <Notification message="There is no feedback" />
               ) : (
                  <Statistics
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={total}
                     positivePercentage={this.countPositiveFeedbackPercentage}
                  />
               )}
            </Section>
         </div>
      );
   }
}

export default App;
