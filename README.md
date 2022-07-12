# CodeFTW - Examplos

## Projeto de exemplo usando GraphQL com Apollo Server

### Executar o projeto

```shell
npm install
npm start
```

### Visite http://localhost:4000/graphql

Execute o código abaixo:

```graphql
query {
  users {
    id
    name
    address {
      street
      city
      state
    }
  }
}
```

![Apollo Playground](/images/playground-apollo.png)

_Visite https://codeftw.dev e se torne um dos melhores!_
