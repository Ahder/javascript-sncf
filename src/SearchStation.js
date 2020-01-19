import React from 'react';
import InputComp from "./InputComp";
import ListingComp from "./ListingComp";


export class SearchStation extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stations: []
        };
        this.setGares = this.setGares.bind(this);
    }

    async setGares(gares) {
        this.setState({stations: gares});
    }

    render() {
        return (
            <div>
                <InputComp setGares={this.setGares}/>
                <ListingComp stations={this.state.stations}/>
            </div>
        );
    }

}
