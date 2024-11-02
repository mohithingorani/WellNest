import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  function handleLogin() {
    setLoading(true);
    const account = axios
      .post("http://192.168.29.247:3000/user/login", {
        email: email,
        password: password,
      })
      .then(async (response) => {
        console.log(response.data);
        if (response.data.token) {
          await AsyncStorage.setItem("authToken", response.data.token);
          router.replace("/(tabs)");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    return account;
  }

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(33,33,33,100)",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator
          style={{
            height: 100,
          }}
          size="large"
          color="rgba(32,161,141,100)"
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "rgba(33,33,33,100)",
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        Log into your account
      </Text>
      <Text
        style={{
          color: "gray",
          marginVertical: 10,
        }}
      >
        Let's get you back when you left off.
      </Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address*"
        placeholderTextColor="gray"
        style={styles.textInput}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password*"
        placeholderTextColor="gray"
        style={styles.textInput}
      />
      <View
        style={{
          flexDirection: "column",
          flex: 1,
          justifyContent: "flex-end",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: "rgba(1,126,91,100)",
            marginBottom: 20,
            paddingVertical: 20,
            borderRadius: 20,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    width: "auto",
    paddingVertical: 15,
    fontSize: 16,
    paddingHorizontal: 30,
    marginTop: 15,
    borderRadius: 10,
  },
});