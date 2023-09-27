import { t } from "i18n-js";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Animated, PanResponder, Easing } from "react-native";
import { textStyles } from "../../globalStyles";
import { Center, Text } from "native-base";
import { Navigation } from "../../types";

interface HomeScreenProps {
  navigation: Navigation;
}
/**
 * @description Home Screen
 * @author ?
 */

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const [animation] = useState(new Animated.Value(500));

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      animation.setValue(gestureState.dy);
    },
    onPanResponderRelease: () => {
      Animated.spring(animation, {
        toValue: 0,
        friction: 5,
        useNativeDriver: false,
      }).start();
    },
  });

  const translateY = animation.interpolate({
    inputRange: [-300, 0],
    outputRange: [-300, 0],
  });

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }, [animation]);

  return (
    <Center style={localStyles.container}>
      <Animated.View
        style={[localStyles.box, { transform: [{ translateY }] }]}
        {...panResponder.panHandlers}
      >
        <Text
          color={"colors.primary.50"}
          style={textStyles.regularSemiBoldMedium}
        >
          {t("welcome")}!
        </Text>
      </Animated.View>
    </Center>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F3F3",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

export default HomeScreen;
