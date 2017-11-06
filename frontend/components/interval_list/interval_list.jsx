import React from 'react';

class IntervalList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getName = this.getName.bind(this);
  }

  handleClick(mappedId) {
    this.props.getInterval(this.props.user, mappedId);
    return;
  }

  parseDate(dateString) {
    const dateTime = dateString.split("T");
    let time = dateTime[1].split(".");
    let date = dateTime[0].split("-");
    const year = date.shift();
    date.push(year);
    date = date.join(".");

    time.pop();
    time = time.join("");

    const parsedDate = `${date} ${time}`;
    return parsedDate;
  }

  getName() {
    if (!this.props.user) {
      return;
    } else {
      for (let i = 0; i < this.props.users.length; i++) {
        if (this.props.users[i].id == this.props.user) {
          return this.props.users[i].name;
        }
      }
    }
  }


  render() {
    if (!this.props.intervalList) {
      return <div></div>;
    } else {
      const allIntervals = this.props.intervalList.map((interval) => {
        let intervalTime = this.parseDate(interval["time_start"]);
        return (
          <li className="interval-list-index-item"
            onClick={() => this.handleClick(interval["mapped_id"])}
            key={interval["mapped_id"]}>
            { intervalTime }
          </li>
        );
      });
      const name = this.getName()
      return (
        <div id="interval-list">
          <h3 id="interval-list-title">{`${name}'s`} Intervals</h3>
          <ul id="interval-list-index">
            { allIntervals }
          </ul>
        </div>
      );
    }
  }

}

export default IntervalList;
