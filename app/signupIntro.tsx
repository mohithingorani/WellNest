import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
export default function SignupIntro() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: "rgba(33,33,33,100)",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "semibold",
        }}
      >
        Lastly, let's create an account
      </Text>
      <Text
        style={{
          color: "gray",
          marginTop: 10,
        }}
      >
        Creating a spot for you in WellNest universe here
      </Text>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          gap: 50,
          marginTop: 50,
        }}
      >
        <Link href={"/signupEmail"} asChild>
          <TouchableOpacity style={styles.signupbutton}>
            <Ionicons name="mail" size={24} color="white" />

            <Text style={{ color: "white" }}>Sign Up with Email</Text>
          </TouchableOpacity>
        </Link>
        <Text style={{ textAlign: "center", color: "gray", fontSize: 18 }}>
          or
        </Text>
        <View style={styles.signupbutton}>
          <Image
            source={{
              uri: "https://img.icons8.com/color/48/000000/google-logo.png",
            }}
            style={{ width: 24, height: 24 }}
          />

          <Text style={{ color: "white" }}>Continue with Google</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signupbutton: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "100%",
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 20,
    borderRadius: 20,
  },
});
