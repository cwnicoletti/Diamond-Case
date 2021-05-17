import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import MainBottomTabContainer from "../footers_components/MainBottomTabContainer";

const ExploreBottomTab = (props) => {
  const darkModeValue = useSelector((state) => state.switches.darkMode);

  return (
    <View>
      <MainBottomTabContainer
        parentProps={props}
        darkModeValue={darkModeValue}
        screen={"Explore"}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: darkModeValue ? "black" : "white",
        }}
      />
    </View>
  );
};

export default ExploreBottomTab;
