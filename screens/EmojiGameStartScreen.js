import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";

export default function EmojiGameStartScreen() {
  const [timeLeft, setTimeLeft] = useState(60); // Süre
  const [currentEmoji, setCurrentEmoji] = useState("🔥🎮🕹️"); // Başlangıç emojisi
  const [guess, setGuess] = useState(""); // Kullanıcının tahmini
  const [teamName, setTeamName] = useState("Takım 1"); // Aktif takım

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleGuessSubmit = () => {
    console.log("Tahmin:", guess);
    setGuess(""); // Tahmini temizle
  };

  const handlePass = () => {
    console.log("Pas geçildi!");
    setGuess(""); // Tahmini temizle
    // Burada yeni bir emoji set edebilirsin
  };

  return (
    <View style={styles.container}>
      {/* Üst Bar - Takım Adı ve Süre */}
      <View style={styles.topBar}>
        <Text style={styles.teamName}>{teamName}</Text>
        <Text style={styles.timer}>⏳ {timeLeft} sn</Text>
      </View>

      {/* Büyük Emoji */}
      <View style={styles.emojiContainer}>
        <Text style={styles.emoji}>{currentEmoji}</Text>
      </View>

      {/* Tahmin Girişi ve Butonlar */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Tahminini Yaz..."
          value={guess}
          onChangeText={setGuess}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleGuessSubmit}
        >
          <Text style={styles.buttonText}>Gönder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.passButton} onPress={handlePass}>
          <Text style={styles.buttonText}>Pas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFACD", // Açık sarı arka plan
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
  emojiContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  emoji: {
    fontSize: 100, // Büyük emoji
  },
  inputContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#800080",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  passButton: {
    backgroundColor: "#FF4500",
    paddingVertical: 12,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
