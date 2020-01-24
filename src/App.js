import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {UserPanel} from "./UserPanel";
import {SearchStation} from "./SearchStation";

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/station">Search station</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
                        </li>
                    </ul>
                </nav>

                <Route exact path="/station" component={SearchStation}/>
                <Route exact path="/user" component={UserPanel}/>
            </div>
        </Router>
    );
}
