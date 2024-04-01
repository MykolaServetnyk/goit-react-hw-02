import { useState } from 'react'
import './App.css'
import Description from '../Description/Description.jsx';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import clsx from 'clsx';

export default function App() {

  return (
    <>
      <Description />
      <Options/>
      <Feedback />

    </>
  );
};


