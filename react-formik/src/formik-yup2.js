import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormUseFormikYup = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string()
                .max(15, 'Must be 15 characters of less!')
                .min(2, 'Must be 2 characters of more!')
                .required('Required!'),
            lastname: Yup.string()
                .max(15, 'Must be 15 characters of less!')
                .min(2, 'Must be 2 characters of more!')
                .required('Required!'),
            email: Yup.string()
                .email('Invalid email address!')
                .required('Required!')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input 
                name="firstname" 
                id="firstname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
                <div>{formik.errors.firstname}</div>
            ) : null }
            <label htmlFor="lastname">Last Name</label>
            <input
                name="lastname"
                id="lastname"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
                <div>{formik.errors.lastname}</div>
            ) : null}
            <label htmlFor="email">Email</label>
            <input
                name="email"
                id="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormUseFormikYup;