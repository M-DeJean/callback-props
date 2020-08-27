import React, { Component } from 'react';
import List from './List'
import './App.css';

// function omit(obj, keyToOmit) {
//   let {[keyToOmit]: _, ...rest} = obj;
//   return rest;
// }
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

class App extends Component {

  state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm'],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: ['l', 'm'],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }

    handleDeleteItem = (id, listId) => {
      console.log(this.state.lists)
      console.log(id, listId)
      const newLists = [...this.state.lists];
      const listIndex = this.state.lists.findIndex(list => list.id === listId)
      const list = newLists[listIndex];
      const newCardIds = list.cardIds.filter(cardId => id !== cardId)
      const newList = {...list, cardIds: newCardIds}
      newLists[listIndex] = newList;

      this.setState({lists: newLists})
    }

    

  addRandomCard = (id) => {
      console.log(this.state.lists)
      const newCard = newRandomCard();
      const newLists = [...this.state.lists];
      const newCards = {...this.state.allCards, [newCard.id]:newCard};
      const listIndex = this.state.lists.findIndex(list => list.id === id)

      const thisList = newLists[listIndex];
      console.log(thisList);
      console.log(newCard);
      const newCardIds = [...thisList.cardIds, newCard.id]
      console.log(newCardIds);
      thisList.cardIds = newCardIds;
      newLists[listIndex] = thisList;
      console.log(newCards)
      console.log(newLists);
      
      this.setState({
        lists: newLists,
        allCards: newCards
      })

    }
  
  
  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.state.lists.map(list => (

            <List
              handleDelete={this.handleDeleteItem}
              addCard={this.addRandomCard}
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => this.state.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
