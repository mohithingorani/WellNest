import { Link } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function StartingPage() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(33,33,33,100)",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          marginTop: 100,
          marginHorizontal: 20,
        }}
      >
        When was the last time you took time for yourself
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
          marginBottom: 50,
          backgroundColor: "rgba(33,33,33,100)",
        }}
      >
        <View
          style={{
            backgroundColor: "rgba(1,126,91,100)",
            marginBottom: 20,
            paddingVertical: 40,
            gap: 20,
            height: 250,
            marginHorizontal: 20,
            borderRadius: 20,
            flexDirection: "column",
            rowGap: 40,
            justifyContent: "flex-start",
          }}
        >
          <Text
            style={{
              color: "white",
              paddingHorizontal: 40,
            }}
          >
            Let's start your journey with WellNest
          </Text>
          <Link href={"/genderScreen"} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "center",
                borderRadius: 10,
                paddingHorizontal: 10,
                paddingVertical: 12,
                alignItems: "center",
                marginHorizontal: 40,
              }}
            >
              <Text>Get Started</Text>
            </TouchableOpacity>
          </Link>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={{ color: "rgba(23,51,152,100)" }}>Login in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
