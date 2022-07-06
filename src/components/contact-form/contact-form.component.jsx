import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';


// And now we can use these
const ContactForm = () => {
    return (
        <div className="container">
            <h4 className="general-title component-contact-title text-center">Let's Talk</h4>
            <Formik
                initialValues={{
                    userName: '',
                    email: '',
                    message: '',
                }}
                validationSchema={Yup.object().shape({
                    userName: Yup.string()
                        .required('This field is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('This field is required'),
                    message: Yup.string()
                        .required('This field is required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        /*emailjs.send("service_n7mglhj","template_c16zy7i", values, "0d3uag0N3PvvnA3SG");
                        setSubmitting(false);*/


                        emailjs.send('service_n7mglhj', 'template_c16zy7i', values, "0d3uag0N3PvvnA3SG")
                            .then(function(response) {
                                console.log('SUCCESS!', response.status, response.text);
                                setSubmitting(false);
                            }, function(error) {
                                console.log('FAILED...', error);
                                setSubmitting(false);
                            });
                    }, 400);

                    /*emailjs.send('service_n7mglhj', 'template_c16zy7i', values, "0d3uag0N3PvvnA3SG")
                        .then(function(response) {
                            console.log('SUCCESS!', response.status, response.text);
                            setSubmitting(false);
                        }, function(error) {
                            console.log('FAILED...', error);
                            setSubmitting(false);
                        });*/
                }}
            >
                {({ errors, touched }) => (
                <Form>
                    <div className="component-contact-field-wrap">
                        <ErrorMessage component="div" name="userName" className="error" />
                        <Field name="userName" id="userName" type="text" className="input-field" placeholder="Name"  />
                        <label className="component-contact-label" htmlFor="userName">Name</label>
                    </div>

                    <div className="component-contact-field-wrap">
                        <ErrorMessage component="div" name="email" className="error" />
                        <Field name="email" id="email" type="email" className="input-field" placeholder="Email address" />
                        <label className="component-contact-label" htmlFor="email">Email address</label>
                    </div>

                    <div className="component-contact-field-wrap">
                        <ErrorMessage component="div" name="message" className="error" />
                        <Field name="message" id="message" as="textarea" className="input-field" cols="40" rows="10" placeholder="Message" />
                        <label className="component-contact-label" htmlFor="message">Message</label>
                    </div>

                    <div className="component-contact-submit-wrap">
                        <button className="btn-primary" type="submit">Send</button>
                    </div>
                </Form>
                    )}
            </Formik>
        </div>
    );
};

export default ContactForm;