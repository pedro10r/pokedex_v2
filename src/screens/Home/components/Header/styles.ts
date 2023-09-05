import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";

import { SPACINGS } from "@styles/spacings";
import { RFValue } from "react-native-responsive-fontsize";

const widthScreen = Dimensions.get("screen").width;

const IMAGE_SIZE = 200;

export const Container = styled.View`
  height: 200px;
  padding: ${SPACINGS.DEFAULT_PADDING};
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 15px;
  width: 180px;
  height: 65px;
`;

export const Title = styled.Text`
  margin-top: 15px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONTS.BOLD};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.COLORS.BLACK_100};
`;

export const ImageBackground = styled.Image`
  position: absolute;
  left: ${widthScreen - 150}px;
  top: -50px;
  height: ${IMAGE_SIZE}px;
  width: ${IMAGE_SIZE}px;
`;
