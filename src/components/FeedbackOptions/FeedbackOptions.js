import s from './FeedbackOptions.module.css';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
      <div className={s.btn} onClick={onLeaveFeedback}>
         {options.map(name => {
            return (
               <button
                  key={shortid.generate()}
                  type="button"
                  name={name.toLowerCase()}
               >
                  {name}
               </button>
            );
         })}
      </div>
   );
};

export default FeedbackOptions;
