import React from 'react';
import HeaderStats from './header_stats';
import Timeline from './timeline';

class Interval extends React.Component {

  render() {
    if (!this.props.interval) {
      return <div></div>;
    } else {
      return (
        <div id="interval-section">
          <h3 id="interval-title">Interval Data</h3>
          <HeaderStats interval={this.props.interval} />
          <Timeline interval={this.props.interval} />
        </div>
      );
    }
  }

}

export default Interval;
