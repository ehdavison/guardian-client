
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Home from './components/Home'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'


function App() {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userToken, setUserToken] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {!loggedIn && (
        <div>
          <SignIn user={user} setUser={setUser} setUserId={setUserId} setUserToken={setUserToken} setLoggedIn={setLoggedIn} />
          
        </div>
      )}

      {loggedIn && (
        <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Growth</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Account</Nav.Link>
            <Nav.Link href="#tasks">Tasks</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar>
        <Home />
      </div>
      )}
    </div>
  );
}

export default App;
