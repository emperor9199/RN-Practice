import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const TextScreen = () => {
  const [pass, setPass] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={pass}
        onChangeText={(newText) => setPass(newText)}
      />
      {pass.length < 5 ? (
        <Text>Password must be greater then 5 characters</Text>
      ) : (
        <Text>Your Password is {pass}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
