import React, { useReducer } from "react";
import { Text, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + action.payload };
    case "decrement":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="+"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Text style={{ textAlign: "center", fontSize: 25 }}>{state.counter}</Text>
      <Button
        title="-"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
    </View>
  );
};

export default CounterScreen;
