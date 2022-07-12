const { users } = require("./dataset");
const getUsers = () => {
  return users;
};
const resolvers = {
  Query: {
    users: getUsers,
  },
  User: {
    address: (user) => {
      console.log(user);
      return { ...user.addressOtherName };
    },
  },
};

module.exports = { resolvers };
