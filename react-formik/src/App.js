import React, { useState } from 'react';
import Simpleform from './simple-form';
import Simpleformik from './simple-formik';
import Formikyup from './formik-yup';
import FieldLevelValidation from './formik-field-validation';

function App() {
  return (
    <div className="App">
      {/* <Simpleform/> */}
      {/* <Simpleformik /> */}
      {/* <Formikyup/> */}
      <FieldLevelValidation />
    </div>
  );
}

export default App;
