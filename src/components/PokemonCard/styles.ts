import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: 235px;
  width: 48%;
  margin-right: 13.5px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
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

export const ImageContainer = styled.View`
  height: 120px;
  width: 120px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  margin-bottom: 10px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TypeArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const TypeContainer = styled.View`
  padding: 2px 8px;
  margin: 0 3px 0 3px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
  align-items: center;
  border-radius: 100px;
`;

export const TypeName = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
