import React, { Component } from "react";
import { Keyboard } from "react-native";
import Todo from "../../components/Todo";
import { MaterialIcons } from "@expo/vector-icons";
import NewTodo from "../../components/NewTodo";
import { Container, FlatList, FloatBtn } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../actions/todoActions";
import { AsyncStorage } from "react-native";
class Home extends Component {
  constructor(props) {
    super(props);
    this._keyboardDidShow = this._keyboardDidShow.bind(this);
    this._keyboardDidHide = this._keyboardDidHide.bind(this);
  }
  static navigationOptions = {
    title: "Lista de Tarefas",
    headerStyle: {
      backgroundColor: "#333"
    },
    headerTintColor: "#FFF"
  };

  async componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }
  state = {
    keyboardHeight: 60,
    floatIcon: "add",
    floatAction: () => this.handleShowTodoForm(),
    floatIconSize: 53,
    showNewTodoForm: false,
    editTodo: null,
    newTodo: { title: "", description: "" },
    todos: this.props.todo.todos
  };
  async _keyboardDidHide(e) {
    this.setState({
      keyboardHeight: 60,
      floatIcon: "add",
      floatIconSize: 53,
      showNewTodoForm: false
    });
    JSON.parse(await AsyncStorage.getItem("persist:root"));
  }
  async _keyboardDidShow(e) {
    this.setState({
      keyboardHeight: e.endCoordinates.height + 35,
      floatIcon: "send",
      floatIconSize: 37
    });
    console.log(e.endCoordinates.height);
  }
  _keyExtractor = (item, index) => item.id;

  handleDone = todo => {
    const { makeDone, orderingTodos } = this.props;
    makeDone(todo);
    orderingTodos();
  };
  handleSaveTodo = () => {
    console.log(this.state);
    const { newTodo, editTodo } = this.state;
    const {
      saveTodo,
      closeNewTodoForm,
      orderingTodos,
      createTodo
    } = this.props;
    if (editTodo) {
      if (!editTodo.title || !editTodo.description) return;
      saveTodo(editTodo);
      closeNewTodoForm();
      this.setState({
        todo: this.props.todo.todos
      });
      orderingTodos();

      this.setState(
        { floatAction: () => this.handleShowTodoForm(), editTodo: null },
        console.log(this.state)
      );
    } else {
      if (!newTodo.title || !newTodo.description) return;
      saveTodo(newTodo);
      console.log(this.props.todo);
      closeNewTodoForm();
      orderingTodos();
      this.setState(
        {
          floatAction: () => this.handleShowTodoForm(),
          newTodo: { title: "", description: "" }
        },
        console.log(this.state)
      );
    }
  };
  handleShowTodoForm = () => {
    const { showFormNewTodo } = this.props;
    showFormNewTodo();
    this.setState(
      { floatAction: () => this.handleSaveTodo() },
      console.log(this.state)
    );
  };
  handleHideTodoForm = () => {
    const { closeNewTodoForm } = this.props;
    closeNewTodoForm();
    this.setState(
      {
        floatAction: () => this.handleShowTodoForm(),
        newTodo: { title: "", description: "" },
        editTodo: null
      },
      console.log(this.state)
    );
  };

  handleDelete = todo => {
    const { deleteTodo } = this.props;
    deleteTodo(todo);
  };
  handleEdit = todo => {
    const { showEditTodoForm } = this.props;
    showEditTodoForm(todo);
    this.setState({
      showNewTodoForm: true,
      editTodo: todo,
      floatAction: () => this.handleSaveTodo()
    });
  };
  handleTitleChange = text => {
    if (this.state.editTodo) {
      this.setState({
        editTodo: { ...this.state.editTodo, title: text }
      });
    } else {
      this.setState({
        newTodo: { ...this.state.newTodo, title: text }
      });
    }
  };
  handleDescriptionChange = text => {
    if (this.state.editTodo) {
      this.setState({
        editTodo: { ...this.state.editTodo, description: text }
      });
    } else {
      this.setState({
        newTodo: { ...this.state.newTodo, description: text }
      });
    }
  };
  render() {
    const { todo } = this.props;
    return (
      <Container>
        <FloatBtn
          onPress={this.state.floatAction}
          style={{ bottom: this.state.keyboardHeight }}
        >
          <MaterialIcons
            name={this.state.floatIcon}
            underlayColor="transparent"
            color="#ffffff"
            size={this.state.floatIconSize}
          />
        </FloatBtn>

        {todo.showNewTodoForm && (
          <NewTodo
            onTitleTextChange={this.handleTitleChange}
            onDescriptionTextChange={this.handleDescriptionChange}
            editTodo={this.state.editTodo}
            newTodo={this.state.newTodo}
            closeNewTodoForm={this.handleHideTodoForm}
          />
        )}
        <FlatList
          data={todo.todos}
          renderItem={({ item }) => (
            <Todo
              todo={item}
              onPress={this.handleDone}
              onDeleteTodo={() => this.handleDelete(item)}
              onEditTodo={() => this.handleEdit(item)}
            />
          )}
          keyExtractor={this._keyExtractor}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
