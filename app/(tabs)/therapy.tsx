import { Therapist, TherapistCard } from "@/components/TherapistCard";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TherapyScreen() {
  const [users, setUsers] = useState<Therapist[] | null>(null);

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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "rgba(33,33,33,100)",
      }}
    >
      <FlatList
        style={{
          paddingHorizontal: 20,
        }}
        data={users}
        renderItem={({ item }) => (
          <TherapistCard
            name={item.name}
            speciality={item.speciality}
            experience={item.experience}
            id={item.id}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
