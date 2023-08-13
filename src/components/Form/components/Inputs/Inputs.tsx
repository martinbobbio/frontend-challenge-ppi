// Constants
import { Currency } from '@/constants';
// Assets
import iconExchange from '/images/icon-exchange.svg';
// Styled components
import {
  IconExchange,
  IconExchangeContainer,
  InputContainer,
  InputField,
  InputSelect,
  InputsStyled,
  Label,
} from './Inputs.styled';
import { isValidNumberPositive, isValidString } from '@/utils';

export interface InputsProps {
  currencies: Currency[];
  amount: {
    value: string;
    handler: (value: string) => void;
  };
  from: {
    value: Currency;
    handler: (value: string) => void;
  };
  to: {
    value: Currency;
    handler: (value: string) => void;
  };
  icon: {
    handler: () => void;
  };
}

/**
 * Functional component that render component with inputs.
 *
 * @return React.ReactElement <Inputs/>
 */
const Inputs = ({ currencies, amount, from, to, icon }: InputsProps) => {
  /**
   * Function for rendering item options
   *
   * @return React.ReactElement <options/>
   */
  const _renderOptions = (omitFrom = false) => {
    return currencies.map((currency) => {
      if (currency.ticker === from.value.ticker && omitFrom) return;
      else if (currency.ticker === to.value.ticker && !omitFrom) return;
      // TO-DO: Show the currency flag in the option element can be good for the ux
      return (
        <option key={currency.ticker} value={currency.ticker}>
          {currency.name}
        </option>
      );
    });
  };

  /**
   * Function that validate the amount is a positive and valid string
   */
  const _validateAmount = (value: string) => {
    value = value.replace(from.value.symbol, '').trim();
    console.log('HOLA', value);
    if (isValidString(value)) amount.handler(value);
    else if (isValidNumberPositive(value)) amount.handler(value);
  };

  return (
    <InputsStyled>
      <InputContainer className='amount'>
        <Label>Amount</Label>
        <InputField
          type='text'
          value={`${from.value.symbol} ${amount.value}`}
          onChange={(e) => _validateAmount(e.target.value)}
        />
      </InputContainer>
      <InputContainer className='from'>
        <Label>From</Label>
        <InputSelect
          id='from'
          value={from.value.ticker}
          onChange={(e) => from.handler(e.target.value)}
        >
          {_renderOptions()}
        </InputSelect>
      </InputContainer>
      <IconExchangeContainer>
        <IconExchange
          onClick={icon.handler}
          src={iconExchange}
          alt='icon-exchange'
        />
      </IconExchangeContainer>
      <InputContainer className='to'>
        <Label>To</Label>
        <InputSelect
          id='from'
          value={to.value.ticker}
          onChange={(e) => to.handler(e.target.value)}
        >
          {_renderOptions(true)}
        </InputSelect>
      </InputContainer>
    </InputsStyled>
  );
};

export default Inputs;
