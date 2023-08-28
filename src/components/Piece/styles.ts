import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type BackgroundColorProps = {
  backgroundColor: string;
};

type TextColorProps = {
  textColor: string;
};

export const Container = styled.View<BackgroundColorProps>`
  padding: 2px 8px;
  margin: 0 3px 0 3px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  border-radius: 100px;
`;

export const Name = styled.Text<TextColorProps>`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ textColor }) => textColor};
`;
