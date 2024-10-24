import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";

export default function Booking() {
  const { id } = useLocalSearchParams();
  const [therapist, setTherapist] = useState(null);

  useEffect(() => {
    axios
      .get("http://10.171.139.240:3000/user?id=" + id)
      .then((response) => setTherapist(response.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <SafeAreaView>
      
    </SafeAreaView>
  );
}
