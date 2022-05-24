import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export default function SignUp() {
  // const navigation = params.navigation;
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../../assets/background.jpg")}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            marginBottom: 30,
            width: 200,
            height: 120,
          }}
          source={require("../../assets/Bus.png")}
        />
        <Text Text style={{ fontSize: 40, color: "grey" }}>
          E-BUS
        </Text>
        <View style={styles.inputContainer}>
          <AntDesign
            name="user"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
          <TextInput placeholder="User Name" style={{ paddingLeft: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="mail"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
          <TextInput placeholder="Email" style={{ paddingLeft: 10 }} />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign
            name="phone"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
          <TextInput
            placeholder="Phone Number"
            style={{ paddingLeft: 10 }}
            keyboardType="numeric"
            maxLength={10}
          />
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="security"
            size={24}
            color="black"
            style={{ paddingLeft: 10 }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{ paddingLeft: 10 }}
          />
        </View>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("Home");
          // }}
          style={{
            padding: 15,
            paddingHorizontal: 120,
            marginTop: 10,
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: "blue",
          }}
        >
          <Text style={{ paddingLeft: 10, color: "white" }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
