import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import RegisterPage from '../components/Pages/RegisterPage';

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