import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { UserPanel } from './UserPanel';

export default function App({name}) {
    return React.createElement('div', {style: { color: 'blue'}}, 'Paragraph de '+name,
     React.createElement("p", null, "Premier"));
}

App.propTypes = {
    name: PropTypes.string.isRequired,
}

App.defaultProps = {
    name: 'Redha',
}


export class AppClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement('p', {style: { color: 'blue'}}, 'Paragraph de '+this.props.name);
    }
}


ReactDOM.render(React.createElement(UserPanel,{}, null), document.getElementById('root'));
 


