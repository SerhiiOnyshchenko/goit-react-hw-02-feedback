import s from './FeedbackOptions.module.css';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
      <div className={s.container} onClick={onLeaveFeedback}>
         {options.map(name => {
            return (
               <div className={s.btn} key={shortid.generate()}>
                  <button type="button" name={name.toLowerCase()}>
                     {name}
                  </button>
               </div>
            );
         })}
      </div>
   );
};

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
   onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
