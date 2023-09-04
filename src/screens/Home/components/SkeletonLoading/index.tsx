import { SafeAreaView } from "react-native";
import { View } from "moti";
import { Skeleton } from "moti/skeleton";

import { Container, Header, Section } from "./styles";

export function SkeletonLoading() {
  const Spacer = ({ width = 15, height = 20 }) => (
    <View style={{ width, height }} />
  );

  const section = [1, 2, 3];

  return (
    <Container>
      <SafeAreaView />
      <Header>
        <Skeleton colorMode={"light"} radius={25} height={80} width={200} />
      </Header>

      <Spacer />

      {section.map((item, index) => (
        <View key={`${item}_${index}`}>
          <Section>
            <Skeleton
              colorMode={"light"}
              radius={25}
              height={235}
              width={170}
            />

            <Skeleton
              colorMode={"light"}
              radius={25}
              height={235}
              width={170}
            />
          </Section>

          <Spacer />
        </View>
      ))}
    </Container>
  );
}
