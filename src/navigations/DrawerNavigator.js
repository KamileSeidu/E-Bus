import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import { HomeStack } from "./StackNavigator";
import { colors } from "../global/styles";
import {
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { HomeStack } from "./StackNavigator";
import DrawerContent from "../components/DrawerContent";
import ChangePassword from "../screens/ChangePassword";
import About from "../screens/About";
import ContactUs from "../screens/ContactUs";
import Login from "../screens/LogIn";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: ({ focussed, size }) => (
            <AntDesign
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          title: "Change Password",
          drawerIcon: ({ focussed, size }) => (
            <MaterialCommunityIcons
              name="form-textbox-password"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          title: "About Us",
          drawerIcon: ({ focussed, size }) => (
            <MaterialCommunityIcons
              name="frequently-asked-questions"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="ContactUs"
        component={ContactUs}
        options={{
          title: "Contact US",
          drawerIcon: ({ focussed, size }) => (
            <MaterialIcons
              name="contact-mail"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          drawerIcon: ({ focussed, size }) => (
            <MaterialIcons
              name="login"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),

          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
