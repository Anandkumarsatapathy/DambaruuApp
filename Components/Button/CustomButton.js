import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ textData, color }) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            marginTop: 5,
            marginBottom: 10,
          }}
        >
          {textData}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 160,
    height: 45,
    marginTop: 30,
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "blue",
    borderRadius: 40,
    color: "white",
    shadowOffset: {width: -2, height: 4},  
    shadowColor: '#171717',  
    shadowOpacity: 0.2,  
    shadowRadius: 3
  },
});

export default CustomButton;
