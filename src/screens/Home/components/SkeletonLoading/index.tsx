import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";

export function SkeletonLoading() {
  return (
    <MotiView>
      <Skeleton colorMode={"light"} radius={25} height={235} width={"48%"} />
      <Skeleton colorMode={"light"} radius={25} height={235} width={"48%"} />
    </MotiView>
  );
}
