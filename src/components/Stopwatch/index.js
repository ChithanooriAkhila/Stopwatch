// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    seconds: 0,
  }

  getFormattedSeconds = () => {
    const {seconds} = this.state
    const percentileSeconds = seconds % 60
    if (percentileSeconds < 10) {
      return `0${percentileSeconds}`
    }
    return percentileSeconds
  }

  getFormattedMinutes = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  starttimer = () => {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
      isTimerRunning: true,
    }))
  }

  startwatch = () => {
    this.timerId = setInterval(this.starttimer, 1000)
  }

  stopwatch = () => {
    this.setState(prev => ({
      isTimerRunning: !prev.isTimerRunning,
    }))
    clearInterval(this.timerId)
  }

  resetwatch = () => {
    this.setState(prev => ({
      isTimerRunning: !prev.isTimerRunning,
      seconds: 0,
    }))
    clearInterval(this.timerId)
  }

  //   render() {
  //     const {seconds, isTimerRunning} = this.state
  //     const formattedSeconds = this.getFormattedSeconds(seconds)
  //     const formattedMinutes = this.getFormattedMinutes(seconds)
  //     return (
  //       <div className="stopwatch-container">
  //         <h1>Stopwatch</h1>
  //         <div className="timer-container">
  //           <div className="timer">
  //             <img
  //               src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
  //               alt="stopwatch"
  //             />
  //             <p>Timer</p>
  //           </div>
  //           <h1>{`${formattedMinutes}:${formattedSeconds}`}</h1>
  //           <div>
  //             <button
  //               type="button"
  //               onClick={this.startwatch}
  //               disabled={isTimerRunning}
  //             >
  //               Start
  //             </button>
  //             <button type="button" onClick={this.stopwatch}>
  //               Stop
  //             </button>
  //             <button type="button" onClick={this.resetwatch}>
  //               Reset
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )
  render() {
    const {isTimerRunning} = this.state
    const time = `${this.getFormattedMinutes()}:${this.getFormattedSeconds()}`

    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.startwatch}
                disabled={isTimerRunning}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.stopwatch}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.resetwatch}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
