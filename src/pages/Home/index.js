import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Maicon' />
      <Balance saldo='9.250,00' gastos='-527,00' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
