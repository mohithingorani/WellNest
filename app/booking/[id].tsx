import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Booking() {
  const { id } = useLocalSearchParams();
  const [therapist, setTherapist] = useState(null);
  const [text, onChangeText] = useState("");
  useEffect(() => {
    axios
      .get("http://10.171.139.240:3000/user?id=" + id)
      .then((response) => setTherapist(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <SafeAreaView>
      <Text>Fill Your Details</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter Your Text"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width : "50%",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});
