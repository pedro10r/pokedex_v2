import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { SPACINGS } from "@styles/spacings";

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;

const SIZE_IMAGE = 200;

type BackgroundColorProps = {
  backgroundColor: string;
};

type TextColorProps = {
  textColor: string;
};

export const Container = styled.View<BackgroundColorProps>`
  flex: 1;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Header = styled.View`
  flex: 1;
  padding-left: ${SPACINGS.DEFAULT_PADDING};
  padding-right: ${SPACINGS.DEFAULT_PADDING};
`;

export const BackButton = styled.TouchableOpacity``;

export const IconButton = styled(ArrowLeft).attrs(() => ({
  size: 24,
  weight: "bold",
}))``;

export const ActiveArea = styled.View`
  width: 100%;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text<TextColorProps>`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(25)}px;
  color: ${({ textColor }) => textColor};
`;

export const Id = styled.Text<TextColorProps>`
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(15)}px;
  color: ${({ textColor }) => textColor};
`;

export const TypeArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ImageBackground = styled.Image`
  position: absolute;
  left: ${widthScreen - SIZE_IMAGE + 30}px;
  top: ${heightScreen / 1.8 - SIZE_IMAGE}px;
  height: ${SIZE_IMAGE}px;
  width: ${SIZE_IMAGE}px;
`;

export const Image = styled.Image`
  position: absolute;
  top: -50%;
  left: 15%;
  width: 65%;
  height: 60%;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: -50px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
`;
