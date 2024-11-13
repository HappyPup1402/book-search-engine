
import './App.css';
import { Outlet } from 'react-router-dom';
import { ApolloProvider, client } from '@apollo/client'; // Import ApolloProvider
import Navbar from './components/Navbar';

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
