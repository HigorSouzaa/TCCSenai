import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Telas/Home/home";
import Login from "./src/Telas/Login/login";
import Cadastro from "./src/Telas/Cadastro/cadastro";
import Main from "./src/Telas/Main/main";
import Graph from "./teste";
import GerarDieta from "./src/Telas/GerarDieta/gerarDieta";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="GerarDieta"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#E6E3F6" },
        }}
      >
        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Graph" component={Graph} />
        <Stack.Screen name="GerarDieta" component={GerarDieta} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <MyStack></MyStack>;
}
