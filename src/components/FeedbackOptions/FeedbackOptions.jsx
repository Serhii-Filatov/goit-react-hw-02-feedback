import css from './FeedbackOption.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => {
              onLeaveFeedback(option.toLowerCase());
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
