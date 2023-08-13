// Constants
import { Currency } from '@/constants';
// Styled components
import { FooterStyled } from './Footer.styled';

export interface FooterProps {
  from: Currency;
  to: Currency;
  date: string;
}

/**
 * Functional component that render component footer.
 *
 * @return React.ReactElement <Footer/>
 */
const Footer = ({ from, to, date }: FooterProps) => {
  return (
    <FooterStyled>
      <a href={from.externalSite} target='_blank'>
        {from.name}
      </a>{' '}
      to{' '}
      <a href={to.externalSite} target='_blank'>
        {to.name}
      </a>{' '}
      conversion — Last updated {date}
    </FooterStyled>
  );
};

export default Footer;
