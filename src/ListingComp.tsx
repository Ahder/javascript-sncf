import React from 'react';

export default class ListingComp extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Liste des gares</h1>
                <ul className="list-group">
                    {this.props.stations.map((value, index) => {
                        return <li>{value}</li>
                    })}
                </ul>
            </div>
        );
    }
}
