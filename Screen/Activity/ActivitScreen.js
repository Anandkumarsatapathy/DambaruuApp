import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ActivitScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Comming Scoon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ActivitScreen;
