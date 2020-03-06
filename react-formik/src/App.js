import React, { useState } from 'react';
import Simpleform from './simple-form';
import Simpleformik from './simple-formik';
import Formikyup from './formik-yup';
import FieldLevelValidation from './formik-field-validation';
import FormUseFormikYup from "./formik-yup2";

function App() {
  return (
    <div className="App">
      <Simpleform/>
      <hr/>
      <Simpleformik />
      <hr />
      <Formikyup />
      <hr />
      <FormUseFormikYup />
      <hr />
      <FieldLevelValidation />
      <br/>
    </div>
  );
}

export default App;
