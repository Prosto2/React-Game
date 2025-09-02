import type * as React from 'react';
import { useCallback, useEffect } from 'react';
import { MAP_ARROW_CODES } from '../../constants.ts';
import { useAppDispatch } from '../../../../app/hooks.ts';
import { setEnteredValue } from '../../store/slices.ts';
import { useKeyPressedElement } from './hooks.ts';
import { TypographyHeader } from '../../../UI';

export type IKeyPressedProps = {
  isTimerActive: boolean;
};

const KeyPressed: React.FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props;

  const keyPressedElement = useKeyPressedElement();

  const dispatch = useAppDispatch();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        Object.prototype.hasOwnProperty.call(MAP_ARROW_CODES, e.key) &&
        isTimerActive
      ) {
        dispatch(setEnteredValue(e.key));
      }
    },
    [dispatch, isTimerActive]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div>
      <TypographyHeader>KeyPressed</TypographyHeader>
      <span>{keyPressedElement}</span>
    </div>
  );
};

export default KeyPressed;
