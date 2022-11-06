import { AppDispatch } from 'store/store';
import { getExchangeRate } from 'apiRequests';
import { setCurrencyList, setErrorMessage, setRates } from 'store/reducers/converterSlice';

export const getDataByBaseCurrency = (baseCurrency: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setErrorMessage(null));

    const res = await getExchangeRate(baseCurrency, `USD,EUR,UAH,GBP,PLN`);
    dispatch(setCurrencyList(Object.keys(res.rates)));
    dispatch(setRates(res.rates));
  } catch (err) {
    dispatch(setErrorMessage('Error while loading data'));
  }
};
