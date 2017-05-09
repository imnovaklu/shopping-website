import React, { Component } from 'react';
import { getDetails, getProducts } from '../ajax/productAJAX';

class Manage extends Component {

    componentWillMount(){
        getProducts((resp)=>{
            console.log(resp);
        })
    }

    render() {

        let {manageState} = this.props.resolves;
        console.log(this.props.resolves);

        return (
            <span className="badge">Managing</span>
        );
    }
}

export default Manage;