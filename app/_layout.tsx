import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";
import "react-native-reanimated";

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
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "rgba(33,33,33,100)",
        },
        headerTintColor:"white"
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="genderScreen" options={{ headerShown: false }} />
      <Stack.Screen name="healthConcern" options={{ headerShown: false }} />
      <Stack.Screen name="roughWeek" options={{ headerShown: false }} />
      <Stack.Screen name="signupIntro" options={{ headerShown: false }} />
      <Stack.Screen name="signupEmail" options={{ headerShown: false }} />
      <Stack.Screen
        name="signinEmail"
        options={{ title: "", headerShown: true }}
    
    />
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
  );
}
