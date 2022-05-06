import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox';

function Horoscope() {
  return (
    <div className="Horoscope">
      <header className="Horoscope-header">
            <p>
                Title for the Horoscope Component
            </p>
      </header>
          <TextBox label={"Sun Sign"}/>
          <TextBox label={"Moon Sign"}/>
          <TextBox label={"Rising Sign"}/>
    </div>
  );
}

export default Horoscope;