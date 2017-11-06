import { connect } from 'react-redux';
import usersList from './users_list';
import { getUsers, getUser } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    users: state.ui.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsers()),
    getUser: (id) => dispatch(getUser(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(usersList);
