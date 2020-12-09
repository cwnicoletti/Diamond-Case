import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FilterSwitch from "../UI/FilterSwitch";

import { setDarkMode } from "../../store/actions/switches";
import { setShowcaseLocalMode } from "../../store/actions/switches";

const LeftDrawer = (props) => {
  const dispatch = useDispatch();

  const darkModeValue = useSelector((state) => state.switches.darkMode);
  const showcaseLocalValue = useSelector(
    (state) => state.switches.showcaseLocalMode
  );

  return (
    <View
      forceInset={{ top: "always", horizontal: "never" }}
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: darkModeValue ? "black" : "white",
        borderRightWidth: 0.3,
        borderRightColor: darkModeValue ? "white" : "black",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: darkModeValue ? "white" : "black",
        }}
      >
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{ height: 50, width: 50, borderRadius: 50 / 2 }}
              source={require("../../assets/me.png")}
            />
            <Text
              style={{
                color: darkModeValue ? "white" : "black",
                fontSize: 16,
                margin: 10,
              }}
            >
              Christian Nicoletti
            </Text>
          </View>
        </SafeAreaView>
      </View>
      <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
          }}
        >
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={20}
            color="#007AFF"
          />
          <Button title="QR Code" onPress={props.notificationsOnPress} />
        </View>
      </SafeAreaView>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <FilterSwitch
            viewStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
            }}
            labelStyle={{
              color: darkModeValue ? "white" : "black",
            }}
            label="Showcase locally"
            state={showcaseLocalValue}
            onChange={(newValue) => {
              dispatch(setShowcaseLocalMode(newValue));
            }}
          />
        </SafeAreaView>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <FilterSwitch
            viewStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
            }}
            labelStyle={{
              color: darkModeValue ? "white" : "black",
            }}
            label="Dark Mode"
            state={darkModeValue}
            onChange={(newValue) => {
              dispatch(setDarkMode(newValue));
            }}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LeftDrawer;
