import React, { Component } from "react";
import ReactDOM from "react-dom";
import Store from './store';
import {UIRouter, UIView, pushStateLocationPlugin} from 'ui-router-react';
import { getDetails } from './ajax/productAJAX';
import Header from './components/header';
import Login from './components/login';
import Women from './components/women';
import Girls from './components/girls';
import Kids from './components/kids';
import Details from './components/details'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const womenState = {
        name: 'women',
        url: '/women',
        component: Women
    },
    girlsState = {
        name: 'girls',
        url: '/girls',
        component: Girls
    },
    kidsState = {
        name: 'kids',
        url: '/kids',
        component: Kids
    },
    detailsState = {
        name: 'details',
        url: '/details/:directory/:productId',
        component: Details,
        resolve: [{
            token: 'detailsState',
            deps: ['$transition$'],
            resolveFn: (trans) => {
                return getDetails(trans.params().directory, trans.params().productId);
            }
        }]
    };

const App = () => {
    return (
        <UIRouter plugins={[pushStateLocationPlugin]} states={[womenState, girlsState, kidsState, detailsState]}>
            <div>
                <Login/>
                <Header/>
                <UIView/>
            </div>
        </UIRouter>
    )
};

const app = document.getElementById('root');
const renderDOM = () => {
    ReactDOM.render( App(), app);
};

renderDOM();
Store.subscribe(renderDOM);