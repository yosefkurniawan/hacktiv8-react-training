import React from 'react';
import './App.css';

function HabbitList(props) {
  return (
    <>
    {props.data.map(habbit => (
      <li key={habbit.habbit}>
        <span className={'status ' + (habbit.status == "Berhenti"? 'stop' : 'start')}>{habbit.status}</span>
        <span className="habbit">{habbit.habbit}</span>
      </li>
    ))}
    </>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      habbits : [
        {
          status: "Berhenti",
          habbit: "Pulang malam"
        },
        {
          status: "Mulai",
          habbit: "Baca buku"
        }
      ]
    }
    
    this.addHabbit = this.addHabbit.bind(this);
  }

  addHabbit(event) {
    event.preventDefault();
    // console.log(event.target);
    // console.log(event.target.status.value);
    // console.log(event.target.habbit.value);
    const status = event.target.status.value;
    const habbit = event.target.habbit.value;
    if(status && habbit) {
      var newHabbit = {
        status: status,
        habbit: habbit
      }

      this.setState((prevState) => {
        return {
          habbits: prevState.habbits.concat(newHabbit)
        };
      });

      event.target.habbit.value = '';
      event.target.status.value = 'Berhenti';
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Habbit App</h1>
        <form onSubmit={this.addHabbit}>
          <span className="field status">
            <select id="status">
              <option value="Berhenti">Berhenti</option>
              <option value="Mulai">Mulai</option>
            </select>
          </span>
          <span className="field habit">
            <input type="text" placeholder="habit..." name="habbit" />
          </span>
          <span className="field submit">
            <button type="submit" >SIMPAN </button>
          </span>
        </form>

        <div className="habbit-list">
          <ul>
            <HabbitList data={this.state.habbits} />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
