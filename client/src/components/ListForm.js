import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Form, Button } from 'semantic-ui-react'
import history from '../history';

// functional stateless component
const ListForm = (props) => {

    const renderError = ({error, touched}) => {
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    const renderInput = (formProps) => {
        const { input, label, meta } = formProps;
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
            return (
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} autoComplete="off" />
                    <div>{renderError(meta)}</div>
                </div>
            );
    }

    const onSubmit = (formValues) => {
        console.log('A');
        props.onSubmit(formValues);
        console.log('B');
        alert('List created')
        history.push('/')
    };


        return (
            <Container>
                <Form
                    onSubmit={props.handleSubmit(onSubmit)}>
                    <Field name="title" component={renderInput} label="Enter title: " />
                    <Field name="description" component={renderInput} label="Enter descripiton: " />

                    <Button color="violet">Submit</Button>
                </Form>
            </Container>
        );
    }

    const validate = (formValues) => {
        const errors = {};
        if(!formValues.title){
        errors.title = 'You must enter a title';
        }
        if(!formValues.description){
        errors.description = 'You must enter a description';
        }
        return errors;
    };
    
    export default reduxForm({
    form: 'ListForm',
    validate
    })(ListForm);
    