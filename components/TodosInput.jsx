import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
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
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          onChangeText={(newText) => onchangeHandler(newText)}
          style={styles.textInput}
          placeholder="What's your goal?"
          value={todosInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={addTodo} title="Add Goals" color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => setIsModalVisible(false)}
              title="Cancel"
              color="#f31282"
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
    backgroundColor: "#120438",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    width: "95%",
    padding: 10,
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    width: 150,
    height: 150,
    margin: 20,
  },
});
