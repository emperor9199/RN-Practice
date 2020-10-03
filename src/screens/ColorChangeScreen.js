import React, { useState } from "react";
import { View, Text } from "react-native";
import ColorAdjust from "../components/ColorAdjust";

const ColorChangeScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const CHANGE_AMOUNT = 15;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <Text>Color Change</Text>
      <ColorAdjust
        color="Red"
        onIncrease={() => setColor("red", CHANGE_AMOUNT)}
        onDecrease={() => setColor("red", -1 * CHANGE_AMOUNT)}
      />
      <ColorAdjust
        color="Green"
        onIncrease={() => setColor("green", CHANGE_AMOUNT)}
        onDecrease={() => setColor("green", -1 * CHANGE_AMOUNT)}
      />
      <ColorAdjust
        color="Blue"
        onIncrease={() => setColor("blue", CHANGE_AMOUNT)}
        onDecrease={() => setColor("blue", -1 * CHANGE_AMOUNT)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

export default ColorChangeScreen;
