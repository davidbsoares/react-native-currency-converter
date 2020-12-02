import { format } from 'date-fns';

const SAMPLE_RATES = {
  AUD: 1.6164,
  BGN: 1.9558,
  BRL: 4.7918,
  CAD: 1.5338,
  CHF: 1.1275,
  CNY: 7.9451,
  CZK: 25.715,
  DKK: 7.4567,
  EUR: 20.242,
  GBP: 0.89824,
  HKD: 9.1324,
  HRK: 7.4341,
  HUF: 326.49,
  IDR: 17323.54,
  ILS: 4.1706,
  INR: 83.7175,
  ISK: 127.8,
  JPY: 129.55,
  KRW: 1304.76,
  MXN: 22.3653,
  MYR: 4.812,
  NOK: 9.776,
  NZD: 1.7633,
  PHP: 62.592,
  PLN: 4.3183,
  RON: 4.6385,
  RUB: 79.5747,
  SEK: 10.5908,
  SGD: 1.6,
  THB: 38.13,
  TRY: 7.6282,
  USD: 1.1634,
  ZAR: 17.8233,
};

export const api = (fullPath = '') => {
  const [path] = fullPath.split('?');

  if (path.length === 0) {
    return Promise.reject(new Error('Endereço necessário.'));
  }

  if (path !== '/latest') {
    return Promise.reject(new Error('Endereço inválido.'));
  }

  const baseCurrency = fullPath.split('base=')[1];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        base: baseCurrency,
        date: format(new Date(), 'yyyy-MM-dd'),
        rates: {
          ...SAMPLE_RATES,
          [baseCurrency]: 1,
        },
      });
    }, 500);
  });
};