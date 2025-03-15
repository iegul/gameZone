import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BenKimimSettingScreen({ navigation }) {
  const [mode, setMode] = useState(null); // "Konu Seçme" veya "Kendin Yaz"
  const [selectedCategory, setSelectedCategory] = useState(""); // Seçilen konu

  const categories = ["Oyuncu", "Yazar", "Şarkıcı", "Ünlü", "Düşünür"];

  const handleStartGame = () => {
    navigation.navigate("BenKimimGameStart", {
      mode,
      selectedCategory: mode === "Konu Seçme" ? selectedCategory : null,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyun Ayarları ⚙️</Text>

      {/* Oyun Modu Seçimi */}
      <Text style={styles.label}>Bir Oyun Modu Seç:</Text>
      <TouchableOpacity
        style={[
          styles.optionButton,
          mode === "Konu Seçme" && styles.selectedButton,
        ]}
        onPress={() => setMode("Konu Seçme")}
      >
        <Text style={styles.buttonText}>📚 Konu Seçme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.optionButton,
          mode === "Kendin Yaz" && styles.selectedButton,
        ]}
        onPress={() => setMode("Kendin Yaz")}
      >
        <Text style={styles.buttonText}>✍️ Kendin Yaz</Text>
      </TouchableOpacity>

      {/* Eğer "Konu Seçme" seçildiyse, konular listesi göster */}
      {mode === "Konu Seçme" && (
        <View>
          <Text style={styles.label}>Bir Kategori Seç:</Text>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={styles.buttonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Başlat Butonu */}
      {mode && (
        <TouchableOpacity style={styles.startButton} onPress={handleStartGame}>
          <Text style={styles.buttonText}>Oyunu Başlat 🎭</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFC0CB", // Açık pembe arka plan
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#555",
    marginTop: 15,
  },
  optionButton: {
    backgroundColor: "#FF69B4",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#D147A3",
  },
  categoryButton: {
    backgroundColor: "#FFA07A",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
    width: "70%",
  },
  selectedCategory: {
    backgroundColor: "#FF4500",
  },
  startButton: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
