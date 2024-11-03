import { useFonts } from "expo-font";
import { Slot, Stack, Tabs } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'bb': require('./../assets/fonts/BalooBhaijaan2-Regular.ttf')
  })

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <>
      <Slot/>
    </>
  );
}
