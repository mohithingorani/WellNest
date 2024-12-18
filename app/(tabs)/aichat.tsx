import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  FlatList,
  ScrollView,
  Keyboard,
} from "react-native";

import { GoogleGenerativeAI } from "@google/generative-ai"; // Use ES6 import
import { useEffect, useRef, useState } from "react";
import { TextMessage } from "@/components/TextMessage";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function AICHAT() {
  const [context, setContext] = useState<Context[]>([]);
  const [inbox, setInbox] = useState<MessageObject[]>([]);
  const [message, setMessage] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);
  const [response, setResponse] = useState<string | null>(null);
  const [onlineStatus, setOnlineStatus] = useState<string>("Online");

  const scrollViewRef = useRef<any>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current?.scrollToEnd({ offset: 0, animated: true });
    }
  }, [inbox]);


  
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      }
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  interface MessageObject {
    message: string;
    id: string;
    time: string;
    username: string;
  }
  interface Context {
    username: string;
    message: string;
  }

  const getTime = () => {
    const dateWithoutSecond = new Date();
    const currentTime = dateWithoutSecond.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return currentTime;
  };
  async function handleSendMessage() {
    if (!message.trim()) return;
    setOnlineStatus("Typing...");
    const myMessage: MessageObject = {
      message: message,
      id: Date.now().toString(),
      time: getTime(),
      username: "User",
    };
    setInbox((prevInbox) => [...prevInbox, myMessage]);
    const newContext = [
      ...context,
      { message: myMessage.message, username: myMessage.username },
    ];
    setContext(newContext);
    setMessage("");
    try {
      // console.log("Fetching value with context:", context);
      const responseText = await fetchValue(message, context);
      console.log("Response received:", responseText());
      setResponse(responseText);

      if (responseText) {
        const newMessage: MessageObject = {
          message: responseText(),
          id: Date.now().toString(),
          time: getTime(),
          username: "Bot",
        };
        setInbox((prevInbox) => [...prevInbox, newMessage]);
        setContext([
          ...context,
          { message: newMessage.message, username: newMessage.username },
        ]);
        setMessage("");
      }
    } catch (e) {
      console.error("Error fetching chat response", e);

      setError(true);
    } finally {
      setOnlineStatus("Online");
    }
  }

  const fetchValue = async (prompt: string, context: Context[]) => {
    console.log("Fetching value with context:", context);
    const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY || "";
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = await genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const myPrompt = `
        You are a friendly and supportive therapist providing online therapy. Your responses should be clear, concise, and engaging. Use Cognitive Behavioral Therapy (CBT) and mindfulness techniques to help users feel in control of their emotions. Your response should be directly related to the user's input and considerate of the context of the conversation, which is: "${JSON.stringify(
          context
        )}". Avoid using special characters, stars, or hashtags in your responses. Keep your replies short and conversational, suitable for chat. The prompt is: "${prompt}".`;

      const result = await model.generateContent(myPrompt);
      console.log(result.response.text);
      return result.response.text;
    } catch (error) {
      console.error("Error generating content with Gemini API:", error);
      throw error;
    }
  };

  return (
    <SafeAreaView style={styles.outestContainer}>
      <SafeAreaView style={styles.outerContainer}>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: "gray",
          }}
        >
          <View
            style={{
              padding: 8,
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              gap: 12,
            }}
          >
            <MaterialIcons name="account-circle" size={30} color="white" />
            <Text style={{ color: "white", fontSize: 16 }}>Therapist</Text>
          </View>
          <View
            style={{
              paddingBottom: 4,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "gray",
                fontSize: 12,
              }}
            >
              {onlineStatus}
            </Text>
          </View>
        </View>
        <FlatList
          ref={scrollViewRef}
          style={{ paddingHorizontal: 10, paddingBottom: 36 }}
          data={inbox}
          renderItem={({ item }) => (
            <TextMessage key={item.id} messageObject={item} />
          )}
        />

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        ></View>
      </SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "black",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 4,
          borderRadius: 20,
          padding: 10,
        }}
      >
        <TextInput
          onChangeText={setMessage}
          value={message}
          placeholder="Enter message"
          placeholderTextColor={"gray"}
          style={{
            color: "white",
            width: "80%",
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0,
            borderRadius: 1,
            borderColor: "white",
          }}
        />
        <TouchableOpacity
          style={{ backgroundColor: "black" }}
          onPress={() => handleSendMessage()}
        >
          <View
            style={{
              height: "auto",
              backgroundColor: "rgba(32,161,141,100)",
              borderRadius: 15,
              borderWidth: 1,
              paddingVertical: 10,
              paddingHorizontal: 10,
              marginRight: 5,
            }}
          >
            <Text
              style={{
                color: "black",
              }}
            >
              Send
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "rgba(40,40,40,100)",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: "gray",
  },
  outestContainer: {
    flex: 1,
    backgroundColor: "rgba(33,33,33,100)",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
