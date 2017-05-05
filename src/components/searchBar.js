import React, { Component } from 'react';
import Store from '../store';
import {SEARCH_PRODUCT} from '../constants/actionTypes';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public.less';
import './searchBar.less';

class SearchBar extends Component {

    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }

    search(event){
        Store.dispatch({
            type: SEARCH_PRODUCT,
            directory: this.props.directory,
            text: event.target.value
        });
    }

    render() {

        return (
            <div className="search-bar">
                <input type="text" placeholder="search" onChange={this.search}/>
            </div>
        );
    }
}

export default SearchBar;