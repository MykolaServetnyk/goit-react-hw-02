import css from './Description.module.css';
import { SiCoffeescript } from "react-icons/si";
export default function Description() {
   return (
    <div className={css.desc}>
           <h1>Sip Happens Café <SiCoffeescript/></h1>
    <p>Please leave your feedback about our service by selecting one of the options below.</p>   
    </div>)
};
