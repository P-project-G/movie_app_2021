import React from 'react';
import Proptypes from "prop-types";

function Chip({name,picture,rating}){
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="240" height="240" />
    </div>
    );
}

Chip.propTypes = {
  name: Proptypes.string.isRequired,
  picture: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired

};

const chipILike = [
  {
    id:1,
    name: "Pocachip",
    image:
      "http://img.danawa.com/prod_img/500000/634/368/img/7368634_1.jpg?shrink=360:360&_v=20190304161119",
    rating:4.8
  },
  {
    id:2,
    name: "Swingchip",
    image:
      "http://img.danawa.com/prod_img/500000/275/736/img/4736275_1.jpg?shrink=360:360&_v=20161208143832",
    rating:4.5
  },
  {
    id:3,
    name: "Ggobookchip",
    image:
      "https://contents.lotteon.com/itemimage/_v070756/LM/88/01/11/77/84/50/8_/00/1/LM8801117784508_001_1.jpg/dims/resizef/720X720",
    rating:4.2
  },
  {
    id:4,
    name: "Sunchip",
    image:
      "https://contents.lotteon.com/itemimage/_v092659/LI/15/49/51/51/00/_1/LI1549515100_1_1.jpg/dims/resizef/720X720",
    rating:4.3
  }
];

function App() {
  return (
    <div className="App">
      <h1>HELLO~</h1>
      {chipILike.map(chips =>(
        <Chip
          key={chips.id}
          name={chips.name}
          picture={chips.image}
          rating={chips.rating} />
      ))}
    </div>
  );
}

export default App;
