import type * as React from 'react';

export type iControlsProps = {
  isTimerActive: boolean,
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<iControlsProps> = (props) => {
  const {isTimerActive, setIsTimerActive} = props;
  return (
    <div>
      <button onClick={() => { setIsTimerActive(true); }} disabled={isTimerActive}>Play</button>
      <button onClick={() => { setIsTimerActive(false); }} disabled={!isTimerActive}>Pause</button>
    </div>
  )
}

export default Controls;