import { Stack } from "expo-router";

export default function AuthenticationLayout() {
  return (
    <Stack>
      <Stack.Screen name="signupIntro" options={{ headerShown: false }} />
      <Stack.Screen name="signupEmail" options={{ headerShown: false }} />
      <Stack.Screen
        name="signinEmail"
        options={{ title: "", headerShown: true, headerTransparent: true }}
      />
    </Stack>
  );
}