import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'js-md5';

export class UserPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement('div',{}, null,
        React.createElement('p',  {style: { color: 'red'}}, 'First Name: '+this.props.firstName),
        React.createElement('p',  {style: { color: 'blue'}}, 'Last Name: '+this.props.lastName),
        React.createElement('p',  {style: { color: 'green'}}, 'Email: '+this.props.email),
        React.createElement('img',  { src : 'https://www.gravatar.com/avatar/'+md5(this.props.email) }, null),
        );
    }
}

// customProp: function(props, propName, componentName) {
//     if (typeof propName !== string) {
//       return new Error(
//         'Invalid prop `' + propName + '` supplied to' +
//         ' `' + componentName + '`. Validation failed.'
//       );
//     }
// }

UserPanel.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

UserPanel.defaultProps = {
    firstName: 'Redha',
    lastName: 'BENZINE',
    email: 'benzinered@gmail.com'
}