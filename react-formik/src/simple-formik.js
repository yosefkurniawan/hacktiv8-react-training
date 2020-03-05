// Render Prop

import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

// Synchronus Validation
const syncValidate = (
    values, 
    props   /* only available when using withFormik */
) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid Email Address";
    }
    if (!values.username) {
        errors.username = "Required"
    }
    return errors;
}

// Aynchronus Validation
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = (
    values, 
    props   /* only available when using withFormik */
) => {
    return sleep(2000).then(() => {
        const errors = {};
        if (!values.email) {
            errors.email = "Required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Invalid Email Address";
        }
        if (!values.username) {
            errors.username = "Required"
        }
        return errors;
    });
}

const Simpleformik = () => (
    <div>
        <h1>Any place in your app!</h1>
        <Formik
            initialValues={{ email: "", username: "", password: ""}}
            validate={(values, props) => syncValidate(values, props)}
            // validate={(values, props) => asyncValidate(values, props)}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400)
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
                /* and other goodies */
            }) => (
                <Form>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="text" name="username" />
                    <ErrorMessage name="username" component="div" />
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}

        </Formik>
    </div>
)

export default Simpleformik;