// Components
import { Form } from '@/components';
// Hooks
import { useCurrencies } from '@/hooks';
// Styled components
import { HomeStyled, Loading } from './Home.styled';
// Libreries
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

/**
 * Functional component that render component home.
 *
 * @return React.ReactElement <Home/>
 */
const Home = () => {
  const currencies = useCurrencies();
  const shouldRender = {
    form: currencies.data && !currencies.isLoading,
    loading: !currencies.data && currencies.isLoading,
  };

  return (
    <HomeStyled>
      {shouldRender.form && currencies.data && (
        <Form currencies={currencies.data} />
      )}
      {shouldRender.loading && <Loading icon={faSpinner} spin size='3x' />}
    </HomeStyled>
  );
};

export default Home;
