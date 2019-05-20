import React from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store";
export default class App extends React.Component {
  async componentDidMount() {
    await AsyncStorage.setItem(
      "user",
      JSON.stringify({ email: "demo@todo", password: "demo" })
    );
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
