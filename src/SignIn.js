import React from  'react'

import './SignIn.css'
import googleLogo from './google.svg'
import {auth, googleProvider, githubProvider} from './base'

const SignIn = () => {

    const authenticate = (provider) =>{
        auth.signInWithPopup(provider)
    }
return (
<div className="SignIn">
<header className="Header">
          <img src="media/quill.svg" alt="" />
          <span className="title">Noteherder</span>
        </header>
        <main>
          <h3>Get in, loser. We're taking notes.</h3>
          <p>You never know when you'll need to write crap down. In fact, you should probably be taking notes right now. Just like the Mean Girls.</p>
          <button className="github"
          onClick ={() => authenticate(githubProvider)}
          >
            <i className="fab fa-github"></i>
            Sign in with GitHub
          </button>
          <button className="google"
          onClick = {() => authenticate(googleProvider)}   
          >
            <img src={googleLogo} alt="" />
            Sign in with Google
          </button>
        </main>
</div>

)

}

export default SignIn