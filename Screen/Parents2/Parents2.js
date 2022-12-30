import {
  View,
  Text,
  Image,
  TextInput,
  Modal,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import styles from "./ParentsStyle";
import FooterScreen from "../../Components/Footer/FooterScreen";
import KeypadScreen from "../../Components/Keypad/KeypadScreen";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
// Pop function
const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  console.log(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <SafeAreaView style={styles.viewModalBackground}>{children}</SafeAreaView>
    </Modal>
  );
};
const Parents2 = ({ navigation }) => {
  const [text1, setText1] = useState(0);
  const [text2, setText2] = useState(0);
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState();
  const [number, onChangeNumber] = useState(null);
  const [visible, setVisible] = useState(false);

  /**1.logic**/
  const randomFun = () => {
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);
    console.log("first1222-- time");
    setText1(a);
    setText2(b);
    setSum(a*b);
  };
  useEffect(() => {
    randomFun();
  }, []);
  // 2.Checking the sum Value
  const showModal = () => {
    parseInt(number) === sum ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    showModal();
  }, [number]);

  const handleClick = () => {
    show ? navigation.navigate("parent") : setVisible(true);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Logotext.png")}
        style={{ width: 250, height: 50, alignSelf: "center", marginTop: 50 }}
      />

      <ModalPoup visible={visible}>
        <View style={styles.modalContainer}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: "bold",
                    color: "#194792",
                    textAlign: "center",
                  }}
                >
                  ohh,Sorry!!
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setVisible(false)}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      fontWeight: "bold",
                      marginTop: 5,
                      marginBottom: 10,
                    }}
                  >
                    Try Again
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={require("../../assets/images/taraTryAgain.png")}
                style={{
                  marginLeft: 35,
                }}
              />
            </View>
          </View>
        </View>
      </ModalPoup>
      <View style={styles.flexContainer}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            marginTop: 20,
            color: "#194792",
            fontWeight: "bold",
          }}
        >
          Parents Only
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            marginTop: 5,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Answer first to proceed
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: 60,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              marginTop: 10,
              color: "black",
              fontWeight: "bold",
              marginLeft: 20,
            }}
          >
            {text1} * {text2} =
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            keyboardType="numeric"
          />
        </View>
        <View style={{ alignSelf: "center", alignItems: "center" }}>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 18,
                marginTop: 5,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Change Question ?
            </Text>
            <TouchableOpacity onPress={randomFun}>
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  marginTop: 5,
                  color: "#194792",
                  fontWeight: "bold",
                }}
              >
                Refresh
              </Text>
            </TouchableOpacity>
          </View>
          {/* Button */}
          <View>
            <TouchableOpacity style={styles.buttonSubmit} onPress={handleClick}>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "bold",
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Footerview}>
          <FooterScreen />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Parents2;
