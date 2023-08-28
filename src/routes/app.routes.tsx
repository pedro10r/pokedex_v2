import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Details } from "@screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureEnabled: false,
          animation: "slide_from_right",
        }}
      />

      <Screen name="Details" component={Details} />
    </Navigator>
  );
}
