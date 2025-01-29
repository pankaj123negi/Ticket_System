import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';

const StyledDatePicker = styled(DatePicker)({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    height: '40px',
    backgroundColor: 'white',
    '& fieldset': {
      borderColor: '#E5E7EB',
      borderRadius: '6px',
    },
    '&:hover fieldset': {
      borderColor: '#B2B7C2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#4F46E5',
      borderWidth: '1px',
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '14px',
    padding: '8px 12px',
    color: '#374151',
  },
  '& .MuiInputAdornment-root': {
    '& .MuiButtonBase-root': {
      padding: '8px',
    },
    '& .MuiSvgIcon-root': {
      fontSize: '20px',
      color: '#6B7280',
    },
  },
});

const CustomDatePicker = ({ value, onChange }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            placeholder: 'Due Date',
            size: "small"
          },
        }}
        format="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;