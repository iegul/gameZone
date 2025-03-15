import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎮 GameZone 🕹️</Text>
      <Text style={styles.subtitle}>Bir oyun seç ve eğlenceye başla!</Text>

      {/* Oyun Seçenekleri */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TabuGame")}
      >
        <Text style={styles.buttonText}>🔥 Tabu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BenKimimGame")}
      >
        <Text style={styles.buttonText}>🤔 Ben Kimim?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CarkGame")}
      >
        <Text style={styles.buttonText}>🎡 Çark</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EmojiGame")}
      >
        <Text style={styles.buttonText}>🎭 Emoji Game</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFACD", // Açık sarı arka plan
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#4B0082", // Koyu Mor
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#800080", // Mor buton
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  buttonText: {
    color: "#FAFAD2", // Açık sarı yazı
    fontSize: 18,
    fontWeight: "bold",
  },
});
