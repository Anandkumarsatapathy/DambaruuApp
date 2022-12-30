import {
  View,
  Text,
  Image,
  Button,
  Modal,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useState ,useEffect} from "react";
import styles from "./PopStyle.js";
import {  SafeAreaView } from "react-native-safe-area-context";

// Pop function
const ModalPoup = ({ visible, children }) => {
  const [showModal, setShowModal] = useState(visible);
  console.log(visible);
  useEffect(() =>{
    toggleModal();
  },[visible]);
  const toggleModal =()=>{
    if(visible){
        setShowModal(true);
    }else{
        setShowModal(false);
    }
  }
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.viewModalBackground}>{children}</View>
    </Modal>
  );
};
const PopScreen = () => {
  const [visible, setVisible] = useState(false);
  const { height, width } = useWindowDimensions();
    // console.log(visible);
  return (
    <SafeAreaView style={[styles.container, { width: width, height: height }]}>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require("../../assets/bunny.png")}
            size={40}
            style={{
              marginLeft: 20,
              marginTop: 10,
              width: 250,
              height: 250,
             
            }}
          />
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Image
                  source={require("../../assets/x.png")}
                  style={{ height: 30, width: 30}}
                />
              </TouchableOpacity>
            </View>
            <Text style={{marginVertical: 30, fontSize: 25, textAlign: 'center'}}>
              Are you sure you want to delete this profile?
            </Text>
            <View style={styles.modalButton}>
              <Button title="Submit" />
            </View>
          </View>
        </View>
      </ModalPoup>
      {/* Header Part */}
      <View style={styles.image}>
        <Image
          source={require("../../assets/Logotext.png")}
          style={{ width: 250, height: 50 }}
        />
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.textContainer}>Edit Profile</Text>
        {/* Profile CardData */}
        {/* <View style={styles.flexcardContainer}>
          <Image
            source={require("../../assets/2.png")}
            style={{
              marginLeft: 10,
              marginTop: 10,
              width: 12,
              height: 12,
             
            }}
          
          />
          <FontAwesome
            name="user-circle"
            size={24}
            color="blue"
            style={{ position: "absolute", marginLeft: 100, marginTop: -20 }}
          />
        </View> */}
        {/* Button Save Button*/}
        <View style={styles.flexButton}>
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
          SAVE
        </Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setVisible(true)}>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight:"bold",
            marginTop: 5,
            marginBottom: 10,
          }}
         
        >
         Delete Profile
        </Text>
      </TouchableOpacity>
    </View>
        </View>
      </View>
    </ SafeAreaView>
  );
};

export default PopScreen;
