# FireBase

https://firebase.google.com/?hl=pt

## Compatilibidade com react native

- O FireBase possui compatibilidade com react native e oferece varias funcionalidades para projetos como ferramentas de login e funcionalidades WEB.
- O FireBase funciona em nuvem, não sendo necessario uma instalação na maquina local.  

## Instalação

- Para começar a usar o FireBase é instalar o FireBase em um projeto React Native atraves do NPM:

   **npm install --save @react-native-firebase/app**

- Para que o FireBase seja executado no projeto React Native é necessario configurar as credenciais android, para isso é necessario realizar algumas mudanças em algumas linhas de codigo.

No arquivo /android/build.gradle:
```
buildscript {

  dependencies {
  
    // ... other dependencies
    
    classpath 'com.google.gms:google-services:4.3.15'
    
    // Add me --- /\
 
  }
  
}
```

No arquivo /android/app/build.gradle:
```
pply plugin: 'com.android.application'

apply plugin: 'com.google.gms.google-services' // <- Add this line
```

- Após realizar esses passos é necessario rebuildar o app.
```
npx react-native run-android
```

## Principais Operações

- Login (Email/Senha)
```
import auth from '@react-native-firebase/auth';

auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  ```

- SignOut
```
import auth from '@react-native-firebase/auth';

auth()
  .signOut()
  .then(() => console.log('User signed out!'));
```

- Armazenamento em nuvem
```
import storage from '@react-native-firebase/storage';
const reference = storage().ref('black-t-shirt-sm.png');

import React, { useEffect } from 'react';
import { View, Button } from 'react-native';

import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';

function App() {
  // create bucket storage reference to not yet existing image
  const reference = storage().ref('black-t-shirt-sm.png');

  return (
    <View>
      <Button
        onPress={async () => {
          // path to existing file on filesystem
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/black-t-shirt-sm.png`;
          // uploads file
          await reference.putFile(pathToFile);
        }}
      />
    </View>
  );
}
```

- Banco de Dados

Leitura de dados:

```
import database from '@react-native-firebase/database';

database()
  .ref('/users/123')
  .once('value')
  .then(snapshot => {
    console.log('User data: ', snapshot.val());
  });
```  
Atualizar dados:
```
import database from '@react-native-firebase/database';

database()
  .ref('/users/123')
  .update({
    age: 32,
  })
  .then(() => console.log('Data updated.'));

```
Apagar dados:
```

await database().ref('/users/123').remove();
```

