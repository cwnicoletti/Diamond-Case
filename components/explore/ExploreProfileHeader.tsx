import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../hooks";
import LinksList from "../UI/LinksList";
import ProfileStats from "../UI/ProfileStats";
import ExploreUserTitle from "./ExploreUserTitle";

const ExploreProfileHeader = (props) => {
  const darkModeValue = useAppSelector((state) => state.user.darkMode);
  const links = Object.values(props.links);

  return (
    <View>
      <View
        style={{
          ...styles.container,
          ...props.containerStyle,
        }}
      >
        <ExploreUserTitle {...props} />
        <ProfileStats
          darkModeValue={darkModeValue}
          followersValue={props.followersValue}
          followingValue={props.followingValue}
          advocatesValue={props.advocatesValue}
          followersOnPress={props.followersOnPress}
          followingOnPress={props.followingOnPress}
          advocatesOnPress={props.advocatesOnPress}
          numberOfFollowers={props.numberOfFollowers}
          numberOfFollowing={props.numberOfFollowing}
          numberOfExhibits={props.numberOfExhibits}
        />
        {props.description ? (
          <Text style={props.descriptionStyle}>{props.description}</Text>
        ) : null}
        <LinksList links={links} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});

export default ExploreProfileHeader;
