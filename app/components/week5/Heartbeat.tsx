import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeartCounter() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity style={styles.iconButton} onPress={handlePress}>
          <FontAwesome name="heart" size={48} color="red" />
        </TouchableOpacity>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  iconButton: {
    padding: 10,
  },
  countText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
});