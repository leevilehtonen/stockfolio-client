import { connect, bindActionCreators } from 'react-redux';
import { registerUser } from '../actions/authActions';
import RegisterPage from '../components/RegisterPage';

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.auth.isFetching,
        statusText: state.auth.statusText
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        registerUser: (user) => {
            dispatch(registerUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);