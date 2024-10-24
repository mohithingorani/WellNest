import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export interface Therapist {
  id: String;
  name: String;
  email: String;
  password: String;
  speciality: String;
  experience: String;
}

export function TherapistCard({
  name,
  speciality,
  experience,
  id,
}: {
  name: String;
  speciality: String;
  experience: String;
  id: String;
}) {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpkefWmjBGQciTPmc9qOdz_Y2eEmIs9Qo-HA&s",
            }}
          />
          <View style={styles.imageCardText}>
            <TouchableOpacity>
              <Text style={styles.innerText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <Text style={{ color: "white", fontSize: 17 }}>{name}</Text>
          <Text style={{ color: "gray" }}>{speciality}</Text>
          <View style={{ flexDirection: "row", gap: 3 }}>
            <AntDesign name="star" size={17} color="rgba(255,192,6,100)" />
            <AntDesign name="star" size={17} color="rgba(255,192,6,100)" />
            <AntDesign name="star" size={17} color="rgba(255,192,6,100)" />
            <AntDesign name="star" size={17} color="rgba(255,192,6,100)" />
            <AntDesign name="staro" size={17} color="rgba(255,192,6,100)" />
          </View>
          <Text style={{ color: "white" }}>English, Hindi</Text>
          <Text style={{ color: "white" }}>{experience} of experience</Text>
        </View>
      </View>
      <View style={styles.bottomTextView}>
        <View
          style={{
            width: "100%",
            backgroundColor: "rgba(33,33,33,100)",
            flexDirection: "row",
            justifyContent: "center",
            borderRadius: 50,
            paddingHorizontal: 5,
            paddingVertical: 12,
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <Entypo
            style={{ paddingRight: 14 }}
            name="calendar"
            size={22}
            color="gray"
          />
          <Text style={{ color: "gray" }}>Next available slot: </Text>
          <Text style={{ color: "rgba(64,128,130,100)" }}>
            Tomorrow, 10:00 AM
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "rgba(230,230,230,100)", fontSize: 17 }}>
              ₹1800
            </Text>
            <Text style={{ color: "gray" }}>for 60 mins consultation</Text>
          </View>
          <TouchableOpacity>
            <Link href={{ pathname: "/booking/[id]", params: { id: `${id}` } }}>
              <View style={styles.Button}>
                <Text style={{ color: "black", fontWeight: "bold" }}>
                  Book Appointment
                </Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomTextView: {
    paddingTop: 10,
  },
  outerContainer: {
    marginBottom: 18,
    backgroundColor: "rgba(40,40,40,100)",
    paddingHorizontal: 13,
    borderRadius: 20,
    shadowColor: "black",
    borderColor: "rgba(54,54,54,100)",
    borderWidth: 1,
    paddingBottom: 20,
  },
  imageCardText: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  innerText: {
    color: "white",
    fontSize: 13,
  },
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  text: {
    color: "white",
  },
  innerContainer: {
    flexDirection: "column",
    flex: 1,
    gap: 4,
    paddingLeft: 15,
  },
  Button: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    alignItems: "center",
    marginVertical: 5,
  },
});
