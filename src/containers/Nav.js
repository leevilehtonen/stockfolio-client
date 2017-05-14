import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
import Navbar from '../components/Navbar';

const mapStateToProps = (state, ownProps) => {
    return {
        items: state.auth.links,
        location: state.router.location
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return  {

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);