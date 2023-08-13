// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const FooterStyled = styled.p`
  color: ${({ theme }) => theme.palette.black.main};
  font-size: 12px;
  text-align: right;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
  @media (max-width: ${BREAKPOINTS.medium}) {
    text-align: left;
    margin-top: 30px;
    position: absolute;
  }
`;
