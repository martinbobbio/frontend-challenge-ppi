// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const CoverStyled = styled.div`
  width: 100%;
  height: 295px;
  background: ${({ theme }) => theme.palette.primary.main};
  text-align: center;
`;

export const CoverTitle = styled.p`
  color: ${({ theme }) => theme.palette.white.main};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-size: 32px;
  font-weight: 600;
  line-height: 32px;
  padding: 63px 77px 0 77px;
  @media (max-width: ${BREAKPOINTS.medium}) {
    padding: 30px 48px 0 48px;
  }
`;
