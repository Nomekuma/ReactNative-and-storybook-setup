import { LogBox } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";

LogBox.ignoreLogs(["Warning: ...", "Require cycle: ..."]);
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

let AppEntryPoint = App;
const storybookFlag = Constants.expoConfig?.extra?.storybookEnabled;
if (storybookFlag === "true" || storybookFlag === true) {
  AppEntryPoint = require("../.storybook").default;
}

export default AppEntryPoint;
