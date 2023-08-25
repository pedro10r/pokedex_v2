import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { SPACINGS } from "@styles/spacings";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  height: ${SPACINGS[110]}px;

  border-bottom-left-radius: ${SPACINGS[25]}px;
  border-bottom-right-radius: ${SPACINGS[25]}px;
`;

export const BackButton = styled.View`
  margin-right: ${SPACINGS[80]}px;
`;

export const Logo = styled.View``;
