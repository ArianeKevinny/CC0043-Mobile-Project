## Fundamentos

- A programação assíncrona consiste em executar processos que na visão do usuario acontecem ao mesmo tempo, mas na realidade estão sendo executados de forma concorrente.
- Um exemplo é uma tela de login, para o usuario é apresentado apenas um icone de carregamento, mas em segundo plano está sendo realizada uma busca em um banco de dados com as informações inseridas pelo usuario.

## Como usar no JavaScript

- No JavaScript usamos o "async" para utilizarmos uma função assíncrona.
```
async function myFunction() {
  return "Hello";
}
```
- Nas funções assíncronas podemos usar o "await", esse comando faz uma pausa na execução da função ate que uma determinada instrução seja finalizada.
```
async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}
```


## Importancia 

- Text


