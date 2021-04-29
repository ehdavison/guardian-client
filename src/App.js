
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'



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
          <Home user={user} userId={userId} userToken={userToken} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        </div>
      )}
    </div>
  );
}

export default App;
