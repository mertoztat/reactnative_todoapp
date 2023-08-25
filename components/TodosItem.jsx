import { StyleSheet, Text, View, Pressable } from "react-native";

const TodosItem = ({ itemData, deleteTodo }) => {
  return (
    <Pressable onPress={() => deleteTodo(itemData.item.id)}>
      <View style={styles.goalContainer}>
        <View style={styles.goalItem}>
          <Text style={styles.todoText}>{itemData.item.text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TodosItem;

const styles = StyleSheet.create({
  goalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flex: 1,
  },
  todoText: {
    color: "white",
  },
});
