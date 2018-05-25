import firebase from 'firebase/app'
import database from 'firebase/database'
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

  export default Rebase.createClass(db)