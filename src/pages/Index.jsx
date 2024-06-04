import { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  IconButton,
  Input,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";


const Index = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <Container maxW="container.md" p={4}>
      <Box bg="teal.500" w="100%" p={4} color="white" mb={4}>
        <Heading as="h1" size="lg">
          Todo App
        </Heading>
      </Box>
      <Box bg="gray.100" w="100%" p={4} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="md" mb={4}>
          Todo List
        </Heading>
        <Flex mb={4}>
          <Input
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            mr={2}
          />
          <Button onClick={addTodo} colorScheme="teal">
            Add
          </Button>
        </Flex>
        <List spacing={3}>
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              bg="white"
              p={2}
              borderRadius="md"
              boxShadow="sm"
            >
              <Checkbox
                isChecked={todo.completed}
                onChange={() => toggleTodo(index)}
                mr={2}
              >
                <Text as={todo.completed ? "s" : undefined}>{todo.text}</Text>
              </Checkbox>
              <Button
                onClick={() => deleteTodo(index)}
                colorScheme="red"
                size="sm"
              >
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Index;