import React, { Component } from 'react';
import Store from '../store';
import SearchBar from './searchBar';
import ProductCard from './productCard';
import 'bootstrap/dist/css/bootstrap.min.css';

class Kids extends Component {
    constructor(props){
        super(props);
    }

    render() {
        /*const {product} = Store.getState();
        const products = product.products.filter(item=>item.directory == "kids").map((item, index)=>(
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 card-container" key={index}>
                <ProductCard id={item.id} name={item.name} imgURL={item.imgUrl} directory="kids"/>
            </div>
        ));*/

        const {product} = Store.getState();
        const products = product.search_results
            .filter(item=>item.directory == "kids")
            .map((item, index)=>(
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 card-container" key={index}>
                    <ProductCard id={item.id} name={item.name} imgURL={item.imgUrl} directory="kids"/>
                </div>
            ));

        return (
            <div className="container">
                <SearchBar directory="kids"/>
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}


export default Kids;