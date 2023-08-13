// Libreries
import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const EmptyStateStyled = styled.div`
  text-align: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  margin: 32px auto;
  display: block;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 600;
  display: block;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 400;
  display: block;
`;
