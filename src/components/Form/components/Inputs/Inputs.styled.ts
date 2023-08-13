// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const InputsStyled = styled.div`
  margin: 0 0 70px 0;
  .amount,
  .from {
    margin: 0 41px 0 0;
  }
  .to {
    margin: 0 0 0 41px;
  }
  @media (max-width: ${BREAKPOINTS.medium}) {
    margin: 0;
    .from {
      margin: 0 0 16px 0;
    }
    .to {
      margin: 22px 0 16px 0;
    }
    .amount {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }
`;

export const InputContainer = styled.div`
  width: calc(33% - 54px);
  display: inline-block;
  text-align: left;
  label,
  input {
    color: ${({ theme }) => theme.palette.black.main};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    line-height: 20px;
  }
  @media (max-width: ${BREAKPOINTS.medium}) {
    width: 100%;
  }
`;

export const IconExchangeContainer = styled.div`
  display: inline-block;
`;

export const IconExchange = styled.img`
  cursor: pointer;
  width: 42px;
  height: 42px;
  margin-bottom: -13px;
  float: left;
`;

export const Label = styled.label`
  margin-bottom: 16px;
  display: block;
`;

export const InputField = styled.input`
  background: ${({ theme }) => theme.palette.white.main};
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding-left: 14px;
  border: 1px solid #ccc;
`;

export const InputSelect = styled.select`
  background: ${({ theme }) => theme.palette.white.main};
  color: ${({ theme }) => theme.palette.black.main};
  font-weight: 600;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding-left: 14px;
  border: 1px solid #ccc;
`;
