import styled from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { SPACINGS } from "@styles/spacings";
import { Platform } from "react-native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  height: ${Platform.OS === "ios"
    ? getStatusBarHeight() + SPACINGS[100]
    : getStatusBarHeight() + SPACINGS[75]}px;

  border-bottom-left-radius: ${SPACINGS[25]}px;
  border-bottom-right-radius: ${SPACINGS[25]}px;

  justify-content: center;

  padding-top: ${SPACINGS[20]}px;
  padding-left: ${SPACINGS[15]}px;
`;

export const BackButton = styled.View`
  margin-right: ${SPACINGS[80]}px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.WHITE,
  weight: "bold",
}))``;

export const Logo = styled.View``;
