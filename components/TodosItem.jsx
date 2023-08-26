import { StyleSheet, Text, View, Pressable } from "react-native";

const TodosItem = ({ itemData, deleteTodo }) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.goalItem}>
        <Pressable
          android_ripple={{ color: "#ddddddd" }}
          onPress={() => deleteTodo(itemData.item.id)}
          style={({ pressed }) => pressed && styles.pressedItem}
        >
          <Text style={styles.todoText}>{itemData.item.text}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TodosItem;

const styles = StyleSheet.create({
  goalContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flex: 1,
  },
  todoText: {
    color: "white",
    padding: 12,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
