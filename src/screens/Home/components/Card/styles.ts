import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

type BackgroundColorProps = {
  backgroundColor: string;
};

type TextColorProps = {
  textColor: string;
};

export const Container = styled.TouchableOpacity<BackgroundColorProps>`
  height: 235px;
  width: 48%;
  margin-right: 13.5px;
  margin-top: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  align-items: center;
  justify-content: center;
  border-radius: 25px;
`;

export const IdArea = styled.View`
  padding: 1px 6px;
  position: absolute;
  top: -10px;
  background-color: ${({ theme }) => theme.COLORS.WARNING};
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const Id = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.BLACK_100};
`;

export const Image = styled.Image`
  width: 135px;
  height: 135px;
  margin-bottom: 10px;
`;

export const ImageAbsolute = styled.Image`
  position: absolute;
  width: 140px;
  height: 140px;
  top: 10px;
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
