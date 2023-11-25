import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexPage from './views/IndexPage';
import CatsPage from './views/CatsPage';
import UsersPage from './views/UsersPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="PAMW Lab 06" component={IndexPage} />
        <Stack.Screen name="Cats" component={CatsPage} />
        <Stack.Screen name="Users" component={UsersPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
