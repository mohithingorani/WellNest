import { router, useNavigation } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    option: "Male",
  },
  {
    id: 2,
    option: "Female",
  },
  {
    id: 3,
    option: "Non Binary",
  },
  {
    id: 4,
    option: "Other",
  },
];

export default function GennderScreen() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    setTimeout(() => {
      router.push("./healthConcern");
    }, 200);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(33,33,33,100)",
        paddingHorizontal: 20,
      }}
    >
      <TouchableOpacity
        onPress={() => router.push("/authentication/signupEmail")}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "right",
            paddingRight: 10,
            paddingTop: 10,
          }}
        >
          Skip
        </Text>
      </TouchableOpacity>
      <Text style={styles.headingText}>How do you identify?</Text>
      <Text style={styles.subHeadingText}>
        Our biology has an impact on our mental health too.
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleOptionPress(item.option)}>
                {item.option === selectedOption ? (
                  <Text style={styles.selectedOptionText}>{item.option}</Text>
                ) : (
                  <Text style={styles.optionsText}>{item.option}</Text>
                )}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 100,
  },
  subHeadingText: {
    color: "white",
    marginTop: 20,
  },
  optionsText: {
    color: "white",
    borderWidth: 1,
    borderColor: "gray",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  selectedOptionText: {
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "transparent",
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
});
