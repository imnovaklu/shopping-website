import React, { Component } from 'react';

class Details extends Component {
    render() {
        let {detailsState} = this.props.resolves;
        console.log(this.props.resolves);

        return (
            <span className="badge">React&Webpack Cli</span>
        );
    }
}

export default Details;