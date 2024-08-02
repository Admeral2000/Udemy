import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  margin: 9,
  '&.MuiCheckbox-root': {
    width: 24,
    height: 24,
    border: `2px solid #1b5bf7!important`,
    backgroundColor: '#f4f7ff',
    backgroundImage: 'linear-gradient(180deg, hsla(0, 0%, 100%, .8), hsla(0, 0%, 100%, 0))',
    '& .MuiSvgIcon-root': {
      width: 14,
      height: 14,
      borderRadius: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    '&.Mui-checked .MuiSvgIcon-root': {
      backgroundColor: '#1b5bf7',
      border: `2px solid '#1b5bf7'`,
    },
    '& .MuiSvgIcon-root path': {
      display: 'none',
    },
  },
}));

const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '80px',
  '@media (max-width: 900px)': {
    marginTop: '24px',
  },
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginRight: '16px !important',
  marginLeft: '0!important',
  '& .MuiFormControlLabel-label': {
    fontSize: '14px !important',
    lineHeight: '30px !important',
    fontWeight: '600 !important',
    fontFamily: 'Manrope Medium, sans-serif !important',
    letterSpacing: '0.00938em',
    color: '#000',
  },
  '@media (max-width: 900px)': {
    width: '50%',
    margin: '0 !important',
  },
}));

function MyFormControlLabel(props) {
  return <StyledFormControlLabel control={<StyledCheckbox {...props} />} {...props} />;
}

MyFormControlLabel.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function StyledCheckboxGroup({ onSelectedValueChange }) {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(prev => prev === value ? '' : value);
  };

  React.useEffect(() => {
    onSelectedValueChange(selectedValue);
  }, [selectedValue, onSelectedValueChange]);

  return (
    <StyledFormGroup>
      {['Frontend', 'Backend', 'Devops', 'Testing', 'UX/UI', 'Infrastructure', 'Mobile'].map((option) => (
        <MyFormControlLabel
          key={option}
          label={option}
          value={option}
          checked={selectedValue === option}
          onChange={handleChange}
        />
      ))}
    </StyledFormGroup>
  );
}

StyledCheckboxGroup.propTypes = {
  onSelectedValueChange: PropTypes.func.isRequired,
};

