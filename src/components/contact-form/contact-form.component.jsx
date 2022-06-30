import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';

const MyTextInput = ({ label, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <textarea className="form-textarea" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};


// And now we can use these
const ContactForm = () => {
    return (
        <>
            <Formik
                initialValues={{
                    userName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .required('Required'),
                    message: Yup.string()
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
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
                <Form>
                    <MyTextInput
                        label="Name"
                        name="userName"
                        type="text"
                    />

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                    />

                    <MyTextArea
                        label="Message"
                        name="message"
                    />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default ContactForm;

/*
class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            description: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ name: '', email: '', description: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className="component-contact white-cut-top white-cut-bottom component-margin">
                <div className="container">
                    <h4 className="general-title component-contact-title text-center">Let's Talk</h4>

                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 component-contact-field-wrap">

                                <FormInput
                                    name='name'
                                    type='text'
                                    handleChange={this.handleChange}
                                    value={this.state.name}
                                    label='Name'
                                    required
                                />
                            </div>
                            <div className="col-md-6 component-contact-field-wrap">

                                <FormInput
                                    name='email'
                                    type='email'
                                    handleChange={this.handleChange}
                                    value={this.state.email}
                                    label='Email'
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 component-contact-field-wrap">
                                <FormTextarea
                                    name='description'
                                    handleChange={this.handleChange}
                                    value={this.state.description}
                                    label='Your message'
                                    required
                                />
                            </div>
                        </div>

                        <CustomButton type='submit'> Send </CustomButton>
                    </form>
                </div>
            </div>
        );
    }
}

export default ContactForm;*/
