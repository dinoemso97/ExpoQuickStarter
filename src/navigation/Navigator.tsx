import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { Home } from "../screens";

const defaultStackOptions = {
  headerShown: false,
};

const RootStack = createNativeStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        ...defaultStackOptions,
      }}
    >
      <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
  );
};

export default function Navigator() {
  return <RootStackScreen />;
}

//EXAMPLE 1 - AUTH STACK ⬇️⬇️⬇️
// const AuthStack = createNativeStackNavigator()
// const AuthStackScreen = () => {
//     const getInitialRoute = () => {
//         return 'LoginScreen'
//     }
//     return (
//         <AuthStack.Navigator
//             initialRouteName={getInitialRoute()}
//             screenOptions={{ ...defaultStackOptions }}>
//             <AuthStack.Screen name="LoginScreen" component={Login} />
//         </AuthStack.Navigator>
//     )
// }

//EXAMPLE 2 - DRAWER NAVIGATOR STACK ⬇️⬇️⬇️
// const DrawerNavigator = createDrawerNavigator()
// const DrawerNavigatorScreen = () => {
//     return (
//         <DrawerNavigator.Navigator
//             // eslint-disable-next-line react/no-unstable-nested-components
//             drawerContent={props => <DrawerScreen {...props} />}
//             screenOptions={{
//                 drawerType: 'front',
//                 drawerStyle: bodyStyles.drawerStyle,
//                 headerShown: false
//             }}>
//             <DrawerNavigator.Screen
//                 name="HomeStack"
//                 component={HomeStackScreen}
//             />
//             <DrawerNavigator.Screen name="ProfileScreen" component={Profile} />
//         </DrawerNavigator.Navigator>
//     )
// }
