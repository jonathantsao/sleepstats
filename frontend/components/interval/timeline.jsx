import React from 'react';

class Timeline extends React.Component {


  wokeUp() {
    const startTime = this.props.interval.ts.split("T")[1].slice(0,5);
    let totalMinutes = Number(startTime.slice(0, 2)) * 60;
    totalMinutes += Number(startTime.slice(3, 5));
    this.props.interval.stages.forEach((stage) => {
      totalMinutes += (stage.duration / 60);
    });
    return totalMinutes;
  }

  timeToNumber(timeString) {
    let totalMinutes = 0;
    totalMinutes += (Number(timeString.slice(0,2)) % 12) * 60;
    totalMinutes += Number(timeString.slice(3, 5));
    if (timeString.slice(5) === "PM") {
      totalMinutes += 720;
    }
    return totalMinutes;
  }

  numberToTime(number) {
    let hours = Math.floor(number / 60);
    let morningOrNight;
    if (hours >= 12) {
      hours -= 12;
      morningOrNight = "PM";
    } else {
      morningOrNight = "AM";
    }
    let hourTime;
    if (hours === 0) {
      hourTime = "12";
    } else if (hours < 10) {
      hourTime = `0${String(hours)}`;
    } else {
      hourTime = String(hours);
    }

    let minutes;
    if (number % 60 < 10) {
      minutes = `0${String(number % 60)}`;
    } else {
      minutes = String(number % 60);
    }
    return `${hourTime}:${minutes}${morningOrNight}`;
  }


  stages() {
    let startTimes = [];
    let startTime = this.props.interval.ts.split("T")[1].slice(0, 5);
    if (Number(startTime.slice(0, 2)) >= 12) {
      startTime += "PM";
    } else {
      startTime += "AM";
    }

    startTimes.push(startTime);
    let stgs = this.props.interval.stages;
    let startNum = this.timeToNumber(startTime);
    for (let i = 0; i < stgs.length; i++) {
      startNum += stgs[i].duration / 60;
      startTimes.push(this.numberToTime(startNum));
    }

    let sleepStages = [];
    for (let i = 0; i < stgs.length; i++) {
      let style = {
        height: stgs[i].duration / 10,
      };
      let duration = stgs[i].duration / 60;
      let hours = Math.floor(duration / 60);
      let minutes = Math.floor(duration % 60);
      let stage = (
        <li key={i}
          className={stgs[i].stage}
          style={style}>
          {startTimes[i]} {this.typesOfStages(stgs[i].stage)} for {hours} hours {minutes} minutes
        </li>
      );
      sleepStages.push(stage);
    }

    return sleepStages;

  }

  tnts() {
    let intervals = [];
    let startTime = this.props.interval.ts.split("T")[1].slice(0, 5);
    let minutes = Number(startTime.slice(0,2)) * 60;
    minutes += Number(startTime.slice(3,5));
    this.props.interval.timeseries.tnt.forEach((tnt) => {
      let start = tnt[0].split("T")[1].slice(0, 5);
      let newMinutes = Number(start.slice(0, 2)) * 60;
      newMinutes += Number(start.slice(3, 5));
      intervals.push(newMinutes - minutes);
      minutes = newMinutes;
    });

    const lastTime = this.props.interval.timeseries.tnt.slice(-1)[0][0].split("T")[1].slice(0, 5);
    let lastStartTime = Number(lastTime.slice(0, 2)) * 60;
    lastStartTime += Number(lastTime.slice(3, 5));
    intervals.push(this.wokeUp() - lastStartTime);
    let tntTimes = this.props.interval.timeseries.tnt.map((tnt) => {
      let time = tnt[0].split("T")[1].slice(0, 5);
      if (Number(time.slice(0, 2)) == 12) {
        time += "PM";
      } else if (Number(time.slice(0, 2)) > 12) {
        time = String(Number(time.slice(0, 2)) - 12) + time.slice(2);
        time += "PM";
      } else {
        time += "AM";
      }
      return time;
    });

    let tntList = [];
    let style = {
      height: intervals[0] * 6
    };
    let firstTnt = (
      <li key={0}
        className="tnt-item"
        style={style}>
        Went to bed
      </li>
    );

    tntList.push(firstTnt);
    for (let i = 1; i < intervals.length; i++) {
      style = {
        height: intervals[i] * 6
      };
      tntList.push(
        <li key={i}
          className="tnt-item"
          style={style}>
          {tntTimes[i - 1]}
        </li>
      );

    }
    return tntList;

  }

  typesOfStages(stage) {
    if (stage === "awake") {
      return "Lay awake in bed";
    } else if (stage === "light") {
      return "Light sleep";
    } else if (stage === "deep") {
      return "Deep sleep";
    } else if (stage === "out") {
      return "Left bed";
    }
  }

  render() {
    const stages = this.stages();
    const tnts = this.tnts();
    return (
      <div id="timelines">
        <ul id="stage-timeline">
          Sleep Timeline
          { stages }
        </ul>
        <ul id="tnt-timeline">
          Toss and Turn Timeline
          { tnts }
        </ul>
      </div>
    );
  }


}

export default Timeline;
