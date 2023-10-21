import React from 'react';

export class App extends React.Component {
  // App
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  feedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.bad + prevState.neutral + prevState.good,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return {
        positivePercentage: ((prevState.good / prevState.total) * 100).toFixed(
          2
        ),
      };
    });
  };

  render() {
    return (
      <div>
        {/* Section */}
        <h2>Please leave feedback</h2>
        {/* FeedbackOptions options={'good', 'neutral' } onLeaveFeedback={}>.*/}
        <button
          type="button"
          onClick={() => {
            this.feedback('good');
          }}
        >
          Good
        </button>
        <button
          type="button"
          onClick={() => {
            this.feedback('neutral');
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            this.feedback('bad');
          }}
        >
          Bad
        </button>

        {/* Section */}
        <h3>Statistics</h3>

        {/* Statistics */}
        <ul>
          <li>
            <span>Good: {this.state.good}</span>
          </li>
          <li>
            <span>Neutral: {this.state.neutral}</span>
          </li>
          <li>
            <span>Bad: {this.state.bad}</span>
          </li>
          <li>
            <span>Total: {this.state.total}</span>
          </li>
          <li>
            <span>Positive Feedback: {this.state.positivePercentage}</span>
          </li>
        </ul>
      </div>
    );
  }
}

