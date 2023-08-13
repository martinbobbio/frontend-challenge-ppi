// Constants
import { Currency } from '@/constants';
// Utils
import { formatNumber } from '@/utils';
// Styled components
import { CoverStyled, CoverTitle } from './Cover.styled';

export interface CoverProps {
  amount: string;
  from: Currency;
  to: Currency;
}

/**
 * Functional component that render component a cover with a title.
 *
 * @return React.ReactElement <Cover/>
 */
const Cover = ({ amount, from, to }: CoverProps) => {
  return (
    <CoverStyled>
      <CoverTitle>
        {formatNumber(amount, 6)} {from.ticker} to {to.ticker} - Convert{' '}
        {from.name} to {to.name}
      </CoverTitle>
    </CoverStyled>
  );
};

export default Cover;
