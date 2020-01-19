import React from 'react';
import {launchSncfRequest} from "./fncs";


export default class InputComp extends React.Component {

    constructor(props) {
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    async onChangeInput(e) {
        let gares = await launchSncfRequest(e.target.value) || [];
        await this.props.setGares(gares);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" type="text" id={"input-search"} onChange={this.onChangeInput}
                           placeholder="Enter le nom d'une gare/ville"/>
                </div>
            </form>
        );
    }
}

