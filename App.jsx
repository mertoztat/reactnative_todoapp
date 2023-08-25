import { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import TodosInput from "./components/TodosInput";
import TodosItem from "./components/TodosItem";

export default function App() {
  const [todosInput, setTodosInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onchangeHandler = (text) => {
    setTodosInput(text);
  };

  const addTodo = () => {
    if (todosInput.length === 0) {
      Alert.alert("Warning!", "Please write in some goal", [
        {
          text: "Cancel",
          style: "cancel",
        },
      ]);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: todosInput },
      ]);
      setTodosInput("");
    }
  };

  const deleteTodo = (id) => {
    Alert.alert("Görevi Sil", "Bu görevi silmek istediğinize emin misiniz?", [
      {
        text: "İptal",
        style: "cancel",
      },
      {
        text: "Sil",
        style: "destructive",
        onPress: () => {
          const updatedTodos = todos.filter((todo) => todo.id !== id);
          setTodos(updatedTodos);
        },
      },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <TodosInput
        todosInput={todosInput}
        onchangeHandler={onchangeHandler}
        addTodo={addTodo}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return <TodosItem itemData={itemData} deleteTodo={deleteTodo} />;
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
