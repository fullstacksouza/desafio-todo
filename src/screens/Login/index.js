import React, { Component } from "react";

import { Container, Logo } from "./styles";
import Form from "../../components/Form";
export default class Login extends Component {
  render() {
    return (
      <Container>
        <Logo source={require("../../../assets/logo.png")} />
        <Form />
      </Container>
    );
  }
}
