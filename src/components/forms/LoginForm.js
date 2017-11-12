import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import InLineError from '../messages/InLineError'
import validator from 'validator';

class LoginFormComponent extends Component {

    constructor(props){
        super(props);
        this.state =  {
            email: "",
            password: "",
            errors : {}
        }
    }


onSubmit = () =>{
    const innerData = {email: this.refs.email.value, password: this.refs.password.value};
    const returnedErrors = this.validate(innerData.email, innerData.password);
    Object.assign(this.state, {errors: returnedErrors});
    if (Object.keys(this.state.errors).length == 0){
        Object.assign(this.state, {email: innerData.email, password: innerData.password});
        this.props.submit(this.state.email, this.state.password);
    }
}

validate = (argEmail, argPassword) => {
    const errors = {};
    if (!validator.isEmail(argEmail)) errors.email = 'invalid email';
    if (!argPassword) errors.password = 'cant be blank';
    this.setState({ errors : errors });
    return errors;
}


    render() {
        const {data, errors} = this.state;
        return (
            <Form onSubmit={this.onSubmit}> 
                <Form.Field error={!!errors.email}> 
                    <label htmlFor="email">Email </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        placeholder="example@example.com"
                        //value={this.state.data.email} 
                        ref = "email"
                    />
                    {errors.email && <InLineError text = {errors.email} />}
                </Form.Field>
                <Form.Field> 
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        //value={this.state.data.password}
                        ref = "password"
                        />
                        />
                    {errors.password && <InLineError text = {errors.password} />}
                </Form.Field>
                <Button primary>Login </Button>
            </Form>
        );
    }
}

export default LoginFormComponent;