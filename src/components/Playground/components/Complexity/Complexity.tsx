import type * as React from 'react';
import RowRadioButtonsGroup from '../../../UI/RadioGroup';
import TypographyHeader from '../../../UI/TypographyHeader';

import styles from './Complexity.module.css';
import type { IComplexity } from '../../types.ts';

export type IComplexityProps = {
  setComplexity: React.Dispatch<React.SetStateAction<IComplexity>>;
};

const Complexity: React.FC<IComplexityProps> = (props) => {
  const { setComplexity } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComplexity((event.target as HTMLInputElement).value as IComplexity);
  };

  return (
    <div>
      <TypographyHeader>Complexity</TypographyHeader>
      <RowRadioButtonsGroup className={styles.group} onChange={handleChange} />
    </div>
  );
};

export default Complexity;
