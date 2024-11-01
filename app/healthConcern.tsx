import { Link } from "expo-router";
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
  { id: 1, option: "Thyroid" },
  { id: 2, option: "Diabetes" },
  { id: 3, option: "High Blood Pressure" },
  { id: 4, option: "PCOS" },
  { id: 5, option: "Neurological Concerns" },
  { id: 6, option: "Hypertension" },
  { id: 7, option: "Respiratory Concerns" },
  { id: 8, option: "Heart Disease" },
];

export default function HealthConcern() {
  const [selectedOptions, setSelectedOptions] = useState<string[] | null>([]);

  const handleOptionPress = (option: string) => {
    if (selectedOptions?.includes(option)) {
      setSelectedOptions(selectedOptions?.filter((item) => item !== option));
      return;
    }
    setSelectedOptions([...(selectedOptions || []), option]);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(33,33,33,100)",
        paddingHorizontal: 20,
      }}
    >
      <FlatList
      showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(1,126,91,100)",
                  minHeight: 10,
                  minWidth: "48%",
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  backgroundColor: "gray",
                  minHeight: 10,
                  minWidth: "48%",
                  borderRadius: 20,
                }}
              />
            </View>
            <Text style={styles.headingText}>
              Any health concerns we should know about?
            </Text>
            <Text style={styles.subHeadingText}>
              You can select more than one option.
            </Text>
          </View>
        }
        ListFooterComponent={
          <Link href={"/roughWeek"} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(1,126,91,100)",
                paddingVertical: 20,
                borderRadius: 20,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Continue
              </Text>
            </TouchableOpacity>
          </Link>
        }
        style={{ marginTop: 20 }}
        data={data}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleOptionPress(item.option)}>
              <Text
                style={
                  selectedOptions?.includes(item.option)
                    ? styles.selectedOptionText
                    : styles.optionsText
                }
              >
                {item.option}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: "white",
    fontSize: 17,
    marginTop: 30,
    fontWeight: "bold",
  },
  subHeadingText: {
    color: "gray",
    marginTop: 10,
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
