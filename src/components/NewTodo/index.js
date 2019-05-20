import React from "react";

import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  Container,
  TitleInput,
  DescriptionInput,
  TextWrapper,
  NewTodoContainer,
  Title
} from "./styles";

const NewTodo = props => (
  <Container>
    <Title>{props.editTodo ? "Editar Tarefa" : "Nova Tarefa"}</Title>
    <NewTodoContainer>
      <TouchableOpacity onPress={() => props.closeNewTodoForm()}>
        <MaterialIcons
          name="close"
          underlayColor="transparent"
          color="#333"
          size={35}
        />
      </TouchableOpacity>
      <TextWrapper>
        <TitleInput
          onChangeText={text => props.onTitleTextChange(text)}
          value={props.editTodo ? props.editTodo.title : props.newTodo.title}
          autoFocus={true}
          placeholder="Titulo"
          placeholderTextColor="#999999"
        />
        <DescriptionInput
          onChangeText={text => props.onDescriptionTextChange(text)}
          value={
            props.editTodo
              ? props.editTodo.description
              : props.newTodo.description
          }
          multiline={true}
          placeholder="Descrição"
          placeholderTextColor="#999999"
        />
      </TextWrapper>
    </NewTodoContainer>
  </Container>
);

export default NewTodo;
