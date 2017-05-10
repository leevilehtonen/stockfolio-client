import React, { Component } from 'react';
import {Button} from 'reactstrap';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className={"display-1"}>Hello, world!</h1>
                <Button color="danger">Danger</Button>

            </div>
        );
    }
}

export default App;