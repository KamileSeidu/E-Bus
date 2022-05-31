import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import PickerModel from "../components/PickerModel";
import Calender from '../components/Calender'

export default function HomeScreen(params) {
  const navigation = params.navigation;
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View>
        <View style={styles.menu}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
          >
            <Entypo name="menu" size={30} color="black" />
          </TouchableOpacity>
          <Text style={styles.text2}>E-BUS</Text>
        </View>
        <View style={styles.from}>
          <Text style={styles.text1}>From</Text>
          <PickerModel />
        </View>
        <View style={styles.from1}>
          <Text style={styles.text1}>To</Text>
          <PickerModel />
        </View>
        <View>
          <Calender />
        </View>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
      // onPress={onPress}
          >
          <Text style={styles.text}>BOOK</Text>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    position: "absolute",
    marginTop: 30,
    marginLeft: 10,
  },
  text2: {
    fontSize: 20,
    paddingLeft: 30,
  },
  text1: {
    fontSize: 20,
    paddingLeft: 20,
  },
  from: {
    marginLeft: 10,
    marginTop: 90,
  },
  from1: {
    marginLeft: 10,
    // marginTop: 5,
  },
  textContainer: {
    color: "orange",
    fontWeight: "400",
  },

  inputContainer: {
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 13,
    marginRight: 13,
    marginTop: 10,
  },
  book: {
    fontSize: 25,
    // paddingLeft: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },

  button: {
    backgroundColor: 'dodgerblue',
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: 200,
    marginVertical: 10,
    marginLeft: 75,
  
  },
  text: {
    color: 'white',
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  // bookContainer: {
  //     // height: 200,
  //     width: '100%'
  // }
});
