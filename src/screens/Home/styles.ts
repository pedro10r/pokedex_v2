import { SPACINGS } from "@styles/spacings";
import { MotiView } from "moti";
import styled from "styled-components/native";

export const Container = styled(MotiView).attrs({
  from: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { type: "timing", duration: 2000 },
})`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Content = styled.View`
  padding: ${SPACINGS.DEFAULT_PADDING};
`;
