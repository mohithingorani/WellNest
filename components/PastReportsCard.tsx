import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Foundation from "@expo/vector-icons/Foundation";
export function PastReportCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Understand your{" "}
        <Text style={{ color: "rgba(32,161,141,100)" }}>symptoms </Text>
        <FontAwesome6
          name="magnifying-glass"
          size={24}
          color="rgba(32,161,141,100)"
        />{" "}
        with these{" "}
        <Text style={{ color: "rgba(32,161,141,100)" }}>assessment </Text>
        <FontAwesome5
          name="brain"
          size={24}
          color="rgba(32,161,141,100)"
        />{" "}
        tests
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          marginTop: 30,
          alignItems: "center",
          gap: 10,
        }}
      >
        <Foundation name="page" size={28} color="gray" />
        <Text
          style={{
            color: "gray",
            paddingLeft: 10,
            paddingRight: 10,
            lineHeight: 25,
          }}
        >
          All your test reports are here. You can view share them anytime.
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            color: "rgba(32,161,141,100)",
            marginTop: 20,
            fontWeight: "bold",
            lineHeight: 25,
          }}
        >
          View all past test reportss
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(40,40,40,100)",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 20 },
  },
  heading: {
    color: "white",
    fontSize: 18,
    lineHeight: 36,
    fontWeight: "bold",
  },
});
