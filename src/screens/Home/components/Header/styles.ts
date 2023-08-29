import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";

import { SPACINGS } from "@styles/spacings";

const widthScreen = Dimensions.get("screen").width;

const IMAGE_SIZE = 200;

export const Container = styled.View`
  height: ${Platform.OS === "ios" ? 100 : 75}px;
  padding: ${SPACINGS.DEFAULT_PADDING};
  justify-content: center;
`;

export const Logo = styled.Image`
  margin-top: 15px;
  width: 180px;
  height: 65px;
`;

export const ImageBackground = styled.Image`
  position: absolute;
  left: ${widthScreen - 150}px;
  top: -50px;
  height: ${IMAGE_SIZE}px;
  width: ${IMAGE_SIZE}px;
`;
