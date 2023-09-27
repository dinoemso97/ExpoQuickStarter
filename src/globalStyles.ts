import { StyleSheet, Platform, StatusBar } from "react-native";

export const textStyles = StyleSheet.create({
  h4: {
    fontFamily: "Poppins_500Medium",
    fontSize: 25,
    lineHeight: 30,
  },
  medium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 15,
    lineHeight: 22,
    fontWeight: "500",
  },
  mainText: {
    fontFamily: "Poppins_500Medium",
    fontSize: 16,
    lineHeight: 25,
    fontWeight: "600",
  },
  regular: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    fontWeight: "400",
  },
  regularBold: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 25,
  },
  regularMedium: {
    fontFamily: "Poppins_500Medium",
    fontSize: 17,
    fontWeight: "500",
  },
  regularSemiBoldMedium: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 17,
    fontWeight: "500",
  },
  bodyLarge: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export const bodyStyles = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#F3F3F3",
    paddingBottom: 0,
  },
  regularDiv: {
    justifyContent: "center",
    alignItems: "center",
  },
  drawerStyle: {
    width: "80%",
    opacity: 0.95,
  },
});
