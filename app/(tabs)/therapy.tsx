import { Therapist, TherapistCard } from "@/components/TherapistCard";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function TherapyScreen() {
  const [users, setUsers] = useState<Therapist[] | null>(null);
  const [text, onChangeText] = useState("");
  const [isFocused, setIsFocused] = useState(false); // State for focus

  useEffect(() => {
    axios
      .get("http://10.171.139.240:3000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (users == null) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(33,33,33,100)",
      }}
    >
      <FlatList
        ListHeaderComponent={
          <View>
            <View
              style={[
                styles.searchBox,
                isFocused && styles.searchBoxFocused, // Conditionally apply focused style
              ]}
            >
              <FontAwesome6 name="magnifying-glass" size={24} color="gray" />
              <TextInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={onChangeText}
                value={text}
                placeholder="Search"
                placeholderTextColor="gray"
                style={styles.input}
              />
            </View>
            <Text style={{ color: "gray", marginBottom: 18 }}>
              Therapists help you build a stronger relationship with yourself
              and others
            </Text>
          </View>
        }
        style={{
          paddingHorizontal: 20,
        }}
        data={users.filter((item) => {
          if (text == "") {
            return item;
          } else {
            return item.name.toLowerCase().includes(text.toLowerCase());
          }
        })}
        renderItem={({ item }) => (
          <TherapistCard
            name={item.name}
            speciality={item.speciality}
            experience={item.experience}
            id={item.id}
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Ensures each item has a unique key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    alignContent: "center",
    marginBottom: 18,
    borderRadius: 13,
    height: 60,
    width: "100%",
    borderWidth: 1,
    backgroundColor: "rgba(40,40,40,100)",
    borderColor: "gray",
    paddingLeft: 13,
    paddingVertical: 10,
  },
  input: {
    fontSize: 17,
    color: "gray",
    flex: 1, // Make input take remaining space
  },
  searchBoxFocused: {
    shadowColor: "blue",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
