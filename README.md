# CodeFTW - Examplos

## Projeto de exemplo usando GraphQL com Apollo Server

### Executar o projeto

```shell
npm install
npm start
```

### Visite http://localhost:4000/graphql

Execute o código abaixo para realizar uma consulta:

```graphql
query listUsers {
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

Execute o código abaixo para realizar uma alteração:

```graphql
mutation addUser {
  addUser(
    user: {
      name: "name input"
      email: "email input"
      authUID: "authUID input"
      address: { street: "street 1" }
    }
  ) {
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
