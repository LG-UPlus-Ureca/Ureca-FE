/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

export const Button = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : 'fit-content')};

  border-radius: 0.75rem;
  background-color: ${({ bg }) => (bg ? bg : colors.white)};
  background-image: ${({ bgi }) => (bgi ? bgi : 'none')};
  border: ${({ isBorder }) =>
    isBorder ? '1px solid rgba(255, 255, 255, 0.5)' : 'none'};

  box-sizing: border-box;
  margin-left: 1.5rem;

  font-family: 'Pretendard';
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '14px')};
  font-weight: 600;
  color: ${({ fontColor }) => (fontColor ? fontColor : colors.primaryColor)};

  &:hover {
    cursor: pointer;
    background-color: ${({ hoverBg }) =>
      hoverBg ? hoverBg : colors.primaryColor};
    background-image: ${({ hbgi }) => (hbgi ? hbgi : 'none')};
    color: ${({ hoverFontColor }) =>
      hoverFontColor ? hoverFontColor : colors.white};
  }
`;
