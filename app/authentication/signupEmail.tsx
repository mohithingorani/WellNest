import axios from "axios";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useHandler } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtoms";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SignUpWithEmail() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useRecoilState(userAtom);
  const [loading, setLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  function handleCreateAccount() {
    setLoading(true);
    try {
      const account = axios
        .post("http://192.168.29.247:3000/user", {
          name: name,
          email: email,
          phoneNumber: Number(phoneNumber),
          password: password,
        })
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          alert("Account created successfully");
          setUser(response.data.userId);
          router.replace("/(tabs)");

        });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 30,
          backgroundColor: "rgba(33,33,33,100)",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Welcome to WellNest
        </Text>
        <Text
          style={{
            color: "gray",
            marginVertical: 10,
          }}
        >
          Create an account to access therapy and other tools to help you
          monitor your mental health.
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Full Name*"
          placeholderTextColor="gray"
          style={styles.textInput}
        />

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email Address*"
          placeholderTextColor="gray"
          style={styles.textInput}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 20,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              borderWidth: 1,
              borderColor: "gray",
              paddingVertical: 15,
              fontSize: 16,
              paddingHorizontal: 30,
              marginTop: 20,
              borderRadius: 10,
            }}
          >
            +91
          </Text>
          <TextInput
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number*"
            placeholderTextColor="gray"
            style={[styles.textInput, { flex: 1 }]}
          />
        </View>
        <View
        style={[
          styles.textInput,
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <TextInput
          style={{
            fontSize: 16,
            color: "white",
          }}
          value={password}
          secureTextEntry={hidePassword ? true : false}
          onChangeText={setPassword}
          placeholder="Password (6+ characters)*"
          placeholderTextColor="gray"
        />
        <Ionicons
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
          name={hidePassword?"eye-off":"eye"}
          size={24}
          color="white"
        />
      </View>
        

        <View
          style={{
            flexDirection: "column",
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={handleCreateAccount}
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
          <Text
            style={{
              color: "gray",
              textAlign: "center",
            }}
          >
            Already have an account?{" "}
            <Link href={"/authentication/signinEmail"}>
              <Text style={{ color: "white" }}>Log In</Text>
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
