import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeRoutes from "./src/routes/HomeRoutes";

export default function App() {
  let [fontsLoaded] = useFonts({
    inter: Inter_400Regular,
    inter500: Inter_500Medium,
    inter700: Inter_700Bold,
    inter800: Inter_800ExtraBold,
    inter900: Inter_900Black,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar backgroundColor={"black"} style="light" />

          <HomeRoutes />
        </SafeAreaProvider>
      </NavigationContainer>
    );
  }
}
