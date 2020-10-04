import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import CounterScreen from "./src/screens/CounterScreen";
import GenerateColorScreen from "./src/screens/GenerateColorScreen";
import ColorChangeScreen from "./src/screens/ColorChangeScreen";
import TextScreen from "./src/screens/TextScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="GenerateColor" component={GenerateColorScreen} />
        <Stack.Screen name="ColorChange" component={ColorChangeScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
