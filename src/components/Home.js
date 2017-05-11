import React, { Component } from 'react';
import { Button } from 'reactstrap';



class Home extends Component {
constructor(props) {
    super(props);
    this.login = this.login.bind();
}

    render() {
        return (
            <div>
                <Button color="danger" onClick={() => this.login()}>LOGIN</Button>
            </div>
        );
    }


    
}

export default Home;