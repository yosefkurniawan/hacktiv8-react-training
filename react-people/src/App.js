import React from 'react';

function UserInfo(props) {
  return (
    <>
      <p>
        Username: {props.username}
      </p>
      <p>
        Active: {props.active}
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <UserInfo username={'Yosef Kurniawan'} active={true}/>
      <UserInfo username={'Vinsensius Niko'} active={false} />
    </>
  )
}
export default App;
