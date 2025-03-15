import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function TabuSettingScreen({ navigation }) {
  const [teamCount, setTeamCount] = useState(2);
  const [teamNames, setTeamNames] = useState(["Takım 1", "Takım 2"]);
  const [gameTime, setGameTime] = useState(60);
  const [passLimit, setPassLimit] = useState(3);
  const [winningScore, setWinningScore] = useState(50);
  const [scorePerCorrect, setScorePerCorrect] = useState(10);
  const [scorePerWrong, setScorePerWrong] = useState(-5);
  const [scorePerPass, setScorePerPass] = useState(-2);

  const handleStartGame = () => {
    navigation.navigate("TabuGameStart", {
      teamNames,
      gameTime,
      passLimit,
      winningScore,
      scorePerCorrect,
      scorePerWrong,
      scorePerPass,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Oyun Ayarları ⚙️</Text>

      {/* Takım Sayısı Seçimi */}
      <Text style={styles.label}>Takım Sayısı (2-4):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={teamCount.toString()}
        onChangeText={(text) => {
          const num = Math.max(2, Math.min(4, parseInt(text) || 2));
          setTeamCount(num);
          setTeamNames(Array.from({ length: num }, (_, i) => `Takım ${i + 1}`));
        }}
      />

      {/* Takım İsimleri */}
      {teamNames.map((name, index) => (
        <TextInput
          key={index}
          style={styles.input}
          placeholder={`Takım ${index + 1} Adı`}
          value={name}
          onChangeText={(text) => {
            const newTeamNames = [...teamNames];
            newTeamNames[index] = text;
            setTeamNames(newTeamNames);
          }}
        />
      ))}

      {/* Oyun Süresi */}
      <Text style={styles.label}>Oyun Süresi (sn):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={gameTime.toString()}
        onChangeText={(text) => setGameTime(parseInt(text) || 60)}
      />

      {/* Pas Hakkı */}
      <Text style={styles.label}>Pas Hakkı:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={passLimit.toString()}
        onChangeText={(text) => setPassLimit(parseInt(text) || 3)}
      />

      {/* Puanlar */}
      <Text style={styles.label}>Doğru Cevap Puanı:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={scorePerCorrect.toString()}
        onChangeText={(text) => setScorePerCorrect(parseInt(text) || 10)}
      />

      <Text style={styles.label}>Yanlış Cevap Puanı:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={scorePerWrong.toString()}
        onChangeText={(text) => setScorePerWrong(parseInt(text) || -5)}
      />

      <Text style={styles.label}>Pas Puanı:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={scorePerPass.toString()}
        onChangeText={(text) => setScorePerPass(parseInt(text) || -2)}
      />

      {/* Oyun Bitiş Puanı */}
      <Text style={styles.label}>Kaç Puan Ulaşıldığında Oyun Bitmeli?</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={winningScore.toString()}
        onChangeText={(text) => setWinningScore(parseInt(text) || 50)}
      />

      {/* Oyunu Başlat Butonu */}
      <TouchableOpacity style={styles.button} onPress={handleStartGame}>
        <Text style={styles.buttonText}>Oyunu Başlat 🎮</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFAD60",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 10,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFCBA4",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#800080",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#FAFAD2",
    fontSize: 16,
    fontWeight: "bold",
  },
});
