import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> 🤠</Text>
      <Text>📱📱📱</Text>
      <Text>📱 　📱　📱</Text>
      <Text>👇🏽　 📱📱　👇🏽</Text>
      <Text>📱　 📱</Text>
      <Text>📱　　📱</Text>
      <Text>👢　　👢</Text>
      <Text>Howdy, I'm the sheriff of React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
