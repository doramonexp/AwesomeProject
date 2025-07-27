import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View, } from "react-native";
import * as Animatable from "react-native-animatable";


import { ThemeToggle } from "./components/ThemeToggle";
import { FlexboxRoutes } from "./routes";
import { useThemeStore } from "./stores/useThemeStore";
import { theme } from "./theme";

import type { ComponentProps } from "react";
type IconName = ComponentProps<typeof MaterialIcons>["name"];

const buttons: { label: string; href: FlexboxRoutes; icon: IconName }[] = [
  { label: "Ex01", href: FlexboxRoutes.Ex01, icon: "view-module" },
  { label: "Ex02", href: FlexboxRoutes.Ex02, icon: "layers" },
  { label: "Ex03", href: FlexboxRoutes.Ex03, icon: "dashboard" },
  { label: "Ex04", href: FlexboxRoutes.Ex04, icon: "apps" },
  { label: "Ex05", href: FlexboxRoutes.Ex05, icon: "widgets" },
  { label: "Ex06", href: FlexboxRoutes.Ex06, icon: "table-rows" },
  { label: "Ex07", href: FlexboxRoutes.Ex07, icon: "flip" },
  { label: "Ex08", href: FlexboxRoutes.Ex08, icon: "space-dashboard" },
  { label: "Ex09", href: FlexboxRoutes.Ex09, icon: "menu" },
  { label: "Ex10", href: FlexboxRoutes.Ex10, icon: "window" },
  { label: "Ex11", href: FlexboxRoutes.Ex11, icon: "grid-view" },
  { label: "Ex12", href: FlexboxRoutes.Ex12, icon: "apps-outage" },
  { label: "Travel", href: FlexboxRoutes.Travel, icon: "camera" },
  { label: "Resort", href: FlexboxRoutes.Resort, icon: "home" },
  { label: "Review", href: FlexboxRoutes.View, icon: "book" },
  { label: "Health", href: FlexboxRoutes.Health, icon: "book" },

];

export default function Index() {
  const { theme: current } = useThemeStore();
  const { width } = useWindowDimensions();
  const t = theme[current];

  return (
    <ScrollView>
    <View style={[styles.container, { backgroundColor: t.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: t.text },]}>✨ เลือกเมนู ✨</Text>
        <ThemeToggle />
      </View>
      <View style={styles.grid}>
        {buttons.map(({ label, href, icon }) => (
          <Animatable.View
            key={label}
            animation="fadeInUp"
            duration={500}
            style={[styles.item, { backgroundColor: t.card }]}
          >
            
            <Pressable
              onPress={() => router.push(href as any)}
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: t.accent },
                pressed && { transform: [{ scale: 0.96 }] },
              ]}
            >
              <MaterialIcons name={icon} size={28} color="#fff" />
              <Text style={styles.buttonText}>{label}</Text>
            </Pressable>
          </Animatable.View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  item: {
    flexBasis: "25%",
    aspectRatio: 1,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    overflow: "hidden",
  },
  button: {
    flex: 1,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
    marginTop: 8,
  },
});
