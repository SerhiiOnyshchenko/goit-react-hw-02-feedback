import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   return (
      <div>
         <p className={s.text}>
            Good:<span>{good}</span>
         </p>
         <p className={s.text}>
            Neutral:<span>{neutral}</span>
         </p>
         <p className={s.text}>
            Bad:<span>{bad}</span>
         </p>
         <p className={s.text}>
            Total:<span>{total}</span>
         </p>
         <p className={s.text}>
            Positive feedback:
            <span>{positivePercentage()}%</span>
         </p>
      </div>
   );
};

export default Statistics;
