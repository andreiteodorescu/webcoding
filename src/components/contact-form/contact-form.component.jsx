import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import {Link} from "react-router-dom";


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
                    setTimeout(() => {
                        emailjs.send('service_n7mglhj', 'template_c16zy7i', values, "0d3uag0N3PvvnA3SG")
                            .then(function(response) {
                                //console.log('SUCCESS!', response.status, response.text);
                                document.querySelector(".component-contact").classList.add("d-flex-center");
                                document.querySelectorAll(".component-contact-initial, .component-contact-title").forEach(el => el.classList.add('d-none'))
                                document.querySelector(".component-contact-success").classList.add("d-block");
                                setSubmitting(false);
                            }, function(error) {
                                //console.log('FAILED...', error);
                                document.querySelector(".component-contact-failed").classList.add("d-block");
                                setSubmitting(false);
                            });
                    }, 300);
                }}
            >
                <Form>
                    <div className="component-contact-initial">
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
                    </div>
                    <div className="component-contact-success">
                        <h4 className="component-contact-after-title">Your message has been sent! <br/> Until I respond you can have a look at "My life in photos" section below or check out my <Link to="/resume">resume</Link></h4>
                    </div>
                    <div className="component-contact-failed">
                        <h4 className="component-contact-after-title">An error has occurred and your message was not sent!</h4>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;