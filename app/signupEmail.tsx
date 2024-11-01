import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  
  export default function SignUpWithEmail() {
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
            placeholder="Full Name*"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
  
          <TextInput
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
              placeholder="Phone Number*"
              placeholderTextColor="gray"
              style={[styles.textInput, { flex: 1 }]}
            />
          </View>
          <TextInput
            placeholder="Password (6+ characters)*"
            placeholderTextColor="gray"
            style={styles.textInput}
          />
  
          <View
            style={{
              flexDirection: "column",
              justifyContent: "flex-end",
              flex: 1,
              marginBottom:20
            }}
          >
            <TouchableOpacity
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
              <Text style={{ color: "white" }}>Log In</Text>
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
  