import { FormControl, MenuItem, Select, Stack, TextField } from '@mui/material';

function InputGroup() {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <TextField type="number" autoComplete="off" sx={{ mr: 1 }} />

      <FormControl>
        <Select value="10">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
}

export default InputGroup;
