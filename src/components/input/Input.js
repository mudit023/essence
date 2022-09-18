import { useEffect, useState } from 'react'

import moment from 'moment/moment'
import './input.css'
function Input(props) {
  const calculateTimeLeft = () => {
    const flag = props.flag
    let difference = 0
    if (flag) {
      difference = +props.date - moment()
      console.log(difference)
    } else {
      difference = 0
    }

    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  })

  return (
    <div className="time">
      <div>{/* <UseCountDown></UseCountDown> */}</div>
      {timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
        <p>
          <span>
            {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
          </span>
          <span>:</span>
          <span>{timeLeft.minutes}</span>
          <span>:</span>
          <span>
            {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </span>
        </p>
      ) : (
        <p>01:00:00</p>
      )}
    </div>
  )
}
export default Input

//   export default App
//   return (
//     <div>
//       <input type="number" onChange={hourChange}></input>:
//       <input type="number" onChange={minuteChange}></input>
//       <input type="submit" onClick={ans}></input>
//       <div>
//         {ansValue} {ansSecond}
//       </div>
//       {/* <UseCountDown></UseCountDown> */}
//     </div>
//   )
// }
