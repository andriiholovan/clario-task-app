import React from 'react';

const Timer: React.FC<{ initMinute: number, initSeconds: number }> = (props) => {
  const { initMinute = 0, initSeconds = 10 } = props;
  const [minutes, setMinutes] = React.useState(initMinute);
  const [seconds, setSeconds] = React.useState(initSeconds);

  const reinitializeTimer = () => {
    setMinutes(initMinute);
    setSeconds(initSeconds);
  }

  React.useEffect(() => {
    let myInterval: ReturnType<typeof window['setTimeout']> | undefined;
    const runTimer = () => setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          reinitializeTimer();
          myInterval = runTimer();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    myInterval = runTimer();
    return () => {
      clearInterval(myInterval);
    }
  })

  return (
    <React.Fragment>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </React.Fragment>
  )
}

export default Timer;
