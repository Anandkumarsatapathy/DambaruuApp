import { StyleSheet, Text, View,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
const CardScreen = ({textData,points}) => {
  return (
    <View style={{alignItems:'center'}}>
      <TouchableOpacity >
      
      <View style={styles.flexContainer}>
        <Text style={{marginTop:15,fontSize:20,fontWeight:"bold",color:'white'}}>Your Points</Text>
        <MaterialIcons name="stars" size={70} color="yellow" />
        <Text style={{marginTop:10,fontSize:25,fontWeight:'bold',color:'white'}}>24 Points</Text>
      </View>
  
     </ TouchableOpacity>
    </View>
  )
}

export default CardScreen

const styles = StyleSheet.create({
  
  flexContainer: {
    marginTop: 20,
    width: 140,
    height: 160,
    margin:10,
    borderRadius: 10,
    cursor: "pointer",
    alignItems: "center",
    backgroundColor: "#f56827",
  },
})