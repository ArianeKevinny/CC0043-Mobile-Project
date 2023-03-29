import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';

function LoginComponent(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginAnswer, setLoginAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);

  function verifyLogin() {
    if (username === 'abc' && password === '123') {
      setLoginAnswer('Login realizado!');
      setIsValid(true);
      return;
    }
    setLoginAnswer('Login Inválido!');
    setIsValid(false);
    return;
  }

  return (
    <View style={styles.loginScreenContext}>
      <Text style={styles.loginScreenText}>Usuário:</Text>
      <TextInput
        style={styles.textInput}
        selectTextOnFocus={true}
        placeholder="Informe seu usuário"
        autoComplete="username"
        defaultValue={username}
        onChangeText={setUsername}
      />

      <Text style={styles.loginScreenText}>Senha:</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Informe sua senha"
        secureTextEntry={true}
        selectTextOnFocus={true}
        autoComplete="password"
        defaultValue={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          verifyLogin();
        }}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>

      <Text
        style={{
          color: isValid ? 'green' : 'red',
          textAlign: 'center',
          margin: 30,
          fontSize: 20,
        }}>
        {loginAnswer}
      </Text>
    </View>
  );
}

export default LoginComponent;
