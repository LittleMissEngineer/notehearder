import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

const config = {
    apiKey: "Your api key",
    authDomain: "Your auth domain",
    databaseURL: "Your database url",
    projectId: "Your id",
    storageBucket: "Your storage",
    messagingSenderId: "Your ms id"
  }
  const app = firebase.initializeApp(config)
  const db = firebase.database(app)

  export const githubProvider = new firebase.auth.GithubAuthProvider()
  export const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const auth = app.auth()

  export default Rebase.createClass(db)