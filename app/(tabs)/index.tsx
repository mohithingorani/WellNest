import { AssessButton } from "@/components/AssessButton";
import { PastReportCard } from "@/components/PastReportsCard";
import { useState } from "react";
import { FlatList, StyleSheet, SafeAreaView, View, Text } from "react-native";

const items = [
  { id: "1", title: "General Mental Health" },
  { id: "2", title: "Quality of life" },
  { id: "3", title: "Neurodivergence" },
  { id: "4", title: "Relationships" },
  { id: "5", title: "Trauma" },
];

export default function AssessScreen() {
  const handlePress = (id: string) => {
    setSelectedId(id);
  };

  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.outerContainer}>
      
      <PastReportCard />
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
