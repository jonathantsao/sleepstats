import { connect } from 'react-redux';
import usersList from './users_list';
import { getUsers } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    users: state.ui.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(usersList);
