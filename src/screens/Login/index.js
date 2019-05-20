import React, { Component } from "react";

import { Container, Logo } from "./styles";
import { ActivityIndicator } from "react-native";
import Form from "../../components/Form";
import * as userActions from "../../actions/userActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
class Login extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { authUser, user, navigation } = this.props;
    user.logged ? navigation.navigate("Home") : 0;
    return (
      <Container>
        {user.loading && <ActivityIndicator />}
        <Logo source={require("../../../assets/logo.png")} />
        <Form />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
