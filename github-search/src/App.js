import React, { useState } from 'react';
import { thunk_action_creator } from './actions/fetchAction';
import { connect } from 'react-redux';
import UserInfo from './userInfo';

function App({data, dispatch}) {
  const [username, setUsername] = useState('');
  
  function hanldeSubmit(e) {
    e.preventDefault();
    dispatch(thunk_action_creator(username));
    setUsername('');
  }

  function handleInput(e) {
    setUsername(e.target.value);
  }

  console.log(data);

  return (
    <div className="container">
      <h1>Github Search</h1>
      <form onSubmit={hanldeSubmit}>
          <input
            type="text"
            name="username"
            onChange={handleInput}
            placeholder="Enter Github Username"
            value={username}
          />
          <button className="button" type="submit">
            Submit
          </button>
      </form>
      {data.isFetching ? <div>Loading...</div> : null}
      {data.isError ? <div className="error">User not found!</div> : null}
      {Object.keys(data.userData).length > 0 ? (
        <UserInfo user={data.userData} />
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(App);
