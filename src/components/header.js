import React, { Component } from 'react';
import Store from '../store';
import { UISref, UISrefActive} from 'ui-router-react';
import {CLEAR_SEARCH} from '../constants/actionTypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public.less'
import './header.less';

class Header extends Component {

    handleRedirect(){
        Store.dispatch({
            type: CLEAR_SEARCH
        });
    }

    render(){
        return (
            <nav className="navbar-wide">
                <h2>SHOPPING WEBSITE</h2>
                <ul className="inline-list">
                    <li onClick={this.handleRedirect}>
                        <UISrefActive class="active">
                            <UISref to="women"><a>WOMEN</a></UISref>
                        </UISrefActive>
                    </li>
                    <li onClick={this.handleRedirect}>
                        <UISrefActive class="active">
                            <UISref to="girls"><a>GIRLS</a></UISref>
                        </UISrefActive>
                    </li>
                    <li onClick={this.handleRedirect}>
                        <UISrefActive class="active">
                            <UISref to="kids"><a>KIDS</a></UISref>
                        </UISrefActive>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;