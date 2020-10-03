import React, { useState } from "react";
import { View, Button, FlatList } from "react-native";

const GenerateColorScreen = () => {
  const [colors, setColors] = useState([]);

  const generateColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, generateColor()])}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 50, width: 50, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

export default GenerateColorScreen;
