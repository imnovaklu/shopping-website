import React, { Component } from 'react';
import Store from '../store';
import {UISref} from 'ui-router-react';
import {TOGGLE_LOGIN, LOGIN} from '../constants/actionTypes';
import $ from 'jquery';
import {configAJAX, getToken} from '../ajax/token';
import '../public.less';
import './login.less';

class Login extends Component {
    constructor(props){
        super(props);
        this.toggleLogin = this.toggleLogin.bind(this);
        this.login = this.login.bind(this);
        this.manage = this.manage.bind(this);
    }

    toggleLogin(){
        Store.dispatch({
            type: TOGGLE_LOGIN
        });
    }

    login(){
        getToken((token)=>{
            console.log("token", token);
            $.ajax(
                configAJAX('/api/user/login','POST', {
                    username: this.refs.input_username.value,
                    password: this.refs.input_password.value,
                    token: token
                }))
                .done((resp)=>{
                    console.log("login information: ", resp);
                    Store.dispatch({
                        type: LOGIN,
                        user: resp
                    })
                })
                .fail((err)=>{
                    console.log("error", err)
                })
        });
    }

    render() {
        let {style, user} = Store.getState();
        let {loginStyle} = style;
        let closeBtnText = loginStyle == "login-opened"? ">": "<";
        let isLogin = JSON.stringify(user.loginUser) != "{}";
        console.log(isLogin);

        return (
            <div className={`login-container ${loginStyle}`}>
                <button className="close" onClick={this.toggleLogin}>{closeBtnText}</button>
                {!isLogin &&
                <form autocomplete="off">
                    <input style={{"display":"none"}} type="text" name="fakeusernameremembered"/>
                    <input style={{"display":"none"}} type="password" name="fakepasswordremembered"/>
                    <input type="text" placeholder="USERNAME" ref="input_username" required="" autocomplete="hey how are you"/>
                    <input type="password" placeholder="PASSWORD" ref="input_password" required="" autocomplete="new-password-is-what-i-mean"/>
                    <button className="btn-gold" type="button" onClick={this.login}>LOGIN</button>
                </form>}
                {isLogin &&
                <form autocomplete="off">
                    <label>YOUR USERNAME:</label>
                    <input type="text" disabled="disabled" defaultValue={user.loginUser.username}/>
                    <label>YOUR ROLE:</label>
                    <input type="text" disabled="disabled" defaultValue={user.loginUser.role}/>
                    <UISref to="manage" params={{directory: directory, productId: id}}>
                        <button className="btn-gold" type="button">MANAGE</button>
                    </UISref>
                </form>
                }
            </div>
        );
    }
}

export default Login;
