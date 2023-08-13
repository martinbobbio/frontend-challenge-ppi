// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const FormStyled = styled.div`
  position: absolute;
  background: ${({ theme }) => theme.palette.white.main};
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: calc(100% - 154px);
  top: 188px;
  margin: 0 77px;
  padding: 33px 42px 13px 43px;
  @media (max-width: ${BREAKPOINTS.medium}) {
    top: 216px;
    width: calc(100% - 64px);
    margin: 0 32px;
    padding: 24px 16px 13px 16px;
  }
`;

export const LoadingContainer = styled.div`
  width: 50%;
  text-align: center;
  display: inline-block;
  @media (max-width: ${BREAKPOINTS.medium}) {
    width: 100%;
  }
`;
