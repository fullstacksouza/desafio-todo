import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import Home from "./screens/Home";
import Login from "./screens/Login";

const AppStack = createStackNavigator({
  Home
});
const AppSwitch = createSwitchNavigator(
  {
    Login,
    Home: AppStack
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppSwitch);
