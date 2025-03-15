import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function TabuGameStartScreen() {
  const [timeLeft, setTimeLeft] = useState(60); // Süre
  const [teamName, setTeamName] = useState("Takım 1"); // Aktif takım

  // Tabu oyunu için kelime kartları (örnek veri)
  const words = [
    {
      main: "Bilgisayar",
      forbidden: ["Klavye", "Ekran", "Fare", "Teknoloji", "Kod"],
    },
    {
      main: "Telefon",
      forbidden: ["Arama", "Mobil", "Mesaj", "Numara", "Selfie"],
    },
    { main: "Kedi", forbidden: ["Evcil", "Tüy", "Miyav", "Köpek", "Kum"] },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handlePass = () => {
    console.log("Pas geçildi!");
    nextWord();
  };

  const handleTabu = () => {
    console.log("Tabu kelimesi söylendi!");
    nextWord();
  };

  const handleCorrect = () => {
    console.log("Doğru tahmin edildi!");
    nextWord();
  };

  const nextWord = () => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  return (
    <View style={styles.container}>
      {/* Üst Bar - Takım Adı ve Süre */}
      <View style={styles.topBar}>
        <Text style={styles.teamName}>{teamName}</Text>
        <Text style={styles.timer}>⏳ {timeLeft} sn</Text>
      </View>

      {/* Kelime Kartı */}
      <View style={styles.card}>
        <Text style={styles.mainWord}>{words[currentWordIndex].main}</Text>
        <View style={styles.forbiddenWordsContainer}>
          <Text style={styles.forbiddenTitle}>❌ Yasaklı Kelimeler:</Text>
          {words[currentWordIndex].forbidden.map((word, index) => (
            <Text key={index} style={styles.forbiddenWord}>
              {word}
            </Text>
          ))}
        </View>
      </View>

      {/* Oyun Butonları */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.passButton} onPress={handlePass}>
          <Text style={styles.buttonText}>Pas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabuButton} onPress={handleTabu}>
          <Text style={styles.buttonText}>Tabu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.correctButton} onPress={handleCorrect}>
          <Text style={styles.buttonText}>Doğru</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD580", // Açık turuncu arka plan
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  topBar: {
    position: "absolute",
    top: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#800080", // Mor renk
  },
  timer: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF4500", // Kırmızımsı renk
  },
  card: {
    width: "90%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
    marginBottom: 30,
  },
  mainWord: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
  },
  forbiddenWordsContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  forbiddenTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FF4500",
    marginBottom: 5,
  },
  forbiddenWord: {
    fontSize: 16,
    color: "#800080",
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  passButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 12,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
  },
  tabuButton: {
    backgroundColor: "#FF4500",
    paddingVertical: 12,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
  },
  correctButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
