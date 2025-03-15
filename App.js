import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import EmojiGameHomeScreen from "./screens/EmojiGameHomeScreen";
import EmojiGameSettingScreen from "./screens/EmojiGameSettingScreen";
import EmojiGameStartScreen from "./screens/EmojiGameStartScreen";
import BenKimimHomeScreen from "./screens/BenKimimHomeScreen";
import BenKimimSettingScreen from "./screens/BenKimimSettingsScreen";
import TabuHomeScreen from "./screens/TabuGameHomeScreen";
import TabuSettingScreen from "./screens/TabuGameSettingScreen";
import TabuGameStartScreen from "./screens/TabuGameStartScreen";
import BenKimimStartScreen from "./screens/BenKimimStartScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#800080" }, // Header arka plan rengi
          headerTintColor: "#fff", // Header yazı rengi (beyaz)
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" }, // Başlık stilini belirleme
        }}
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EmojiGame" component={EmojiGameHomeScreen} />
        <Stack.Screen
          name="EmojiGameSetting"
          component={EmojiGameSettingScreen}
        />
        <Stack.Screen name="EmojiGameStart" component={EmojiGameStartScreen} />
        <Stack.Screen name="BenKimimGame" component={BenKimimHomeScreen} />
        <Stack.Screen
          name="BenKimimSetting"
          component={BenKimimSettingScreen}
        />
        <Stack.Screen
          name="BenKimimGameStart"
          component={BenKimimStartScreen}
        />
        <Stack.Screen name="TabuGame" component={TabuHomeScreen} />
        <Stack.Screen name="TabuSetting" component={TabuSettingScreen} />
        <Stack.Screen name="TabuGameStart" component={TabuGameStartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
