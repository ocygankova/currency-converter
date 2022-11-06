import { Stack, Typography } from '@mui/material';
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
    summaryAmountTo,
    date
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

  return errorMessage ? (
    <Typography>{errorMessage}</Typography>
  ) : (
    <>
      <Stack spacing={2}>
        <Typography>
          {summaryAmountFrom} {currencyFrom} equals
        </Typography>
        <Typography variant="h4">
          {summaryAmountTo} {currencyTo}
        </Typography>
        <Typography>{date}</Typography>
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
    </>
  );
}

export default Converter;
