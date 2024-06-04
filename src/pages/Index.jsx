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
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="2xl">
          Todo App
        </Heading>
        <Flex width="100%" maxW="md">
          <Input
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            mr={2}
          />
          <Button onClick={handleAddTodo} colorScheme="teal">
            Add
          </Button>
        </Flex>
        <Box width="100%" maxW="md">
          <List spacing={3}>
            {todos.map((todo, index) => (
              <ListItem
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                bg="gray.100"
                p={2}
                borderRadius="md"
              >
                <Checkbox
                  isChecked={todo.completed}
                  onChange={() => handleToggleComplete(index)}
                  mr={2}
                >
                  <Text as={todo.completed ? "del" : ""}>{todo.text}</Text>
                </Checkbox>
                <IconButton
                  aria-label="Delete todo"
                  icon={<FaTrash />}
                  size="sm"
                  colorScheme="red"
                  onClick={() => handleDeleteTodo(index)}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;