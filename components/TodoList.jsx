import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TodoList = ({ todos, toggleComplete }) => {
 return (
    <View style={styles.listContainer}>
      {todos.map((todo, index) => (
        <TouchableOpacity key={index} onPress={() => toggleComplete(index)}>
          <Text style={[styles.listItem, todo.completed && styles.completed]}>
            {todo.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
 );
};

const styles = StyleSheet.create({
 listContainer: {
    marginTop: 20,
 },
 listItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
 },
 completed: {
    textDecorationLine: 'line-through',
    color: '#999',
 },
});

export default TodoList;