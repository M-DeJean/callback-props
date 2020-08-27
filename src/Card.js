import React from 'react';
import './Card.css';
// import './Messages.css';

// make the ReactDOM available, necessary for rendering the component

// make the App component available

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}
