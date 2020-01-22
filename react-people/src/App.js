import React from 'react';
import './App.css';

const styles = {
  header: {
    fontSize: '25px'
  }
}

function sortByPower (a, b) {
  return b.power - a.power;
}

function List(props) {
  return (
    <>
      <h1 style={styles.header}>React People!</h1>
      <ul>
        {props.data.sort(sortByPower).map(person => (
          <li key={person.name} className="list-item">
            <div className="list-item-image-container">
              <img src={person.thumbnail} />
            </div>
            <div className="list-item-name">
              {person.name} (Power:{''} <span className="list-item-power">{person.power}</span>)
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      human : [
        {
          name: 'Kuririn',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/pt/6/63/Kuririn_42311.png',
          power: 10
        },
        {
          name: 'Bulma',
          thumbnail: 'https://upload.wikimedia.org/wikipedia/hu/1/1c/Bulma.png',
          power: 3
        },
        {
          name: 'Chi-chi',
          thumbnail:
            'https://upload.wikimedia.org/wikipedia/hu/8/84/Chi-chi_dragon_ball_anime.jpg',
          power: 30
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <List data={this.state.human} />
      </div>
    )
  }
}
export default App;
