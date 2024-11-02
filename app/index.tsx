import React, { useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import axios from "axios";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "./atoms/userAtoms";


const App = () => {

const [user,setUser] = useRecoilState(userAtom);
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("authToken");
      if (token) {
        // Validate token with the server
        try {
          const response = await axios.get(
            "http://192.168.29.247:3000/user/validate",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          if (response.data.valid) {
            // Token is valid, navigate to main app
            console.log("Valid token");
            setUser(response.data.userId);
            router.replace("/(tabs)");
          } else {
            // Token is invalid, navigate to login
            console.log("Invalid token");
            router.replace("/authentication/signinEmail");
          }
        } catch (error) {
          console.log("Error in token validation");
          // Token validation failed, navigate to login
          router.replace("/authentication/signinEmail");
        }
      } else {
        // No token found, navigate to login
        router.replace("/welcomePage");
      }
    };

    checkToken();
  }, []);

  return (
    <RecoilRoot>
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
    </RecoilRoot>
  );
};

export default App;
