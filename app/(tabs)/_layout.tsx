import { Tabs } from "expo-router";
import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "rgba(25,25,25,100)",
        tabBarActiveBackgroundColor: "rgba(25,25,25,100)",
        tabBarStyle: { borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Discover",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="magnifying-glass" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="assess"
        options={{
          title: "Assess",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="assessment" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="therapy"
        options={{
          title: "Therapy",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="head-heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: "Insights",
          tabBarIcon: ({ color, focused }) => (
            <Octicons name="stack" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
