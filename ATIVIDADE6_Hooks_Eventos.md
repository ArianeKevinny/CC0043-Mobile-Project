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
