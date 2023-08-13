// Styled components
import { HeaderStyled, HeaderTitle } from './Header.styled';

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTitle>Currency exchange</HeaderTitle>
    </HeaderStyled>
  );
};

export default Header;
