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
import * as userActions from "../../actions/userActions";
class Form extends Component {
  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    console.log("FORM", this.props);
  }
  handleSubmit = () => {
    const { authUser } = this.props;
    if (!this.state.email || !this.state.password) {
      return;
    }
    console.log(this.state);
    authUser(this.state);
  };
  render() {
    const { user, navigation } = this.props;

    return (
      <Container behavior="padding">
        <TextInput
          mBottom
          value={this.state.username}
          placeholder="Digite seu email"
          textContentType="emailAddress"
          onChangeText={text => this.setState({ email: text })}
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
  user: state.user
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
