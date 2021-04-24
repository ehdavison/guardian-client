
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Home from './components/Home'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import SignIn from './components/SignIn'
import {signOut} from './api/auth'


function App() {
  const [user, setUser] = useState();
  const [userId, setUserId] = useState();
  const [userToken, setUserToken] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const onSignOut = () => {
    signOut(userToken)
    .then(setLoggedIn(false))
    .catch((err) => {
      console.log(err)
    })
  }
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
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Stats</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Account Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={() => onSignOut()}>Log Out</NavDropdown.Item>
          </NavDropdown>
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
