
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Home from './components/Home'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import AuthenticatedRoute from './components/AuthenticatedRoute'
import SignIn from './components/SignIn'


function App() {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userToken, setUserToken] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn && (
        <SignIn user={user} setUser={setUser} setUserId={setUserId} setUserToken={setUserToken} setLoggedIn={setLoggedIn} />
      )}
      {loggedIn && (
        <Home />
      )}
      
    {/* <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Growth</Navbar.Brand>
      <Nav className="mr-auto">
      <Nav.Link href="#home">Account</Nav.Link>
      <Nav.Link href="#features">Tasks</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      </Nav>
    </Navbar> */}
    </div>
  );
}

export default App;
