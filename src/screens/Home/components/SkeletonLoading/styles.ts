import styled from "styled-components/native";
import { View } from "moti";

export const Container = styled(View)`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const Header = styled(View)`
  margin-top: 10px;
`;

export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
