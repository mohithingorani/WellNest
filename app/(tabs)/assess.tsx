import { AssessButton } from "@/components/AssessButton";
import { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";

const items = [
  { id: "1", title: "General Mental Health" },
  { id: "2", title: "Anxiety" },
  { id: "3", title: "Depression" },
  { id: "4", title: "Trauma" },
  { id: "5", title: "Substance Abuse" },
  { id: "6", title: "Relationships" },
  { id: "7", title: "Neurodivergence" },
  { id: "8", title: "Quality of Life" },
];

export default function AssessScreen() {
  const handlePress = (id: string) => {
    setSelectedId(id);
  };

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.outerContainer}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <AssessButton
            selected={item.id === selectedId}
            onPress={() => handlePress(item.id)}
            text={item.title}
          />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        style={styles.flatListStyle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "rgba(33,33,33,100)",
  },
  flatListStyle: {
    marginLeft: 20,
    marginRight: 10,
  },
});
