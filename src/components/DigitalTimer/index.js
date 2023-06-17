// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {timerStart: false, limit: 25, timer: '25:00'}

  onToggleStart = () => {
    this.setState(prevState => ({timerStart: !prevState.timerStart}))
  }

  onReset = () => {
    this.setState({limit: 25, timer: '25:00'})
  }

  onDecrease = () => {
    const {timerStart} = this.state
    if (timerStart) {
      this.setState(prevState => ({limit: prevState.limit - 1}))
    }
  }

  onIncrease = () => {
    const {timerStart} = this.state
    if (timerStart) {
      this.setState(prevState => ({limit: prevState.limit + 1}))
    }
  }

  render() {
    const {timerStart, limit, timer} = this.state
    const startPauseImg = timerStart
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    const startPauseAlt = timerStart ? 'pause icon' : 'play icon'
    const startPauseText = timerStart ? 'Pause' : 'Start'
    const timerStatusText = timerStart ? 'Running' : 'Paused'
    return (
      <div className="app-container">
        <h1 className="app-title">Digital Timer</h1>
        <div className="app-body">
          <div className="app-timer">
            <div className="timer">
              <h1 className="timer-display">{timer}</h1>
              <p className="timer-status">{timerStatusText}</p>
            </div>
          </div>
          <div className="app-controls">
            <div className="start-reset">
              <div className="start">
                <img
                  alt={startPauseAlt}
                  src={startPauseImg}
                  className="start-pause-img"
                />
                <button
                  onClick={this.onToggleStart}
                  type="button"
                  className="start-pause-btn"
                >
                  {startPauseText}
                </button>
              </div>
              <div className="start">
                <img
                  alt="reset icon"
                  className="start-pause-img"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <button
                  onClick={this.onReset}
                  type="button"
                  className="start-pause-btn"
                >
                  Reset
                </button>
              </div>
            </div>
            <div className="limit-set">
              <p className="limit-title">Set Timer limit</p>
              <div className="limit">
                <button
                  onClick={this.onDecrease}
                  type="button"
                  className="start-pause-btn limit-set"
                >
                  -
                </button>
                <p className="limit-display">{limit}</p>
                <button
                  onClick={this.onIncrease}
                  type="button"
                  className="start-pause-btn limit-set"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer