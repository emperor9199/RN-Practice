import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="+" onPress={() => setCounter(counter + 1)} />
      <Text style={{ textAlign: "center", fontSize: 25 }}>{counter}</Text>
      <Button title="-" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

export default CounterScreen;
