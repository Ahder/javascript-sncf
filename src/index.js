import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { UserPanel } from './UserPanel';

function App({ isLogged }) {
    const name = 'Redha';
const welcoming = <p>Bonjour {name}</p>

return (
    <>
    {     isLogged ? (
        <span> true</span>
         ) : (
            <span> false</span>
         )
        
    }
    </>
)
}

ReactDOM.render(<UserPanel firstName="Basptiste"/>, document.getElementById('root'));
 


