import type * as React from 'react';
import { useAppDispatch } from '../../../../app/hooks.ts';
import { resetStore } from '../../store/slices.ts';
import ResultMessage from './components/ResultMessage';

export interface IModalProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isSuccessEndGame: boolean;
}

const Modal: React.FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props;

  const dispatch = useAppDispatch();

  const handleClose = () => {
    setIsShowModal(false);
    dispatch(resetStore());
  };

  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  );
};
export default Modal;
