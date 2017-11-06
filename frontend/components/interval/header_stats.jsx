import React from 'react';

class HeaderStats extends React.Component {

  constructor(props) {
    super(props);
    this.parseDate = this.parseDate.bind(this);
    this.score = this.score.bind(this);
    this.average = this.average.bind(this);
    this.roomTemp = this.roomTemp.bind(this);
    this.bedTemp = this.bedTemp.bind(this);
    this.resp = this.resp.bind(this);
    this.heartRate = this.heartRate.bind(this);
    this.totalSleep = this.totalSleep.bind(this);
  }

  parseDate() {
    const dateTime = this.props.interval.ts.split("T");
    let date = dateTime[0].split("-");
    const year = date.shift();
    date.push(year);
    date = date.join(".");

    const time = dateTime[1].slice(0, 5);
    const timeHalf = Number(time.slice(0, 2)) / 12;
    const morningOrNight = timeHalf >= 1 ? "PM" : "AM";
    const parsedDate = `${date} ${time} ${morningOrNight}`;
    return (
      <h2 id="interval-date">{ parsedDate }</h2>
    );
  }

  totalSleep() {
    let total = 0;
    this.props.interval.stages.forEach((stage) => {
      total += stage.duration;
    });
    const totalMinutes = Math.round(total / 60);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `Time Slept: ${hours} hrs ${minutes} min`;
  }

  score() {
    const sleepScore = this.props.interval.score;
    return (
      <div id="score">
        <h1 id="score-number">{ sleepScore }</h1>
        <h4 id="score-text">Sleep Score</h4>
      </div>
    );
  }

  roomTemp() {
    const avgRoomTemp = this.average("tempRoomC", -1);
    return (
      <div id="avgRoomTemp">
        <h1 id="avgRoomTemp-number">{ avgRoomTemp }</h1>
        <h4 id="avgRoomTemp-text">Average Room Temperature (C)</h4>
      </div>
    );
  }

  bedTemp() {
    const avgBedTemp = this.average("tempBedC", -1);
    return (
      <div id="avgBedTemp">
        <h1 id="avgBedTemp-number">{ avgBedTemp }</h1>
        <h4 id="avgBedTemp-text">Average Bed Temperature (C)</h4>
      </div>
    );
  }

  resp() {
    const avgRespRate = this.average("respiratoryRate", -1);
    return (
      <div id="avgRespRate">
        <h1 id="avgRespRate-number">{ avgRespRate }</h1>
        <h4 id="avgRespRate-text">Average Respiratory Rate (Breaths Per Minute)</h4>
      </div>
    );
  }

  heartRate() {
    const avgHeartRate = this.average("heartRate", -1);
    return (
      <div id="avgHeartRate">
        <h1 id="avgHeartRate-number">{ avgHeartRate }</h1>
        <h4 id="avgHeartRate-text">Average Heart Rate (Beats Per Minute)</h4>
      </div>
    );
  }

  average(timeseries, round) {
    let sum = 0;
    let totalNum = 0;
    this.props.interval.timeseries[timeseries].forEach((ts) => {
      sum += ts[1];
      totalNum += 1;
    });
    return Math.round(sum / totalNum);
  }

  render() {
    const date = this.parseDate();
    const scoreNumber = this.score();
    const avgRoomTemp = this.roomTemp();
    const avgBedTemp = this.bedTemp();
    const avgResRate = this.resp();
    const avgHR = this.heartRate();
    const timeSlept = this.totalSleep();
    return (
      <div id="head">
        <div id="large-header-section">
          { date }
          <h1>{timeSlept}</h1>
          { scoreNumber }
        </div>
        <div id="small-header-section">
          { avgRoomTemp }
          { avgBedTemp }
          { avgResRate }
          { avgHR }
        </div>
      </div>
    );
  }

}

export default HeaderStats;
