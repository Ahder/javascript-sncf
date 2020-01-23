import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'js-md5';

export class UserPanel extends React.Component<any, any>{
    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    };

    static defaultProps = {
        firstName: 'Redha',
        lastName: 'BENZINE',
        email: 'benzinered@gmail.com'
    };

    constructor(props) {
        super(props);
    }

 render() {
     return (
     <div>
         <p style = {{color: 'blue'}}>First Name: {this.props.firstName}</p>
         <p className="makeRed">Last Name: {this.props.lastName}</p>
         <p id="email" className="makeGreen">Email: {this.props.email}</p>
         <img src={"https://www.gravatar.com/avatar/" + md5(this.props.email)}/>
     </div>);
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

