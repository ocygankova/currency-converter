import { Box, Stack, Typography } from '@mui/material';
import { InputGroup } from 'components';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  getDataByBaseCurrency,
  handleUpdateAmountFrom,
  handleUpdateAmountTo,
  handleUpdateCurrencyFrom,
  handleUpdateCurrencyTo
} from 'store';

function Converter() {
  const {
    errorMessage,
    currencyList,
    currencyTo,
    currencyFrom,
    amountTo,
    amountFrom,
    summaryAmountFrom,
    summaryAmountTo
  } = useAppSelector((state) => state.converter);
  const dispatch = useAppDispatch();

  const onAmountChangeFrom = (amount: number) => {
    dispatch(handleUpdateAmountFrom(amount));
  };

  const onAmountChangeTo = (amount: number) => {
    dispatch(handleUpdateAmountTo(amount));
  };

  const onCurrencyChangeFrom = (currency: string) => {
    dispatch(handleUpdateCurrencyFrom(currency));
    dispatch(getDataByBaseCurrency(currency));
  };

  const onCurrencyChangeTo = (currency: string) => {
    dispatch(handleUpdateCurrencyTo(currency));
  };

  const date = new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date());

  return errorMessage ? (
    <Typography p={2}>{errorMessage}</Typography>
  ) : (
    <Box p={3}>
      <Stack spacing={1} pt={2}>
        <Typography variant="subtitle1">
          {summaryAmountFrom} {currencyFrom} equals
        </Typography>
        <Typography variant="h4">
          {summaryAmountTo} {currencyTo}
        </Typography>
        <Typography variant="subtitle2">{date}</Typography>
      </Stack>
      <Stack spacing={2} py={4}>
        <InputGroup
          currencyList={currencyList}
          amount={amountFrom}
          currency={currencyFrom}
          onAmountChange={onAmountChangeFrom}
          onCurrencyChange={onCurrencyChangeFrom}
        />
        <InputGroup
          currencyList={currencyList}
          amount={amountTo}
          currency={currencyTo}
          onAmountChange={onAmountChangeTo}
          onCurrencyChange={onCurrencyChangeTo}
        />
      </Stack>
    </Box>
  );
}

export default Converter;
