// Styled components
import {
  EmptyStateStyled,
  Title,
  Icon,
  Description,
} from './EmptyState.styled';
// Libreries
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface EmptyStateProps {
  icon: IconDefinition;
  title: string;
  description: string;
}

/**
 * Functional component that render component a empty state.
 *
 * @return React.ReactElement <EmptyState/>
 */
const EmptyState = ({ icon, title, description }: EmptyStateProps) => {
  return (
    <EmptyStateStyled>
      <Icon icon={icon} size='4x' />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </EmptyStateStyled>
  );
};

export default EmptyState;
