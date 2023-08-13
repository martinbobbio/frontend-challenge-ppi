// Constants
import { THEME } from '@/constants';
// Libreries
import { ThemeProvider as ThemeStyledComponents } from 'styled-components';

// Component props
interface ThemeWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render high order component theme with their logic.
 *
 * @return React.ReactElement <ThemeWrapper/>
 */
const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  return (
    <ThemeStyledComponents theme={THEME}>{children}</ThemeStyledComponents>
  );
};

export default ThemeWrapper;
