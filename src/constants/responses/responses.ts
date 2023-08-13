export type ResponseCurrencies = {
  [ticker: string]: Currency;
};

export interface ResponseCurrencyRate {
  date: string;
  base: string;
  rates: Rates;
}

export interface Currency {
  name: string;
  symbol: string;
  ticker: string;
  externalSite: string;
}

export type Rates = {
  [ticker: string]: number;
};
