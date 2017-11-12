import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import InLineError from '../messages/InLineError'
import validator from 'validator';

class LoginFormComponent extends Component {
    state = {
        /* data : {
            email: "",
            password: ""
        }, */
        email: "",
        password: "",
        //loading: false,
        errors : {}
    };
/* onSubmit = () =>{
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length == 0){
        this.props.submit(this.state.data);
    }
}

validate = (data) => {
    const errors = {};
    if (!validator.isEmail(data.email)) errors.email = 'invalid email';
    if (!data.password) errors.password = 'cant be blank';
    return errors;
} */
onSubmit = () =>{
    const innerData = {email: this.refs.email.value, password: this.refs.password.value};
    const errors = this.validate(this.refs.email.value, this.refs.password.value);
    this.setState({ errors });
    if (Object.keys(errors).length == 0){
        this.setState({
            email : innerData.email,
            password : innerData.password
        })
        this.props.submit(this.state.email, this.state.password);
    }
}

validate = (argEmail, argPassword) => {
    const errors = {};
    if (!validator.isEmail(argEmail)) errors.email = 'invalid email';
    if (!argPassword) errors.password = 'cant be blank';
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