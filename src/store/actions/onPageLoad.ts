import { AppDispatch } from 'store/store';
import {
  handleUpdateAmountFrom,
  setCurrencyList,
  setErrorMessage,
  setHeaderInfo,
  setRates,
  updateSummary
} from 'store/reducers/converterSlice';
import { getExchangeRate } from 'apiRequests';
import { IExchangeData } from 'models';

export const onPageLoad = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setErrorMessage(null));

    const res = await getExchangeRate('UAH', `USD,EUR,UAH,GBP,PLN`);
    dispatch(setCurrencyList(Object.keys(res.rates)));
    dispatch(setRates(res.rates));
    dispatch(handleUpdateAmountFrom(1));
    dispatch(updateSummary());

    const resUSD = await getExchangeRate('USD', `UAH`);
    const resEUR = await getExchangeRate('EUR', `UAH`);
    const data: IExchangeData[] = [];
    dispatch(setHeaderInfo(data.concat(resUSD, resEUR)));
  } catch (err) {
    dispatch(setErrorMessage('Error while loading data'));
  }
};
