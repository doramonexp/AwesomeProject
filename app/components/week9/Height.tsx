import { getData, storeData } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function Height() {
  const [height, setHeight] = useState<string>("0");

  const load = async () => {
    let h = await getData("height");
    h = h || "0";
    setHeight(h);
  };

  useEffect(() => {
    load();
  }, []);

  const save = async () => {
    await storeData("height", height);
    Alert.alert("✅ Height saved", `Your height is ${height} cm`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏃‍♂️ ป้อนข้อมูลส่วนสูง</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Height (cm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setHeight(text)}
          value={height}
          placeholder="e.g. 170"
          placeholderTextColor="#aaa"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={save}>
        <Text style={styles.buttonText}>Save Height</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f2f4f7",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 30,
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#555",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#000",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});