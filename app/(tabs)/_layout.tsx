import { Tabs } from "expo-router";
import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: true,
        headerTitleStyle: { color: "white" },
        headerStyle: {
          backgroundColor: "rgba(33,33,33,100)",
          borderBottomWidth: 0,
          shadowColor: "transparent",
        },

        tabBarInactiveBackgroundColor: "rgba(25,25,25,100)",
        tabBarActiveBackgroundColor: "rgba(25,25,25,100)",
        tabBarStyle: {
          borderTopWidth: 0,
          paddingVertical: 8,
          backgroundColor: "rgba(25,25,25,100)",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Assess",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="assessment" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="aichat"
        options={{
          title: "AI Chat",
          tabBarIcon: ({ color, focused }) => (
            <Entypo name="chat" size={24} color={color} />
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
