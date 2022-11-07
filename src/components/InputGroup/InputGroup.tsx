import { ChangeEvent } from 'react';
import { FormControl, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import { v4 } from 'uuid';

interface Props {
  currencyList: string[];
  amount: number;
  currency: string;
  onAmountChange: (amount: number) => void;
  onCurrencyChange: (currency: string) => void;
}

function InputGroup({ currencyList, currency, amount, onAmountChange, onCurrencyChange }: Props) {
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    onAmountChange(e.target.value as unknown as number);
  };

  const handleCurrencyChange = (e: SelectChangeEvent) => {
    onCurrencyChange(e.target.value);
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <TextField
        value={amount}
        type="number"
        autoComplete="off"
        sx={{ mr: 1, flex: 1 }}
        onChange={handleAmountChange}
      />

      {currencyList.length && (
        <FormControl>
          <Select value={currency} onChange={handleCurrencyChange} sx={{ minWidth: '90px' }}>
            {currencyList.map((item) => (
              <MenuItem key={v4()} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Stack>
  );
}

export default InputGroup;
