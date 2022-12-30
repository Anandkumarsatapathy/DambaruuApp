import { TextInput, Text, View, Image, Button } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import styles from "./childInfoStyle.js";
const ChildInfo = () => {
  const [selectedValue, setSelectedValue] = useState("Mother Tongue");
  const [disability, setDisability] = useState("Learning Disability");
  return (
    <View style={styles.container}>
      {/* Image Container */}
      <View style={styles.image}>
        <Image
          source={require("./Logotext.png")}
          style={{ width: 250, height: 50 }}
        />
      </View>
      {/* Selector */}
      <View style={styles.flexContainer}>
        <Text style={styles.textContainer}>⭐ Your Child Info ⭐</Text>
        {/* Input box */}
        <Text
          style={{
            marginLeft: 20,
            marginBottom: 0,
            marginTop: 20,
            fontSize: 15,
            color: "#325ecf",
          }}
        >
          Child Name
        </Text>
        <TextInput style={styles.input} />
        <Text
          style={{
            marginLeft: 20,
            marginBottom: 0,
            fontSize: 15,
            color: "#325ecf",
          }}
        >
          Parent Name
        </Text>
        <TextInput style={styles.input} />

        <View style={styles.Pickercontainer}>
          <Picker
            selectedValue={selectedValue}
            style={{
              height: 50,
              width: 360,
              backgroundColor: "#e1f2f2",
              border: "none",
              borderRadius: 5,
              color: "blue",
            }}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="Mother Tongue" value="java" />
            <Picker.Item label="Oriya" value="js" />
          </Picker>

          <Picker
            selectedValue={disability}
            style={{
              height: 50,
              width: 360,
              backgroundColor: "#e1f2f2",
              border: "none",
              borderRadius: 5,
              color: "blue",
            }}
            onValueChange={(itemValue, itemIndex) => setDisability(itemValue)}
          >
            <Picker.Item label="Learning Disability" value="java" />
            <Picker.Item label="No" value="js" />
          </Picker>
        </View>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 10,
            fontSize: 15,
            color: "#325ecf",
          }}
        >
          Any speific Health issue
        </Text>
        <TextInput
          style={{
            width: 360,
            height: 150,
            margin: 12,
            borderRadius: 10,
            padding: 10,
            backgroundColor: "#e1f2f2",
          }}
        />
        <View style={styles.flexButton}>
          <Button title="Submit" style={{ borderRadius: 30 }} />
        </View>
      </View>
    </View>
  );
};

export default ChildInfo;
