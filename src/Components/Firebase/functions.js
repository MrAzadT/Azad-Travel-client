import app from './firebase.config'
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

const googleSignIn = ({ setCurrentUser, history, from }) => {
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      setCurrentUser(user)
      history.replace(from)
    })
    .catch((error) => {
      console.log(error)
    })
}

const logout = () => {
  const auth = getAuth(app)
  signOut(auth)
    .then(() => {
      console.log('logged out')
    })
    .catch((error) => {
      console.log('error')
    })
}

export { googleSignIn, logout }
