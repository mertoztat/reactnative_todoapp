import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import React from "react";

const TodosInput = ({
  onchangeHandler,
  addTodo,
  todosInput,
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <Modal visible={isModalVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(newText) => onchangeHandler(newText)}
          style={styles.textInput}
          placeholder="What's your goal?"
          value={todosInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addTodo} title="Add Goal" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => setIsModalVisible(false)}
              title="Cancel"
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TodosInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
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
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
