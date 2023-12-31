import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import i18n from "i18n-js";
import { NativeBaseProvider, extendTheme } from "native-base";
import React, { useState } from "react";

import { en } from "./assets/languages";
import { useLanguageStore } from "./src/zustand/useLanguageStore";
import Navigator from "./src/navigation/Navigator";
import ThemeProvider from "./src/theme/ThemeContext";
import { nativeBaseTheme } from "./src/theme/themes";
//import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const { language } = useLanguageStore();
  const [initialTheme] = useState<string | null>("light");
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });
  const config = {
    dependencies: {
      "linear-gradient": LinearGradient,
    },
  };

  const theme = extendTheme({ colors: nativeBaseTheme });
  i18n.translations = {
    en,
  };

  i18n.locale = language;

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <NavigationContainer>
      <NativeBaseProvider config={config} theme={theme}>
        <ThemeProvider initialTheme={initialTheme || undefined}>
          <Navigator />
        </ThemeProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
