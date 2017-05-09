import React, { Component } from 'react';
import Store from '../store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './manager.less';

class Manage extends Component {



    render() {
        const {product} = Store.getState();
        console.log('product', product);
        const products = product.products.map((item, index)=>(
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.directory}</td>
                <td>{item.price}</td>
                <td>{item.discount}</td>
                <td>{item.amount}</td>
                <td>{item.colors}</td>
                <td>{item.description}</td>
                <td>
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-success">Delete</button>
                </td>
            </tr>
        ));
        console.log('products',products);

        return (
            <div className="container">
                <table className="table table-bordered table-hover table-striped table-responsive">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>directory</td>
                        <td>price</td>
                        <td>discount</td>
                        <td>amount</td>
                        <td>colors</td>
                        <td>description</td>
                        <td>operations</td>
                    </tr>
                    </thead>
                    <tbody>
                    {products}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Manage;