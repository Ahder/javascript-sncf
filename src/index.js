import React from 'react';
import ReactDOM from 'react-dom';
import {SearchStation} from './SearchStation';
import 'bootstrap/dist/css/bootstrap.min.css';

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

ReactDOM.render(<SearchStation/>, document.getElementById('root'));
 


