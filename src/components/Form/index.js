import React, { Component } from "react";
import { Button, AsyncStorage } from "react-native";
import {
  TextInput,
  Container,
  Loading,
  BtnForget,
  BtnForgetText,
  BtnLogin,
  BtnLoginText
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import * as userActions from "../../actions/userActions";
class Form extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = () => {
    const { auth } = this.props;
    if (!this.state.username || !this.state.password) {
      return;
    }
    auth(this.state);
  };
  render() {
    const { user } = this.props;
    return (
      <Container behavior="padding">
        <TextInput
          mBottom
          value={this.state.username}
          placeholder="Digite seu email"
          textContentType="emailAddress"
          onChangeText={text => this.setState({ username: text })}
        />

        <TextInput
          value={this.state.password}
          placeholder="Digite sua senha"
          textContentType="password"
          secureTextEntry={true}
          clearTextOnFocus={true}
          onChangeText={text => this.setState({ password: text })}
        />

        <BtnLogin onPress={this.handleSubmit} title="Login">
          <BtnLoginText>Entrar</BtnLoginText>
        </BtnLogin>
      </Container>
    );
  }
  return;
}

const mapStateToProps = state => ({
  user: state.userReducer
});
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(userActions, dispatch);
export default connect(mapStateToProps)(Form);
