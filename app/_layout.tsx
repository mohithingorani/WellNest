import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";
import { RecoilRoot } from "recoil";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <RecoilRoot>
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "rgba(33,33,33,100)",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="welcomePage" options={{ headerShown: false }} />

      <Stack.Screen name="startingInfo" options={{ headerShown: false }} />
      <Stack.Screen name="authentication" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen
        name="booking/[id]"
        options={{
          title: "Booking Details",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "rgba(33,33,33,100)",
          },
        }}
      />
    </Stack>
    </RecoilRoot>
  );
}
