import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const EMPTY_STATES = {
  error: {
    icon: faCircleExclamation,
    title: 'Error',
    description: 'An error has occurred, please try again in a moment.',
  },
};

const DISCLAIMER = {
  title:
    "We use the mid-market rate for our Converter. This is for informational purposes only. You won't receive this rate when sending money.",
};

const SITES = {
  currency: 'https://www.xe.com/currency',
};

const CURRENCIES = {
  extraProps: {
    externalSiteId: {
      EUR: 'eur-euro',
      USD: 'usd-us-dollar',
      JPY: 'jpy-japanese-yen',
      BGN: 'bgn-bulgarian-lev',
      CZK: 'CZK',
      DKK: 'DKK',
      GBP: 'gbp-british-pound',
      HUF: 'HUF',
      PLN: 'PLN',
      RON: 'RON',
      SEK: 'SEK',
      CHF: 'chf-swiss-franc',
      ISK: 'ISK',
      NOK: 'NOK',
      HRK: 'HRK',
      RUB: 'rub-russian-ruble',
      TRY: 'TRY',
      AUD: 'aud-australian-dollar',
      BRL: 'BRL',
      CAD: 'cad-canadian-dollar',
      CNY: 'CNY',
      HKD: 'HKD',
      IDR: 'IDR',
      ILS: 'ILS',
      INR: 'inr-indian-rupee',
      KRW: 'KRW',
      MXN: 'MXN',
      MYR: 'MYR',
      NZD: 'nzd-new-zealand-dollar',
      PHP: 'PHP',
      SGD: 'sgd-singapore-dollar',
      THB: 'THB',
      ZAR: 'zar-south-african-rand',
    },
  },
};

export default {
  emptyStates: EMPTY_STATES,
  disclaimer: DISCLAIMER,
  sites: SITES,
  currencies: CURRENCIES,
};
