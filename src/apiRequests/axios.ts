import axios from 'axios';
import { IExchangeData } from 'models/IExchangeData';

const request = axios.create({
  baseURL: `https://api.exchangerate.host`
});

export const getExchangeRate = async (base: string, symbols: string) => {
  const { data } = await request.get(`/latest`, {
    params: {
      symbols: symbols,
      base: base
    }
  });

  return data as IExchangeData;
};
