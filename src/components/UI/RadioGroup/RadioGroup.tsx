import cn from 'classnames';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import type * as React from 'react';

export type IRowRadioButtonsGroupProps = RadioGroupProps;

const RowRadioButtonsGroup: React.FC<IRowRadioButtonsGroupProps> = (props) => {
  const { className = '' } = props;
  return (
    <RadioGroup
      row
      aria-labelledby='demo-row-radio-buttons-group-label'
      name='row-radio-buttons-group'
      defaultValue='EASY'
      className={cn(className)}
      {...props}
    >
      <FormControlLabel value='EASY' control={<Radio />} label='Easy' />
      <FormControlLabel value='NORMAL' control={<Radio />} label='Normal' />
      <FormControlLabel value='HARD' control={<Radio />} label='Hard' />
    </RadioGroup>
  );
};

export default RowRadioButtonsGroup;
