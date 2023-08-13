// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const DisclaimerStyled = styled.div`
  background: ${({ theme }) => theme.palette.elements.box.background};
  width: 50%;
  display: inline-block;
  margin-top: 66px;
  font-weight: 400;
  /* Line Height not according to Figma but I think that this is better */
  line-height: 24px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
  margin-bottom: 13px;
  @media (max-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`;
