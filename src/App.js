import React from 'react';
import Header from './Header';
import Card from './Card';
import './App.css';

const App = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Image 1',
      description: 'Description for Image 1',
      image: 'https://placekitten.com/200/300',
    },
    {
      id: 2,
      title: 'Image 2',
      description: 'Description for Image 2',
      image: 'https://placekitten.com/201/300',
    },
    {
      id: 3,
      title: 'Image 3',
      description: 'Description for Image 3',
      image: 'https://placekitten.com/202/300',
    },
    {
      id: 3,
      title: 'Image 3',
      description: 'Description for Image 3',
      image: 'https://placekitten.com/202/300',
    },
   
  ];

  return (
    <div className="App">
      <Header />
      <section className="card-container">
        {cardsData.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </section>
    </div>
  );
};

export default App;
