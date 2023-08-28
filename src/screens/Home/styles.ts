import { SPACINGS } from "@styles/spacings";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Content = styled.View`
  padding: ${SPACINGS.DEFAULT_PADDING};
`;
