import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button title="Counter" onPress={() => navigation.navigate("Counter")} />
      <Button
        title="GenerateColor"
        onPress={() => navigation.navigate("GenerateColor")}
      />
      <Button
        title="ColorChange"
        onPress={() => navigation.navigate("ColorChange")}
      />
      <Button title="Text" onPress={() => navigation.navigate("Text")} />
    </View>
  );
};

export default HomeScreen;
