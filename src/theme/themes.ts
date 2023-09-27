import { ThemeContextProps } from "./ThemeContext";

//TODO: FIRSTLY, ADD THE NAME OF YOUR THEME TO Themes enum, and then to Theme type with | "themeName"
export enum Themes {
  light = "light",
  dark = "dark",
}
export type ThemeType = "light" | "dark";

//TODO: ADD ALL OF THE COLORS YOU WANT TO HAVE IN YOUR THEME
export enum ThemeAttributes {
  primary = "primary",
  secondary = "secondary",
  darkGreyText = "darkGreyText",
  lightGreyBorder = "lightGreyBorder",
  lightGreyBackground = "lightGreyBackground",
  pressableGreen = "pressableGreen",
  moneyGreen = "moneyGreen",
  problemRed = "problemRed",
  borderLightGrey = "borderLightGrey",
}

const textColors = {
  darkGreyText: "#494642",
};

//TODO: ADD YOUR THEMES INSIDE THE themes object, TYPESCRIPT WILL WARN YOU IF YOU MESS UP
export const themes: ThemeContextProps = {
  light: {
    primary: "purple",
    secondary: "white",
    black: "#000000",
    lightGrey: "#E7E7E7",
    gray: "#cccccc",
    mediumGrey: "#3C3C43",
    darkGrey: "#3B3B43",
    buttonGray: "#F6F6F8",
    green: "#07B282",
    pressableGreen: "#009988",
    limeGreen: "#A0D017",
    lightGreen: "#48CA59",
    darkGreen: "#0F993E",
    yellowGreen: "#CDD10F",
    modalGreen: "#2DC281",
    lightBlue: "#09C7E1",
    darkBlue: "#2B3F6C",
    orangeGolden: "#F1A63F",
    red: "#F23F3F",
    rgba: {
      lightGray: "rgba(0,0,0,0.5)",
      gray: "rgba(154, 154, 175, 0.12)",
      mediumGray: "rgba(37, 37, 67, 0.04)",
      tertiaryGray: "rgba(60, 60, 67, 0.3)",
      shadow: "rgba(20, 20, 20, 0.1)",
      darkShadow: "rgba(177, 177, 186, 0.1)",
    },
    gradient: {
      lightGreen: "#7CE27E",
      darkGreen: "#07B282",
    },
    ...textColors,
  },
  dark: {
    primary: "purple",
    secondary: "white",
    black: "#000000",
    lightGrey: "#E7E7E7",
    gray: "#cccccc",
    mediumGrey: "#3C3C43",
    darkGrey: "#3B3B43",
    buttonGray: "#F6F6F8",
    green: "#07B282",
    pressableGreen: "#009988",
    limeGreen: "#A0D017",
    lightGreen: "#48CA59",
    darkGreen: "#0F993E",
    yellowGreen: "#CDD10F",
    modalGreen: "#2DC281",
    lightBlue: "#09C7E1",
    darkBlue: "#2B3F6C",
    orangeGolden: "#F1A63F",
    red: "#F23F3F",
    rgba: {
      lightGray: "rgba(0,0,0,0.5)",
      gray: "rgba(154, 154, 175, 0.12)",
      mediumGray: "rgba(37, 37, 67, 0.04)",
      tertiaryGray: "rgba(60, 60, 67, 0.3)",
      shadow: "rgba(20, 20, 20, 0.1)",
      darkShadow: "rgba(177, 177, 186, 0.1)",
    },
    gradient: {
      lightGreen: "#7CE27E",
      darkGreen: "#07B282",
    },
    ...textColors,
  },
};

export const nativeBaseTheme = {
  colors: {
    primary: {
      50: "#FFFFFF", // White
      100: "#141414", // Black
    },
    gray: {
      50: "#E4E7EF",
      100: "#90909D",
      150: "#F3F3F3", // Background
      200: "#B7B7B7",
      300: "#2B3F6C",
      400: "#B1B1BA",
      450: "#9E9EA1",
    },
  },
};
