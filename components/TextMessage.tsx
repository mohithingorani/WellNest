import { StyleSheet, Text } from "react-native";
import { View } from "react-native";

export interface MessageObject {
  message: string;
  id: string;
  time: string;
  username: string;
}

export function TextMessage({
  messageObject,
}: {
  messageObject: MessageObject;
}) {
  const isMyMessage = messageObject.username === "User";

  if (isMyMessage) {
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginBottom: 8,
        }}
      >
        <View style={styles.myMessage}>
          <Text
            style={{
              maxWidth: "50%",
              backgroundColor: "rgba(26,102,255,100)",
              color: "white",
              fontSize: 18,
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            {messageObject.message}
          </Text>
        </View>
        <Text style={{ color: "gray", fontSize: 12, marginRight: 2 }}>
          {messageObject.time}
        </Text>
      </View>
    );
  } else
    return (
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginBottom: 8,
        }}
      >
        <View style={styles.botMessage}>
          <Text
            style={{
              maxWidth: "50%",
              backgroundColor: "rgba(27,27,27,100)",
              color: "white",
              fontSize: 18,
              paddingHorizontal: 14,
              paddingVertical: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            {messageObject.message.trimEnd()}
          </Text>
        </View>
        <Text style={{ color: "gray", fontSize: 12, marginLeft: 2 }}>
          {messageObject.time}
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  myMessage: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  botMessage: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
});
