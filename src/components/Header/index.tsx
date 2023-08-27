import { BackButton, Container, Icon, Logo } from "./styles";

import logo from "@assets/logo.png";

type Props = {
  hasBackButton?: boolean;
  onPress?: () => void;
};

export function Header({ hasBackButton }: Props) {
  return (
    <Container hasBackButton={hasBackButton}>
      {hasBackButton && (
        <BackButton>
          <Icon />
        </BackButton>
      )}

      <Logo source={logo} />
    </Container>
  );
}
