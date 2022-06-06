import { quotes, users } from "./fakedb.js";
import randomstring from "randomstring";
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find((user) => user.id === id),
    quotes: () => quotes,
    iquote: (_, { by }) => quotes.filter((quote) => quote.by === by),
  },
  User: {
    quotes: (ur) => quotes.filter((quote) => quote.by === ur.id),
  },
  Mutation: {
    signupUser: (_, {userNew}) => {
      const id = randomstring.generate(7);
      users.push({
          id,
          ...userNew
      })
      return users.find((user) => user.id === id)
    },
  },
};

export default resolvers;
