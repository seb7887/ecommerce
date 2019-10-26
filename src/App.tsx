import React, { useState, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import firebase, { auth, createUserProfile } from './firebase'
import { Homepage, Shop, Login } from './pages'
import { Header } from './components'

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        if (userRef) {
          userRef.onSnapshot(
            (snapshot: firebase.firestore.DocumentSnapshot) => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data()
              })
            }
          )
        }
      } else {
        setCurrentUser(null)
      }
    })
  }, [])

  const signOut = () => auth.signOut()

  return (
    <>
      <Header currentUser={currentUser} onSignOut={signOut} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
        />
      </Switch>
    </>
  )
}

export default App
