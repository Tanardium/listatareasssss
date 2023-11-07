import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (task.trim()) {
      const newTodo = {
        task: task,
        description: description,
      };
      addTodo(newTodo);
      setTask('');
      setDescription('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        onChangeText={setTask}
        value={task}
        placeholder="Add new task"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={setDescription}
        value={description}
        placeholder="Add task description"
      />
      <Button title="Add" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column', // Cambia a columna para permitir la descripción.
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10, // Agrega margen inferior para separar los campos.
  },
});

export default TodoForm;
