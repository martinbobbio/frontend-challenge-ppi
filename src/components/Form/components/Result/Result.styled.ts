// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const ResultStyled = styled.div`
  width: 50%;
  display: inline-block;
  @media (max-width: ${BREAKPOINTS.medium}) {
    width: 100%;
  }
`;

export const ResultTitle = styled.p`
  color: ${({ theme }) => theme.palette.black.main};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 12px;
`;

export const ResultDescription = styled.p`
  color: ${({ theme }) => theme.palette.gray.main};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 400;
  line-height: 36px;
`;
