import { IExchangeData } from 'models/IExchangeData';

export interface IConverterState {
  errorMessage: string | null;
  currencyList: string[];
  currencyFrom: string;
  currencyTo: string;
  amountFrom: number;
  amountTo: number;
  rates: { [currency: string]: number };
  summaryAmountFrom: number;
  summaryAmountTo: number;
  headerInfo: IExchangeData[];
}
