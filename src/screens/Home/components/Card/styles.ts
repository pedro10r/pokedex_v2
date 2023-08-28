import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type BackgroundColorProps = {
  backgroundColor: string;
};

type TextColorProps = {
  textColor: string;
};

export const Container = styled.View<BackgroundColorProps>`
  height: 235px;
  width: 48%;
  margin-right: 13.5px;
  margin-top: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const PokeNumberContainer = styled.View`
  padding: 1px 6px;
  position: absolute;
  top: -10px;
  background-color: ${({ theme }) => theme.COLORS.WARNING};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const PokeNumber = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.BLACK_100};
`;

export const ImageContainer = styled.View<BackgroundColorProps>`
  height: 135px;
  width: 135px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-bottom: 10px;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 140px;
  height: 140px;
`;

export const Name = styled.Text<TextColorProps>`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  color: ${({ textColor }) => textColor};
`;

export const TypeArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const TypeContainer = styled.View<BackgroundColorProps>`
  padding: 2px 8px;
  margin: 0 3px 0 3px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  border-radius: 100px;
`;

export const TypeName = styled.Text<TextColorProps>`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ textColor }) => textColor};
`;
