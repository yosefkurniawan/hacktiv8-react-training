import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Redirect } from "react-router-dom";

function Form(props) {
    const [redirect, setRedirect] = useState(false);

    const formik = useFormik({
        initialValues: {
            'name': '',
            'address': '',
            'zipcode': '',
            'telp': '',
            'email': '',
            'sent_at': new Date()
        },
        validationSchema: yup.object({
            name: yup.string()
                .min(3, 'Must be 3 characters or more!')
                .required('Required!'),
            address: yup.string()
                .required('Required!'),
            zipcode: yup.string('qweqwe')
                .min(5, 'Must be 5 Characters!')
                .max(5, 'Must be 5 Characters!')
                .required('Required!')
                .test('numeric', 'Must be numeric!',
                    function (value) {
                        return (!/^\d+$/.test(value)) ? false : true;
                    }),
            telp: yup.string()
                .required('Required!'),
            email: yup.string()
                .email('Invalid email address!')
                .required('Required!'),
            sent_at: yup.date()
                .required('Required!')            
        }),
        onSubmit: values => {
            const newMessage = JSON.stringify(values, null, 2);

            props.handleAddMessage(values);
            setRedirect(true);
        }
    });
    if(redirect) {
        return <Redirect to="/" />
    }
    return (
        <div className="form">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name" 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null }
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <textarea
                        type="text"
                        name="address"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <div className="error">{formik.errors.address}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="zipcode">Zip Code</label>
                    <input
                        type="text"
                        name="zipcode"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.zipcode}
                    />
                    {formik.touched.zipcode && formik.errors.zipcode ? (
                        <div className="error">{formik.errors.zipcode}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="telp">Telephone</label>
                    <input
                        type="text"
                        name="telp"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.telp}
                    />
                    {formik.touched.telp && formik.errors.telp ? (
                        <div className="error">{formik.errors.telp}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div>
                    <label htmlFor="sent_at">Delivery Time</label>
                    <input
                        type="text"
                        name="sent_at"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.sent_at}
                    />
                    {formik.touched.sent_at && formik.errors.sent_at ? (
                        <div className="error">{formik.errors.sent_at}</div>
                    ) : null}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Form;