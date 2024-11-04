import { AssessButton } from "@/components/AssessButton";
import { PastReportCard } from "@/components/PastReportsCard";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "../atoms/userAtoms";
import axios from "axios";
import { QuestionCard } from "@/components/QuestionCard";
import { useQuestions } from "@/hooks/useQuestions";
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

  const [selectedId, setSelectedId] = useState<string | null>("1");
  const [user, setUser] = useRecoilState(userAtom);
  const [firstName, setFirstName] = useState<string | null>(null);
  useEffect(() => {
    async function getName() {
      const userName = await axios.get(
        "http://192.168.29.247:3000/user/name?id=" + user
      );
      setFirstName(userName.data.name.split(" ")[0]);
    }
    getName();
  }, []);

  const questions = useQuestions(items[Number(selectedId)-1].title);

  if (firstName === null) {
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(33,33,33,100)",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ActivityIndicator
        style={{
          height: 100,
        }}
        size="large"
        color="rgba(32,161,141,100)"
      />
    </View>;
  }

  return (
    <RecoilRoot>
      <FlatList
        style={styles.outerContainer}
        ListHeaderComponent={
          <SafeAreaView>
            <Text
              style={{
                color: "white",
                marginHorizontal: 20,
                fontSize: 26,
                fontWeight: "bold",
                marginTop: 20,
              }}
            >
              👋 Hi {firstName},
            </Text>
            <Text style={{
              color:"white"
            }}>
            </Text>
            <Text
              style={{
                color: "gray",
                marginHorizontal: 20,
                fontSize: 16,
                fontWeight: "regular",
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              It's a good day to discover yourself.
            </Text>

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
        }
        data={questions}
        renderItem={({ item }) => {
          return (
            <QuestionCard title={item.title} description={item.description} />
          );
        }}
      />
    </RecoilRoot>
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
    minHeight: 40,
    paddingBottom: 20,
  },
});
