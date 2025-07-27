import { FontAwesome } from '@expo/vector-icons'; // ถ้าใช้ Expo
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HeartCounter() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(prev => prev + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
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
    alignItems: "center",
    marginTop: 40,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: 10,
  },
  countText: {
    fontSize: 32,
    marginLeft: 12,
    color: "#333",
  },

  box:{
    flexDirection: "row",
    padding:10,
  }
});