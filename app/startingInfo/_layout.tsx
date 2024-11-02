import { Stack } from "expo-router";

export default function AuthenticationLayout() {
  return (
    <Stack>
      <Stack.Screen name="genderScreen" options={{ headerShown: false }} />
      <Stack.Screen name="healthConcern" options={{ headerShown: false }} />
      <Stack.Screen
        name="roughWeek"
        options={{ title: "", headerShown: false }}
      />
    </Stack>
  );
}
