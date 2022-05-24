import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RoootNavigator from "./src/navigations/RootNavigator";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/LogIn";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return <HomeScreen />;
  // <Login />;

  // <RoootNavigator />;
}
