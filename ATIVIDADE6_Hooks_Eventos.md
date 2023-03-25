#Hooks e eventos em TypeScript

## Hook

 Os hooks são funções chamadas em componente funcional declarada no nível superior, que surgiu no React 16.8 para superar as limitações e problemas das classes. 
 Eles permitem fazer uma ligação com os 'states' e ciclos de vidas do React a partir de componentes funcionais.
 
 #### Regras de utilização de um Hook
 - Deve ser chamado apenas no nível mais alto
    - Não devem ser chamados em loops, condições ou funções aninhadas (funções em funções).
 - Não use Hooks dentro de funções JavaScript/TypeScript comuns
 
 É possivel construir nosso próprio Hook, mas para exemplificar usamos um dos hooks internos.
 
 #### Hook useState
 
 useState é um React Hook que permite adicionar uma variável de estado ao seu componente.

 <code>// Declarar uma nova variável de state, na qual chamaremos de "count"
  const [state, setState] = useState(initialState)
</code> 
  

## Evento

Os Eventos são Códigos Javascript passados dentro de um manipulador de evento

#### Como é cirado o evento

Um código Javascript passados dentro de um manipulador de evento

> Nota: O código sempre dentro de chaves '{}'
  
> Nota: Funções passadas para manipuladores de eventos devem ser passadas, não chamadas. 
- Forma correta:

//Chamando a função handleClick
    
    <button onClick={handleClick}>
  
//Chamando a função de forma embutida
  
    <button onClick={() => alert('...')}>

- Forma incorreta:
  
//Chamando a função handleClick
    
    <button onClick={handleClick()}>
  
//Chamando a função de forma embutida
  
    <button onClick={alert('...')}>
      
#### Exemplos de Eventos:
      
1. onclick
2. onSubmit


## Tela de autenticação utilizando Hook e Eventos 
```javascript
export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  //Hooks
  const [loginInfo, setLoginInfo] = useState('');

  function verifyLogin() {
    if (username === 'mobile' && password === 'JavaScript23') {
      setLoginInfo('Login Autorizado.');
      return;
    }
    setLoginInfo('Login Inválido.');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Usuário:</Text>
      <TextInput
        placeholder="Informe seu usuário"
        defaultValue={username}
        onChangeText={setUsername}  //Evento
        style={styles.input}
      />

      <Text style={styles.text}>Senha:</Text>
      <TextInput
        placeholder="Informe sua senha"
        defaultValue={password}
        onChangeText={setPassword}  //Evento
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={() => {    //Evento
          verifyLogin();
        }}
        style={styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
          Login
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}>{loginInfo}</Text>
    </View>
  );
}
```
