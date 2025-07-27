import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [category, setCategory] = useState('');

  const onPressButton = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (w > 0 && h > 0) {
      const output = w / ((h / 100) * (h / 100));
      setBmi(output.toFixed(2));
      setCategory(getBMICategory(output));
    } else {
      setBmi('');
      setCategory('');
    }
  };

  const getBMICategory = (bmi: number) => {
    
    if (bmi <= 18.4 ) return 'ผอมมาก';
    if (bmi >= 18.5 && bmi <=24.99) return 'Normal';
    if (bmi >= 25 && bmi <=29.99) return 'Overweight';
    if (bmi >= 30.00 && bmi <=34.99) return 'Obese';
    
    
    return 'EXTREMELY OBESE';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Weight Input */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Weight (kg.)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Input your weight"
          value={weight}
          onChangeText={setWeight}
        />
      </View>

      {/* Height Input */}
      <View style={styles.inputCard}>
        <Text style={styles.label}>Height (cm.)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Input your height"
          value={height}
          onChangeText={setHeight}
        />
      </View>

      {/* Result */}
      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View style={styles.resultBox}>
          <Text style={{ fontSize: 20 }}>{bmi || '--'}</Text>
        </View>
        <View style={styles.resultBox}>
          <Text style={{ fontSize: 20 }}>{category || '--'}</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity onPress={onPressButton}>
    <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
        <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
            Calculate
        </Text>
    </View>
</TouchableOpacity>




    </ScrollView>
  );
}





















const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputCard: {
    backgroundColor: "white",
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 150,
    justifyContent: "space-around",
  },
  label: {
    fontSize: 20,
  },
  input: {
    fontSize: 20,
  },
  resultBox: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 10,
    margin: 10,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});