import { StyleSheet, Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
export function QuestionCard({}) {
  return (
    <View
      style={{
        backgroundColor: "rgba(40,40,40,100)",
        marginHorizontal: 20,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 15,
        padding: 20,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            maxWidth: "70%",
          }}
        >
          <Text style={styles.headingText}>Is it just a bad mood or more?</Text>
          <Text style={styles.paragraphText}>
            Prolonged bad mood could indicate that something in our life is off
            or needs attention. Here you....
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <Entypo name="emoji-happy" size={50} color="gray" />
        </View>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 4,
          }}
        >
          <View>
            <FontAwesome6 name="shield" size={20} color="green" />
            <MaterialIcons
              style={{
                position: "absolute",
                top: 4,
                left: 2.5,
              }}
              name="done"
              size={12}
              color="white"
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontWeight: "bold",
              marginVertical: 20,
            }}
          >
            Verified by :
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "rgba(33,33,33,100)",
            paddingVertical: 20,
            borderRadius: 20,
            width: "85%",
            shadowColor: "black",
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity:1,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Ketaki Natekar, Sr. Psychologist
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 15,
  },
  paragraphText: {
    color: "gray",
    fontSize: 15,
  },
});
