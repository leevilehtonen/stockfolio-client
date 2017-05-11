import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Home from './Home';
import Quote from './Quote';
import Private from './Private'

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={"display-1"}>Hello, world!</h1>
                <Button color="danger">Danger</Button>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/quote">Quote</Link></li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route path="/quote" component={Quote} />
                <Route path="/private" component={Private} />
            </div>
        );
    }
}

export default App;