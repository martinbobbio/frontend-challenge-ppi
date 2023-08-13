// React
import { useEffect, useState } from 'react';
// Components
import { Cover } from '@/components';
import { Disclaimer, Footer, Inputs, Result } from './components';
// Hooks
import { useCurrencyRate } from '@/hooks';
// Props
import { InputsProps } from './components/Inputs/Inputs';
import { FooterProps } from './components/Footer/Footer';
import { CoverProps } from '../Cover/Cover';
// Constants
import { Currency } from '@/constants';
// Utils
import { getCurrencyByTicker } from '@/utils';
// Styled components
import { FormStyled, LoadingContainer } from './Form.styled';
// Libreries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';

interface FormProps {
  currencies: Currency[];
}

/**
 * Functional component that render component the main form.
 *
 * @return React.ReactElement <Form/>
 */
const Form = ({ currencies }: FormProps) => {
  const defaultValues = {
    amount: '1',
    from: getCurrencyByTicker(currencies, 'USD'),
    to: getCurrencyByTicker(currencies, 'EUR'),
  };
  const [amount, setAmount] = useState(defaultValues.amount);
  const [from, setFrom] = useState<Currency>(defaultValues.from);
  const [to, setTo] = useState<Currency>(defaultValues.to);
  const [date, setDate] = useState(dayjs());
  const rates = useCurrencyRate(from.ticker);

  const shouldRender = {
    result: rates.data && !rates.isLoading,
    loading: !rates.data && rates.isLoading,
  };

  useEffect(() => {
    setDate(dayjs());
  }, [to, from, amount]);

  /**
   * Handler for updating from data
   *
   * @param ticker to find and update the data of form
   */
  const _handleFrom = (ticker: string) => {
    const currency = getCurrencyByTicker(currencies, ticker);
    setFrom({ ...currency });
  };

  /**
   * Handler for updating to data
   *
   * @param ticker to find and update the data of form
   */
  const _handleTo = (ticker: string) => {
    const currency = getCurrencyByTicker(currencies, ticker);
    setTo({ ...currency });
  };

  /**
   * Handler for toggling from and to
   *
   */
  const _handleToggleFromAndTo = () => {
    setTo(from);
    setFrom(to);
  };

  /**
   * Handler for updating to data amount
   *
   * @param value to update the data of form
   */
  const _handleAmount = (value: string) => {
    setAmount(value);
  };

  const inputs: InputsProps = {
    currencies,
    amount: {
      value: amount,
      handler: _handleAmount,
    },
    from: {
      value: from,
      handler: _handleFrom,
    },
    to: {
      value: to,
      handler: _handleTo,
    },
    icon: {
      handler: _handleToggleFromAndTo,
    },
  };

  const result = {
    amount,
    from,
    to,
  };

  const cover: CoverProps = {
    amount,
    from,
    to,
  };

  const footer: FooterProps = {
    from,
    to,
    date: date.format('MMM D, YYYY, HH:mm UTC'),
  };

  return (
    <>
      <Cover {...cover} />
      <FormStyled>
        <Inputs {...inputs} />
        {shouldRender.result && rates.data && (
          <Result {...result} rate={rates.data.rates[to.ticker]} />
        )}
        {shouldRender.loading && (
          <LoadingContainer>
            <FontAwesomeIcon icon={faSpinner} spin size='2x' />
          </LoadingContainer>
        )}
        <Disclaimer />
        <Footer {...footer} />
      </FormStyled>
    </>
  );
};

export default Form;
