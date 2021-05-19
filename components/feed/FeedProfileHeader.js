import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";

import UserTitleShowcaseLocal from "../user/UserTitleShowcaseLocal";
import LinkButton from "../UI/LinkButton";

const handleLinkOnPress = (url) => {
  WebBrowser.openBrowserAsync(url);
};

const FeedProfileHeader = (props) => {
  const darkModeValue = useSelector((state) => state.user.darkMode);
  const links = props.links;
  const followingValue = props.hideFollowing;
  const followersValue = props.hideFollowers;
  const advocatesValue = props.hideAdvocates;
  const showResumeValue = props.showResume;

  const userDataProfileHeader = {
    resumeLink: props.resumeLink,
    numberOfFollowers: props.numberOfFollowers,
    numberOfFollowing: props.numberOfFollowing,
    numberOfAdvocates: props.numberOfAdvocates,
  };

  const linktoresume = userDataProfileHeader.resumeLink;

  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === "android") {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View>
      <View
        style={{
          ...styles.container,
          ...props.containerStyle,
        }}
      >
        <UserTitleShowcaseLocal {...props} />
        <View
          style={{
            margin: 10,
            flexDirection: "row",
          }}
        >
          {!followersValue ? (
            <TouchableCmp
              style={{
                flex: 1,
                borderColor: darkModeValue ? "gray" : "#c9c9c9",
                alignItems: "center",
              }}
              onPress={props.followersOnPress}
            >
              <Text
                style={{
                  margin: 5,
                  color: darkModeValue ? "white" : "black",
                  fontWeight: "bold",
                }}
              >
                Followers
              </Text>
              <Text
                style={{
                  marginBottom: 5,
                  color: darkModeValue ? "white" : "black",
                }}
              >
                {userDataProfileHeader.numberOfFollowers}
              </Text>
            </TouchableCmp>
          ) : null}
          {!followingValue ? (
            <TouchableCmp
              style={{
                flex: 1,
                borderColor: darkModeValue ? "gray" : "#c9c9c9",
                alignItems: "center",
              }}
              onPress={props.followingOnPress}
            >
              <Text
                style={{
                  margin: 5,
                  color: darkModeValue ? "white" : "black",
                  fontWeight: "bold",
                }}
              >
                Following
              </Text>
              <Text
                style={{
                  marginBottom: 5,
                  color: darkModeValue ? "white" : "black",
                  fontSize: 15,
                }}
              >
                {userDataProfileHeader.numberOfFollowing}
              </Text>
            </TouchableCmp>
          ) : null}
          {!advocatesValue ? (
            <TouchableCmp
              style={{
                flex: 1,
                borderColor: darkModeValue ? "gray" : "#c9c9c9",
                alignItems: "center",
              }}
              onPress={props.advocatesOnPress}
            >
              <Text
                style={{
                  margin: 5,
                  color: darkModeValue ? "white" : "black",
                  fontWeight: "bold",
                }}
              >
                Advocates
              </Text>
              <Text
                style={{
                  marginBottom: 5,
                  color: darkModeValue ? "white" : "black",
                  fontSize: 15,
                }}
              >
                {userDataProfileHeader.numberOfAdvocates}
              </Text>
            </TouchableCmp>
          ) : null}
        </View>
        {showResumeValue ? (
          <TouchableCmp
            style={{
              ...styles.resumeLink,
              ...props.resumeLink,
              borderColor: darkModeValue ? "gray" : "#c9c9c9",
            }}
            onPress={() => handleLinkOnPress(linktoresume)}
          >
            <Ionicons
              name="ios-paper"
              size={24}
              color={props.iconResumeStyle}
            />
            <Text style={{ ...styles.resumeText, ...props.resumeText }}>
              Resume
            </Text>
          </TouchableCmp>
        ) : null}
        {props.description ? (
          <Text style={props.descriptionStyle}>{props.description}</Text>
        ) : null}
        <FlatList
          data={Object.values(links)}
          keyExtractor={(item) => item.linkId}
          numColumns={Object.keys(links).length > 1 ? 2 : 1}
          renderItem={(itemData) => (
            <LinkButton
              imageUrl={itemData.item[`linkImageUrl${itemData.item.linkId}`]}
              title={itemData.item[`linkTitle${itemData.item.linkId}`]}
              textStyle={{ color: darkModeValue ? "white" : "black" }}
              linkContainer={{
                borderColor: "gray",
                width: Object.keys(links).length > 1 ? "46%" : "96%",
              }}
              imageStyle={{
                backgroundColor: "white",
                borderRadius: 5,
              }}
              onPress={() =>
                handleLinkOnPress(
                  itemData.item[`linkUrl${itemData.item.linkId}`]
                )
              }
            />
          )}
        />
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
  secondContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  thirdContainer: {
    marginRight: 10,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
  },
  showCaseLocalImage: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  resumeLink: {
    flexDirection: "row",
    borderWidth: 1,
    width: "96%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  resumeText: {
    margin: 10,
  },
});

export default FeedProfileHeader;
