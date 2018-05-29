import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
  type: 'LOGIN',
  uid
})

export const startSignInWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}

export const startCreateUserWithEmailAndPassword = (email, password) => {
  return () => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }
}

export const startLoginWithGoogle = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  }
}

export const startPasswordReset = (email) => {
  return () => {
    return firebase.auth().sendPasswordResetEmail(email)
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  }
}
