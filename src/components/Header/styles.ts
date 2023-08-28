import styled from "styled-components/native";
import { Platform } from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { SPACINGS } from "@styles/spacings";

type Props = {
  hasBackButton?: boolean;
};

export const Container = styled.View<Props>`
  height: ${Platform.OS === "ios"
    ? getStatusBarHeight() + 100
    : getStatusBarHeight() + 75}px;

  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  padding: ${SPACINGS.DEFAULT_PADDING};
  align-items: center;
  flex-direction: row;
  justify-content: ${({ hasBackButton }) => (!hasBackButton ? "center" : null)};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const BackButton = styled.View`
  margin-right: 70px;
`;

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 28,
  color: theme.COLORS.WHITE,
  weight: "bold",
}))``;

export const Logo = styled.Image`
  width: 150px;
  height: 50px;
`;
