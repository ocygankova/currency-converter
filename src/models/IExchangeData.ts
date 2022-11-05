export interface IExchangeData {
  base: string;
  date: string;
  rates: { [currency: string]: number };
}
