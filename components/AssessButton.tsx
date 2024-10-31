import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export function AssessButton({
  text,
  selected,
  onPress
}: {
  text: string;
  selected: boolean;
    onPress: () => void;
}) {
  return (
    <Pressable style={{maxHeight:"auto"}} >
      {selected ? (
        <TouchableOpacity onPress={onPress} style={styles.selectedButton}>
          <Text style={{ color: "black", fontWeight: "bold" }}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Text style={{ color: "white" }}>{text}</Text>
        </TouchableOpacity>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(33,33,33,100)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    height: 40,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    height: 40,
    marginRight: 10,
  },    
});
