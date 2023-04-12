import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
//Telas
import Home from './src/Screens/home';
import LoginScreen from './src/Screens/loginScreen';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  //Configurando a autenticação utilizando o módulo auth do FireBase
  //'Setando' os estados iniciais com conexões Firebase

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Bem Vindo, {user.email}</Text>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{title: 'Principal'}}
            component={Home}
          />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default App;
