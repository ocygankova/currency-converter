import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConverterState, IExchangeData } from 'models';

const initialState: IConverterState = {
  errorMessage: '',
  currencyList: [],
  currencyFrom: 'UAH',
  currencyTo: 'USD',
  amountFrom: 1,
  amountTo: 1,
  rates: {},
  summaryAmountFrom: 0,
  summaryAmountTo: 0,
  date: '',
  headerInfo: []
};

const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    setErrorMessage(state, action: PayloadAction<string | null>) {
      state.errorMessage = action.payload;
    },

    setCurrencyList(state, action: PayloadAction<string[]>) {
      state.currencyList = action.payload;
    },

    setRates(state, action: PayloadAction<{ [currency: string]: number }>) {
      state.rates = action.payload;
    },

    setDate(state, action: PayloadAction<string>) {
      const date = new Date(action.payload);

      state.date = new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full'
      }).format(date);
    },

    setHeaderInfo(state, action: PayloadAction<IExchangeData[]>) {
      state.headerInfo = action.payload;
    },

    updateSummary(state) {
      state.summaryAmountFrom = state.amountFrom;
      state.summaryAmountTo = state.amountTo;
    },

    handleUpdateAmountFrom(state, action: PayloadAction<number>) {
      state.amountFrom = action.payload;
      state.amountTo = Number(
        (
          (action.payload * state.rates[state.currencyTo]) /
          state.rates[state.currencyFrom]
        ).toFixed(2)
      );
    },

    handleUpdateAmountTo(state, action: PayloadAction<number>) {
      state.amountTo = action.payload;
      state.amountFrom = Number(
        (
          (action.payload * state.rates[state.currencyFrom]) /
          state.rates[state.currencyTo]
        ).toFixed(2)
      );
    },

    handleUpdateCurrencyFrom(state, action: PayloadAction<string>) {
      state.currencyFrom = action.payload;
      state.amountTo = Number(
        (
          (state.amountFrom * state.rates[state.currencyTo]) /
          state.rates[state.currencyFrom]
        ).toFixed(2)
      );
      state.summaryAmountFrom = state.amountFrom;
      state.summaryAmountTo = state.amountTo;
    },

    handleUpdateCurrencyTo(state, action: PayloadAction<string>) {
      state.currencyTo = action.payload;
      state.amountTo = Number(
        (
          (state.amountFrom * state.rates[state.currencyTo]) /
          state.rates[state.currencyFrom]
        ).toFixed(2)
      );
      state.summaryAmountFrom = state.amountFrom;
      state.summaryAmountTo = state.amountTo;
    }
  }
});

export const {
  setErrorMessage,
  setCurrencyList,
  setRates,
  setDate,
  setHeaderInfo,
  updateSummary,
  handleUpdateAmountFrom,
  handleUpdateAmountTo,
  handleUpdateCurrencyTo,
  handleUpdateCurrencyFrom
} = converterSlice.actions;

export default converterSlice.reducer;
