import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Container, Title, TextWrapper, Description, Button } from "./styles";
import Swipeout from "react-native-swipeout";
import EditIcon from "../EditIcon";
import DeleteIcon from "../DeleteIcon";
const Todo = props => {
  const swipeButtons = [
    {
      component: <EditIcon />,
      onPress: props.onEditTodo
    },
    {
      component: <DeleteIcon />,
      onPress: props.onDeleteTodo
    }
  ];
  const { onPress, todo } = props;
  return (
    <Swipeout right={swipeButtons} autoClose={true}>
      <Container>
        <Button onPress={() => onPress(todo)}>
          <MaterialIcons
            name={todo.done ? "check-box" : "check-box-outline-blank"}
            size={25}
            style={{ opacity: todo.done ? 0.6 : 1 }}
          />
        </Button>

        <TextWrapper>
          <Title done={todo.done}>{todo.title}</Title>
          <Description done={todo.done}>{todo.description}</Description>
        </TextWrapper>
      </Container>
    </Swipeout>
  );
};

export default Todo;
