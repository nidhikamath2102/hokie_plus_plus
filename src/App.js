import { useLogoutFunction, useRedirectFunctions, withAuthInfo } from '@propelauth/react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserInfo from './UserInfo';
import './App.css';
import logo from './assets/logo.png';
import hokieFeet from './assets/hokie_feet.png';

const App = withAuthInfo(({isLoggedIn}) => {
  const logoutFn = useLogoutFunction()
  const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();

  const handleLogout = async () => {
    await logoutFn(true); // Ensure the logout function completes
    window.location.href = '/'; // Redirect to the home page
  };
    
  if (isLoggedIn) {
      return <div className="container">
          <img src={logo} alt="Logo" className="App-logo" />
          <div className="hello"><h1>Hello</h1></div>
          <div className="logout-container">
            <div className="home_path">
                <Routes>
                  <Route exact path="/" element={<Home/>}/>
                  <Route path="/user_info" element={<UserInfo/>}/>
                </Routes>
            </div>
            <button onClick={handleLogout} className="logout-button">
                Log out
            </button>
          </div>
      </div>
  } else {
      return <div className="container">
          <img src={hokieFeet} alt="Hookie Feet" className="top-right-image" />
          <img src={logo} alt="Logo" className="App-logo" />
          <div className="button-container">
          <button onClick={() => redirectToSignupPage()} className="signup-button">
              Sign up
          </button>
          <button onClick={() => redirectToLoginPage({ postLoginRedirectUrl: window.location.href })} className="login-button">
          Log in
        </button>
          </div>
      </div>
  }
})

export default App;