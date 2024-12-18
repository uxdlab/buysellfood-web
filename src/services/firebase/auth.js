import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  sendPasswordResetEmail
} from 'firebase/auth'
import app from './firebase'

const auth = getAuth(app)

export const handleSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCredential.user
    await sendEmailVerification(user)
    return userCredential.user
  } catch (error) {
    throw new Error(error.message)
  }
}

export const handleSignIn = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw new Error(error.message)
  }
}

export const passwordReset = async email => {
  try {
    const auth = getAuth();
    return await sendPasswordResetEmail(auth, email)
  } catch (error) {
    throw new Error(error.message)
  }
}

export const handleSignOut = async () => {
  return await signOut(auth)
}
