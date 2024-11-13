import jwt from 'jsonwebtoken';
import { GraphQLError } from 'graphql';
import dotenv from 'dotenv';
dotenv.config();

interface JwtPayload {
  _id: unknown;
  username: string;
  email: string;
}

// Function to authenticate the token for a GraphQL API
export const authenticateToken = ({ req }: any) => {
  // Allow token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // If the token is in the authorization header, extract it
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  // If no token is provided, return the request object unmodified
  if (!token) {
    return req;
  }

  // Verify the token
  try {
    const secretKey = process.env.JWT_SECRET_KEY || '';
    const data = jwt.verify(token, secretKey) as JwtPayload;
    
    // Attach the user data to the request object if the token is valid
    req.user = data;
  } catch (err) {
    // Log an error if token verification fails
    console.error('Invalid token');
  }

  return req; // Return the request, potentially with user data attached
};

// Function to sign a JWT token
export const signToken = (username: string, email: string, _id: unknown) => {
  const payload = { username, email, _id };
  const secretKey = process.env.JWT_SECRET_KEY || '';

  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

// Custom error for GraphQL authentication errors
export class AuthenticationError extends GraphQLError {
  constructor(message: string) {
    super(message, {
      extensions: {
        code: 'UNAUTHENTICATED',
      },
    });
    Object.defineProperty(this, 'name', { value: 'AuthenticationError' });
  }
};
