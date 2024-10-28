import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function Booking() {
  const { id } = useLocalSearchParams();
  const [therapist, setTherapist] = useState(null);
  const [concerns, setConcerns] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState("11:00 AM - 12:00 PM");
  const [mode, setMode] = useState("Phone");

  useEffect(() => {
    axios
      .get("http://10.171.139.240:3000/user?id=" + id)
      .then((response) => setTherapist(response.data))
      .catch((err) => console.log(err));
  }, []);
  const handleDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <View style={{ backgroundColor: "rgba(33,33,33,100)", flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>Fill your details</Text>

        {/* TextInput for Concerns */}
        <Text style={styles.label}>Describe the concerns you are facing</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Tell us what brings you to therapy:thoughts, concerns or anything that you'd want your mindcoach to know before hand"
          placeholderTextColor="gray"
          multiline={true}
          maxLength={250}
          value={concerns}
          onChangeText={setConcerns}
        />
        <Text style={styles.charCount}>{concerns.length}/250</Text>

        {/* Date Picker */}
        <Text style={styles.label}>Select the date</Text>
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.dateButton}
        >
          <Text style={styles.dateText}>{date.toDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
            minimumDate={new Date(2020, 0, 1)}
            maximumDate={new Date(2030, 11, 31)}
          />
        )}

        {/* Time Slot */}
        <Text style={styles.label}>Select the slot</Text>
        <TouchableOpacity style={styles.timeSlot}>
          <Text style={styles.timeSlotText}>{time}</Text>
          <Text style={styles.timeZone}>IST</Text>
        </TouchableOpacity>

        {/* Preferred Mode */}
        <Text style={styles.label}>Preferred Mode</Text>
        <Text style={styles.subText}>
          Pick what feels comfortable: a voice chat, video call or chat
        </Text>

        <View style={styles.modeButtons}>
          <TouchableOpacity
            style={[
              styles.modeButton,
              mode === "Phone" && styles.selectedModeButton,
            ]}
            onPress={() => setMode("Phone")}
          >
            <Text style={styles.modeButtonText}>Phone</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modeButton,
              mode === "Video" && styles.selectedModeButton,
            ]}
            onPress={() => setMode("Video")}
          >
            <Text style={styles.modeButtonText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.modeButton,
              mode === "Chat" && styles.selectedModeButton,
            ]}
            onPress={() => setMode("Chat")}
          >
            <Text style={styles.modeButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>

        {/* Proceed Button */}
        <TouchableOpacity style={styles.proceedButton}>
          <Text style={styles.proceedText}>PROCEED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(40,40,40,100)",
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  backButton: {
    marginBottom: 10,
  },
  backText: {
    color: "white",
    fontSize: 22,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sectionHeader: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  label: {
    color: "white",
    fontSize: 17,
    marginTop: 15,
  },
  textArea: {
    backgroundColor: "rbga(33,33,33,100)",
    color: "white",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 15,
    height: 120,
    marginTop: 10,
    textAlignVertical: "top",
  },
  charCount: {
    color: "gray",
    textAlign: "right",
    marginTop: 5,
  },
  dateButton: {
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    alignItems: "flex-start",
    color: "white",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    textAlignVertical: "top",
    backgroundColor: "rbga(33,33,33,100)",
    height: 100,
  },
  dateText: {
    color: "white",
    fontSize: 16,
  },
  timeSlot: {
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rbga(33,33,33,100)",
    color: "white",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "gray",
    textAlignVertical: "top",
  },
  timeSlotText: {
    color: "white",
    fontSize: 16,
  },
  timeZone: {
    color: "gray",
  },
  subText: {
    color: "gray",
    marginBottom: 10,
    fontSize: 14,
  },
  modeButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modeButton: {
    backgroundColor: "rgba(33,33,33,100)",
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  selectedModeButton: {
    backgroundColor: "#44B",
  },
  modeButtonText: {
    color: "white",
    fontSize: 16,
  },
  proceedButton: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: "center",
  },
  proceedText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
