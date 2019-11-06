import React, { useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useMappedState, useDispatch } from 'redux-react-hook'

import firebase, { auth, createUserProfile } from './firebase'
import { Homepage, Shop, Login, Checkout } from './pages'
import { Header } from './components'
import { setCurrentUser, selectCurrentUser } from './store/users'
import { ReduxState } from './types'

const mapState = (state: ReduxState) => ({
  currentUser: selectCurrentUser(state)
})

const App: React.FC = () => {
  const { currentUser } = useMappedState(mapState)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth)

        if (userRef) {
          userRef.onSnapshot(
            (snapshot: firebase.firestore.DocumentSnapshot) => {
              dispatch(
                setCurrentUser({
                  id: snapshot.id,
                  ...snapshot.data()
                })
              )
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
      <Header onSignOut={signOut} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <Login />)}
        />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </>
  )
}

export default App
