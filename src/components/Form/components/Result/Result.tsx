// Constants
import { Currency } from '@/constants';
// Utils
import { calculateRate, formatNumber } from '@/utils';
// Styled components
import { ResultDescription, ResultStyled, ResultTitle } from './Result.styled';

export interface ResultProps {
  amount: string;
  from: Currency;
  to: Currency;
  rate: number;
}

/**
 * Functional component that render component with the final result.
 *
 * @return React.ReactElement <Result/>
 */
const Result = ({ amount, from, to, rate }: ResultProps) => {
  const result = calculateRate(amount, rate);
  return (
    <ResultStyled>
      <ResultTitle>
        {formatNumber(amount, 6)} {from.name} =<br />
        {result} {to.name}
      </ResultTitle>
      <ResultDescription>
        1 {from.ticker} = {formatNumber(rate, 6)} {to.ticker}
      </ResultDescription>
    </ResultStyled>
  );
};

export default Result;
