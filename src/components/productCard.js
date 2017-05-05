import React, { Component, PropTypes } from 'react';
import {UISref} from 'ui-router-react';
import '../public.less';
import './productCard.less';

class ProductCard extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {id, name, imgURL, directory} = this.props;

        return (
            <div className="card">
                <img src={imgURL} className="card-pic"/>
                <div className="card-title">
                    <p>{name}</p>
                    <UISref to="details" params={{directory: directory, productId: id}}>
                        <button className="btn-gold">Details</button>
                    </UISref>
                </div>
            </div>
        );
    }
}


ProductCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    imgURL: PropTypes.string
};

export default ProductCard;
