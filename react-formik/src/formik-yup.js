import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const signupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too long!")
        .required('Required'),
    lastname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too long!")
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
});

export const ValidationSchemaSample = () => (
    <div>
        <h1>Simple Validation Schema with Yup</h1>

        <Formik
            initialValues={{firstname:'', lastname:'', email:''}}
            validationSchema={signupSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values)
            }}
        >
            {({
                errors,
                touched
            }) => (
                <Form>
                    <Field name="firstname" />
                    { errors.firstname && touched.firstname ? (
                        <div>{errors.firstname}</div>
                    ) : null }
                    <Field name="lastname" />
                    { errors.lastname && touched.lastname ? (
                        <div>{errors.lastname}</div>
                    ) : null }
                    <Field name="email" />
                    { errors.email && touched.email ? (
                        <div>{errors.email}</div>
                    ) : null }
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
)

export default ValidationSchemaSample;