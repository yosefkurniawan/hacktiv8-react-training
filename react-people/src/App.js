import React from 'react';

function List(props) {
  return (
    <>
      <h1>React People!</h1>
      <ul>
        {props.data.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </>
  );
}

function App() {
  const saiyan = [
    { name: "Son Go Ku" },
    { name: "Bezita" },
    { name: "Son Gohan" }
  ];
  const human = [
    { name: "Kuririn" },
    { name: "Bulma" },
    { name: "Chi-chi" }
  ]
  return (
    <>
      <List data={human} />
      <List data={saiyan} />
    </>
  )
}
export default App;
