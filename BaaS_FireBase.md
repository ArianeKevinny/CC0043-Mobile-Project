# FireBase

## Compatilibidade com react native

Text

## Instalação

-Para começar a usar o FireBase é instalar o FireBase em um projeto React Native atraves do NPM:

npm install --save @react-native-firebase/app

-Para que o FireBase seja executado no projeto React Native é necessario configurar as credenciais android, para isso é necessario realizar algumas mudanças em algumas linhas de codigo.

No arquivo /android/build.gradle:

buildscript {

  dependencies {
  
    // ... other dependencies
    
    classpath 'com.google.gms:google-services:4.3.15'
    
    // Add me --- /\
    
  }
  
}

No arquivo /android/app/build.gradle:

pply plugin: 'com.android.application'

apply plugin: 'com.google.gms.google-services' // <- Add this line

### Principais Operações

- List
- List
