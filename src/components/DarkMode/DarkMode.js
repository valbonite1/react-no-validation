import React, { useState } from 'react';
import './DarkMode.css';

const DarkMode = () => {
  
  const initialState = JSON.parse(localStorage.getItem('checkedState'));
  const [checked,setChecked] = useState(initialState);

  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;


  if (localStorage) {
    theme = localStorage.getItem("theme");

  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setChecked(!checked)
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setChecked(true);
    }
  };

  const handleCheck = () => {
    if(checked === true) {
      JSON.stringify(localStorage.setItem('checkedState', false));
      
    } else {
      JSON.stringify(localStorage.setItem('checkedState', true));     
    }
  }

  return(
    <>
      <div className='toggle-container'>
        <label className="switch">
          <input className="switch__input" onChange={handleCheck} type="checkbox" checked={checked} onClick={switchTheme} />
          <span className="switch__slider"></span>
        </label>
      </div>
    </>

  );
}

export default DarkMode;