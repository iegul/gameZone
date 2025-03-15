import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function EmojiGameHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 GuessMoji 🎭</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("EmojiGameSetting")}
      >
        <Text style={styles.buttonText}>Yeni Oyun</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD700", // Canlı sarı arka plan
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#800080", // Turuncu-kırmızı buton
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5, // Android için gölge efekti
  },
  buttonText: {
    color: "#FAFAD2",
    fontSize: 18,
    fontWeight: "bold",
  },
});
