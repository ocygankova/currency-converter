export interface IExchangeData {
  base: string;
  rates: { [currency: string]: number };
}
