import css from './Feedback.module.css';
import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiExpressionless } from "react-icons/bs";
import { BsEmojiAngry } from "react-icons/bs";


export default function Feedback({values, totalFeedback, positiveFeedback}) {
    
        return (
    <div>
        <p className={css.value}><BsEmojiGrin className={css.iconGreen}/> Good: {values.good} </p>
        <p className={css.value}><BsEmojiExpressionless className={css.iconOrange}/> Neutral: {values.neutral} </p>
        <p className={css.value}><BsEmojiAngry className={css.iconRed}/> Bad: {values.bad} </p>
        <p className={css.value}>Total: {totalFeedback}</p>
        <p className={css.value}>Positive: { positiveFeedback}</p>
    </div>

)
};
