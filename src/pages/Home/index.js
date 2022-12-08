import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={"Maicon"} />
      <Text>My app</Text>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
