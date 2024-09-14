import { useLogoutFunction, useRedirectFunctions, withAuthInfo } from '@propelauth/react';

const App = withAuthInfo(({isLoggedIn}) => {
  const logoutFn = useLogoutFunction()
  const {redirectToSignupPage, redirectToLoginPage} = useRedirectFunctions();
    
  if (isLoggedIn) {
      return <div>
          <p>The User is logged in</p>
          <button onClick={() => logoutFn(true)}>
              Click here to log out
          </button>
      </div>
  } else {
      return <div>
          To get started, please log in as test user.
          <br/>
          <button onClick={() => redirectToSignupPage()}>
              Sign up
          </button>
          <button onClick={() => redirectToLoginPage()}>
              Log in
          </button>
      </div>
  }
})

export default App;