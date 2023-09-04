import { SPACINGS } from "@styles/spacings";
import { MotiView } from "moti";
import styled from "styled-components/native";

export const Container = styled(MotiView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Content = styled.View`
  padding: ${SPACINGS.DEFAULT_PADDING};
`;
