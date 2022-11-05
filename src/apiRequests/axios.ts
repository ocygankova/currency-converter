import axios from 'axios';
import { IExchangeData } from 'models/IExchangeData';

const request = axios.create({
  baseURL: `https://api.exchangerate.host`
});

export const getExchangeRate = async (base: string) => {
  const { data } = await request.get(`/latest`, {
    params: {
      symbols: `USD,EUR,UAH,GBP,PLN`,
      base: `${base}`
    }
  });

  return data as IExchangeData;
};
