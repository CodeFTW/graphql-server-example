const { users } = require("./dataset");
const getUsers = () => {
  return users;
};
const resolvers = {
  Query: {
    users: getUsers,
  },
  Mutation: {
    addUser: (_, { user }) => {
      console.log({ user });
      const { address, name, email, authUID } = user;
      const newUser = {
        id: users.length + 1,
        name,
        email,
        authUID,
        addressOtherName: address,
      };
      // Apenas exemplo, evitar fazer alterações diretamente no objeto.
      users.push(newUser);
      return users.find(({ id }) => id === newUser.id);
    },
  },
  User: {
    address: (user) => {
      console.log(user);
      return { ...user.addressOtherName };
    },
  },
};

module.exports = { resolvers };
