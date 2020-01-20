import React from 'react';

function App() {
  const people = [
    { name: "Yosef Kurniawan" },
    { name: "Vinsensius Niko" },
    { name: "Abdurahman Ragum" }
  ]
  return (
    <>
      <h1>React People!</h1>
      <ul>
        {people.map(person => <li key={person.name}>{person.name}</li>)}
      </ul>
    </>
  );
}

export default App;
