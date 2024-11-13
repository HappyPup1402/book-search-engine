import User from '../models/index.js';
import { signToken, AuthenticationError } from '../services/auth.js';

const resolvers = {
  Query: {
    me: async (_parent: any, _args: any, context: any) => {
      if (context.user) {
        // Return the user associated with the context (authenticated user)
        return User.findOne({ _id: context.user._id }).populate('savedBooks');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    login: async (_parent: any, { email, password }: { email: string; password: string }) => {
      // Find the user by email
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with that email!');
      }

      // Check if the password is correct
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      // Sign a token and return it along with the user
      const token = signToken(user.username, user.email, user._id);
      return { token, user };
    },
    addUser: async (_parent: any, { username, email, password }: { username: string; email: string; password: string }) => {
      // Create a new user
      const user = await User.create({ username, email, password });

      // Sign a token for the new user
      const token = signToken(user.username, user.email, user._id);

      // Return the token and the user
      return { token, user };
    },
    saveBook: async (_parent: any, { input }: { input: { bookId: string; authors: string[]; description: string; title: string; image: string; link: string } }, context: any) => {
      if (context.user) {
        // Add the saved book to the user's savedBooks array
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },  // Using $addToSet to avoid duplicates
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeBook: async (_parent: any, { bookId }: { bookId: string }, context: any) => {
      if (context.user) {
        // Remove the book from the user's savedBooks array
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },  // Using $pull to remove the book
          { new: true }
        );

        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

export default resolvers;
