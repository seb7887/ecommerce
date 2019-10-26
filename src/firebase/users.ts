import firebase, { db } from './index'

export const createUserProfile = async (
  userAuth: firebase.User | null,
  additionalData?: any
) => {
  if (!userAuth) {
    return
  }

  const dbRef = db.collection('users').doc(userAuth.uid)

  const snapshot = await dbRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await dbRef.set({
        name: displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      // TODO: add message
      console.log(err.message)
    }
  }

  return dbRef
}
