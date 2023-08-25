import { StyleSheet, TextInput, View, Button } from "react-native";
import React from "react";

const TodosInput = ({ onchangeHandler, addTodo, todosInput }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={(newText) => onchangeHandler(newText)}
        style={styles.textInput}
        placeholder="What's your goal?"
        value={todosInput}
      />
      <Button onPress={addTodo} title="Add Goal" />
    </View>
  );
};

export default TodosInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
});
