import { connect } from 'react-redux';
import intervalList from './interval_list';
import { getInterval } from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    intervalList: state.ui.viewedUserIntervals,
    user: state.ui.viewedUser,
    users: state.ui.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInterval: (userId, mappedId) => dispatch(getInterval(userId, mappedId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(intervalList);
