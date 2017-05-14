import { connect } from 'react-redux';
import { loginUser } from '../actions/authActions';
import LoginPage from '../components/Pages/LoginPage';

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.auth.isFetching,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginUser: (user) => {
            dispatch(loginUser(user));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);