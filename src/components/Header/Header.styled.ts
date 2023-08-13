// Libreries
import { styled } from 'styled-components';

export const HeaderStyled = styled.div`
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.palette.elements.header.background};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const HeaderTitle = styled.p`
  color: ${({ theme }) => theme.palette.white.main};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  line-height: 20px;
  padding: 20px 0 20px 55px;
`;
