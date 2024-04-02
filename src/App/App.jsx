import { useState } from 'react'
import './App.css'
import Description from '../Description/Description.jsx';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import clsx from 'clsx';

export default function App() {
  const [values, setValues] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  });

   const totalFeedback = values.good + values.neutral + values.bad;

//   const update = {
//   good ()  {
// 			setValues({
// 			...values,
// 			good: values.good + 1
// 		});
// 	},

// 	neutral  ()  {
// 		setValues({
// 			...values,
// 			neutral: values.neutral + 1
// 		});
// 	},
// 	bad  ()  {
// 		setValues({
// 			...values,
// 			bad: values.bad + 1
// 		});
// 	}
// }
const updateFeedback = feedbackType => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1
    });
};
  
  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback}/>
       {totalFeedback > 0 && <Feedback values={values} />}

    </>
  );
};


