import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
//import * as Yup from 'yup';


//const validationschema = yup.object.shape({
//    name: yup.string()
//        .min(2, 'must have two characters')
//        .max(255, 'must be shorter than 255 characters')
//        .required('must enter a name'),
//    email: yup.string()
//        .email('must enter a valid email')
//        .max('must be shorter than 255 characters')
//        .required('must enter an email'),
//    comment: yup.string()
//        .min(2, 'must enter two characters')
//        .max('must be shorter than 255 characters')
//        .required('must enter an comment')
//});

class ContactPage extends Component {
    render() {
        return (
            <div className="container">
                <h1>Contact</h1>
                <div className="card">
                    <div className="card-body">
                        <Formik
                            initialValues={{ uname: '', email: '', comment: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.uname) {
                                    errors.uname = 'Required';
                                } else if (values.uname.length < 2) {
                                    errors.uname = 'Must enter at least two characters';
                                }
                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }
                                if (!values.comment) {
                                    errors.comment = 'Required';
                                } else if (values.comment.length < 2) {
                                    errors.comment = 'Must enter at least two characters';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({ values, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Name: 
                                        <input
                                            type="text"
                                            name="uname"
                                            id="uname"
                                            placeholder="Enter your name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.uname}    
                                        />
                                        <ErrorMessage name="uname" component="div" touched="uname" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>Email: 
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="Enter your Email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}  
                                        />
                                        <ErrorMessage name="email" component="div" touched="email" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label>Comment: 
                                        <textarea
                                            name="comment"
                                            id="comment"
                                            placeholder="Enter your comment here"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.comment}                        
                                        />
                                        <ErrorMessage name="comment" component="div" touched="comment" />
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <button name="submit" type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactPage;
