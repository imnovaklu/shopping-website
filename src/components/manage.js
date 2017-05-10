import React, { Component } from 'react';
import Store from '../store';
import Loading from './loading';
import 'bootstrap/dist/css/bootstrap.min.css';
import './manager.less';

class Manage extends Component {

    constructor(props){
        super(props);
        this.state = {
            edit_button_text: 'Edit',
            disabled: true
        };
        this.edit = this.edit.bind(this);
    }

    edit(){
        let text = this.state.edit_button_text == 'Edit'? 'Save': 'Edit';
        this.setState({
            edit_button_text: text,
            disabled: !this.state.disabled
        })
    }

    render() {
        const {product} = Store.getState();
        let {products, fetching, fetched, fetch_error} = product;
        console.log(`fetching: ${fetching}, fetched: ${fetched}, error: ${fetch_error}`);
        products = products.map((item, index)=>(
            <tr key={index}>
                <td><input type="text" disabled={this.state.disabled} defaultValue={item.name}/></td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={item.directory}/>
                </td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={item.price}/>
                </td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={item.discount}/>
                </td>
                <td className="reduced-width">
                    <input type="text" disabled={this.state.disabled} defaultValue={item.amount}/>
                </td>
                <td><input type="text" disabled={this.state.disabled} defaultValue={item.colors}/></td>
                <td><input type="text" disabled={this.state.disabled} defaultValue={item.description}/></td>
                <td>
                    <button className="btn btn-success" onClick={this.edit}>{this.state.edit_button_text}</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        ));

        return (
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                    {fetched &&
                    <table className="table table-bordered table-hover table-responsive table-theme">
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td className="reduced-width">directory</td>
                            <td className="reduced-width">price</td>
                            <td className="reduced-width">discount</td>
                            <td className="reduced-width">amount</td>
                            <td>colors</td>
                            <td>description</td>
                            <td>operations</td>
                        </tr>
                        </thead>
                        <tbody>
                        {products}
                        </tbody>
                    </table>
                    }
                    {fetching &&
                        <Loading/>
                    }
                    {fetch_error &&
                        <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default Manage;