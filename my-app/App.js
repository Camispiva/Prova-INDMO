import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './componentes/LoginScreen';
import EscolhaScreen from './componentes/EscolhaScreen';
import SwitchScreen from '/componentes/SwitchScreen';
import JurosScreen from './componentes/JurosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Escolha" component={EscolhaScreen} />
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Juros" component={JurosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
