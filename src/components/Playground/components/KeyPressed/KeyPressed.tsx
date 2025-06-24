import type * as React from 'react';
import { useCallback, useEffect } from 'react';
import { MAP_ARROW_CODES } from '../../constants.ts';


export type IKeyPressedProps = {
  isTimerActive: boolean;
};

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const {isTimerActive} = props;

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if(Object.prototype.hasOwnProperty.call(MAP_ARROW_CODES, e.key)) {
      console.log(e.key);
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);

  return (
    <div>
    </div>
  );
};

export default KeyPressed;
