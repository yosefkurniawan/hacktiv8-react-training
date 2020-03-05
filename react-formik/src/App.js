import React, { useState } from 'react';
import Simpleform from './simple-form';
import Simpleformik from './simple-formik';
import Formikyup from './formik-yup';

function App() {
  return (
    <div className="App">
      {/* <Simpleform/> */}
      <Simpleformik />
      <Formikyup/>
    </div>
  );
}

export default App;
