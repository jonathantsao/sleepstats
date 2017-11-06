import { connect } from 'react-redux';
import interval from './interval';

const mapStateToProps = (state) => {
  return {
    interval: state.entities.interval
  };
};

export default connect(mapStateToProps, null)(interval);
