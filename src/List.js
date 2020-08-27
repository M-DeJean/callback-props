import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {console.log(props.cards)}
        {props.cards.map((card) =>
          <Card
            handleDelete={props.handleDelete}
            key={card.id}
            id={card.id}
            title={card.title}
            content={card.content}
            listKey={props.id}
          />
        )}
        <button
          onClick={() => props.addCard(props.id)}
          className='List-add-button'
        > 
          + Add Random Card
        </button>
      </div>
    </section>
  )
};


