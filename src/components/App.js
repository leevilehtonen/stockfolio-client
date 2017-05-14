import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header';
import Wrapper from './Wrapper';
import AlertContainer from 'react-alert';
import alertOptions from '../utils/alertConfig';
import { recieveMessage } from '../actions/msgActions';
import { loadInitialState } from '../actions/mainActions';

class App extends Component {
    constructor(props) {
        super(props);

        this.showMessage = this.showMessage.bind(this);

    }
    
    componentWillMount() {
        this.props.loadInitialState();
    }
    

    showMessage = () => {
        this.msg.show(this.props.msg, {
            type: this.props.color
        });
        this.props.recieveMsg();
    }
    render() {

        return (
            <div className="container">
                <AlertContainer ref={a => this.msg = a} {...alertOptions} />
                <Header />
                <Wrapper />
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.shouldSendMessage) {
            this.showMessage();
        }
    }
   
    

}

const mapStateToProps = (state, ownProps) => {
    return {
        shouldSendMessage: state.msg.shouldSendMessage,
        msg: state.msg.msg,
        color: state.msg.color
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadInitialState: () => {
            dispatch(loadInitialState())
        },
        recieveMsg: () => {
            dispatch(recieveMessage())
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);