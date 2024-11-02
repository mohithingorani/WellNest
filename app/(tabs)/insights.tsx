import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from "expo-router";

export default function InsightsScreen() {
  
  const handleSignout = async () => {
    await AsyncStorage.removeItem("authToken");
    router.replace("/welcomePage");
  }
  
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleSignout}>
        <Text style={{
          color: "white",
          fontSize: 20,
          padding: 10,
          textAlign: "center",
          backgroundColor: "rgba(32,161,141,100)",
          borderRadius: 10,
          margin: 10
        }}>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
