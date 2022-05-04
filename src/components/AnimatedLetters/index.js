import React from 'react';
import "./index.scss";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  return (
    <span>
      {
        strArray.map((char, i) => {
          return (
            <span key={char + i} className={`${letterClass} _${i + index}`}>
              {char}
            </span>
          )
        })
      }
    </span>
  )
}

export default AnimatedLetters;