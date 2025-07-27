import React from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Bmi from "./components/week5/Bmi";
import Heartbeat from "./components/week5/Heartbeat";

export default function Health() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView  style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <Bmi />
          <Heartbeat />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  
  keyboard: {
    flex: 1,
  },

  scroll: {
    padding: 1,
    justifyContent: 'center',
  },
});