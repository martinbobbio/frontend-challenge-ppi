// Constants
import { CONFIG } from '@/constants';
// Styled components
import { DisclaimerStyled } from './Disclaimer.styled';

/**
 * Functional component that render component with the disclaimer.
 *
 * @return React.ReactElement <Disclaimer/>
 */
const Disclaimer = () => {
  return <DisclaimerStyled>{CONFIG.disclaimer.title}</DisclaimerStyled>;
};
('');

export default Disclaimer;
