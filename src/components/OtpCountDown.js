import React from 'react'
import { useState, useEffect } from 'react'

const OtpCountDown = (props) => {
  const { initialMinute = 1, initialSeconds = 0 } = props
  const [minutes, setMinutes] = useState(initialMinute)
  const [seconds, setSeconds] = useState(initialSeconds)

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
          props.callBack()
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval)
    }
  })

  return (
    <div style={{ width: '100%' }}>
      {minutes === 0 && seconds === 0 ? null : (
        <div style={{ fontWeight: '600', fontSize: '17px', color: 'red' }}>
          {' '}
          Send OTP After {minutes}:{seconds < 10 ? `0${seconds}` : seconds}{' '}
          Second
        </div>
      )}
    </div>
  )
}

export default OtpCountDown
