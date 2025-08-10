import { getData, storeData } from "@/utils/storage";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function WeightChart() {
  const [weight, setWeight] = useState<string>("0");
  const [weightHistory, setWeightHistory] = useState<number[]>([]);

  const load = async () => {
    let wc = await getData("weightHistory");
    wc = wc || [10, 20];
    setWeightHistory(wc);
  };

  useEffect(() => {
    load();
  }, []);

  const addWeight = () => {
    const newWeight = parseInt(weight);
    if (!isNaN(newWeight)) {
      const wh = [...weightHistory, newWeight];
      setWeightHistory(wh);
      setWeight("0");
      storeData("weightHistory", wh);
    }
  };

  const reset = () => {
    const wh = [10, 20];
    setWeightHistory(wh);
    setWeight("0");
    storeData("weightHistory", wh);
  };

  const formatChartData = () => {
    return weightHistory.map((weight, index) => ({ x: index + 1, y: weight }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>⚖️ ป้อนข้อมูลน้ำหนัก</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Enter Weight (kg)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setWeight(text)}
          value={weight}
          placeholder="e.g. 65"
          placeholderTextColor="#aaa"
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={addWeight}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {weightHistory.length > 0 && (
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>📈 Weight History</Text>
          <LineChart
            data={{
              labels: formatChartData().map((item) => item.x.toString()),
              datasets: [{ data: formatChartData().map((item) => item.y) }],
            }}
            width={screenWidth - 40}
            height={220}
            yAxisSuffix="kg"
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
      )}
    </ScrollView>
  );
}

const chartConfig = {
  backgroundColor: "#fff",
  backgroundGradientFrom: "#f2f4f7",
  backgroundGradientTo: "#f2f4f7",
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 123, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: "4",
    strokeWidth: "2",
    stroke: "#007bff",
  },
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f2f4f7",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
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
    marginBottom: 20,
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
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  resetButton: {
    backgroundColor: "#6c757d",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  chartCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  chart: {
    borderRadius: 16,
  },
});