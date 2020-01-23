import React from 'react';

export default class ListingComp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 align="center">Liste des gares</h1>
                <ul className="list-group">
                    {this.props.stations.map((value, index) => {
                        return <li class="list-group-item">{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}
