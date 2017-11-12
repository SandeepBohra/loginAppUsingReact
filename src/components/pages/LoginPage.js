import React, { Component } from 'react';
import LoginFormComponent from '../forms/LoginForm';

class LoginPage extends React.Component{
    
submit(email, pass){
    console.log(email);
    console.log(pass);
}

    render() {
        return (
            <div>
                <h1>Login Page </h1>
                <LoginFormComponent submit= {this.submit}/>
            </div>
        )};
};

export default LoginPage;