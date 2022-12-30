import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
const KeypadScreen = (props) => {
  const [key, setKey] = useState("");
  console.log("🚀 ~ file: KeypadScreen.js ~ line 7 ~ KeypadScreen ~ key", key);
  parseInt(key);
  console.log("🚀 ~ file: KeypadScreen.js ~ line 9 ~ KeypadScreen ~  parseInt(key);",  parseInt(key));

  //Keypad Logical Screen
  // const keyData =()=>{
  //   props.onClick(key);
  // }
  // useEffect(() => {
  //   keyData();
  // }, [key])
  
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: 10,
          marginLeft: 70,
          marginRight: 70,
        }}
      >
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(1))}
          >
            1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(2))}
          >
            2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(3))}
          >
            3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(4))}
          >
            4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(5))}
          >
            5
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(6))}
          >
            6
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(7))}
          >
            7
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(8))}
          >
            8
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(9))}
          >
            9
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.input} keyboardType="numeric">
            <AntDesign name="up" size={34} color="black" />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.concat(0))}
          >
            0
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.input}
            keyboardType="numeric"
            onPress={() => setKey(key.slice(0, -1))}
          >
            <AntDesign name="close" size={34} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KeypadScreen;

const styles = StyleSheet.create({
  input: {
    width: 70,
    height: 70,
    margin: 2,
    textAlign: "center",
    fontSize: 10,
    borderRadius: 500,
    color: "#041480",
    fontWeight: "bold",
    fontSize: 30,
    borderColor: "blue",
    borderWidth: 2.5,
    padding: 10,
    backgroundColor: "#e8c309",
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#171717",
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
