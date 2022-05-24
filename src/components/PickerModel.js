import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from "react-native";
// import React from "react";
import React, { useState } from "react";
import Picker from "./Picker";

export default function PickerModel() {
  const [chooseData, setchooseData] = useState("Select location...");
  const [isModalVisible, setisModalVisible] = useState(false);

  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (option) => {
    setchooseData(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => changeModalVisibility(true)}
        style={styles.touchableOpacity}
      >
        <Text style={styles.text}>{chooseData}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        nRequestClose={() => changeModalVisibility(false)}
      >
        <Picker
          changeModalVisibility={changeModalVisibility}
          setData={setData}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
  },
  touchableOpacity: {
    backgroundColor: "orange",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    borderRadius: 50,
  },
});
