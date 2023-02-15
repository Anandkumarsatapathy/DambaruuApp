import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";
const Logout = () => {
  const navigation = useNavigation();
  const onLogout = () => {
    SecureStore.deleteItemAsync("isExistingUser");
    SecureStore.deleteItemAsync("TxnId");
    SecureStore.deleteItemAsync("mobileNumber");
    SecureStore.deleteItemAsync("data");
    SecureStore.deleteItemAsync("Token");
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={onLogout}>
          <Text
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: "bold",
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 160,
    height: 45,
    marginTop: 30,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 40,
    color: "white",
  },
});
