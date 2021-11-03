import React from "react";

const Follow = (props) => {
  return (
    <props.View
      style={{
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: "gray",
        backgroundColor: props.darkModeValue ? "black" : "white",
      }}
    >
      {props.ExhibitUId !== props.exploredExhibitUId ? (
        <props.View>
          {!props.isfollowing ? (
            <props.View>
              {!props.isLoading ? (
                <props.HeaderButtons HeaderButtonComponent={props.HeaderButton}>
                  <props.Item
                    title="Follow"
                    iconName={"user-follow"}
                    color={props.darkModeValue ? "white" : "black"}
                    onPress={props.followFn}
                  />
                </props.HeaderButtons>
              ) : (
                <props.View style={{ margin: 20 }}>
                  <props.ActivityIndicator
                    size="small"
                    color={props.darkModeValue ? "white" : "black"}
                  />
                </props.View>
              )}
            </props.View>
          ) : (
            <props.View>
              {!props.isLoading ? (
                <props.HeaderButtons HeaderButtonComponent={props.HeaderButton}>
                  <props.Item
                    title="Follow"
                    iconName={"user-unfollow"}
                    color={"red"}
                    onPress={props.unfollowFn}
                  />
                </props.HeaderButtons>
              ) : (
                <props.View style={{ margin: 20 }}>
                  <props.ActivityIndicator
                    size="small"
                    color={props.darkModeValue ? "white" : "black"}
                  />
                </props.View>
              )}
            </props.View>
          )}
        </props.View>
      ) : null}
    </props.View>
  );
};

export default Follow;
