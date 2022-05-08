import React, { useState, usesContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Pressable,
  Alert,
  Switch,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "react-native-elements";

const DrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "dodgerblue",
            paddingLeft: 10,
            paddingVertical: 10,
          }}
        >
          <Avatar
            rounded
            avatarStyle={styles.avatar}
            size={75}
            source={require("../../assets/blankProfilePic.jpg")}
          />

          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
              E-BUS user
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 4,
    borderColor: "dodgerblue",
  },
});
