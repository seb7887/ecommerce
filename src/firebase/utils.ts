import firebase, { db } from './index'

export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: any[]
) => {
  const dbRef = db.collection(collectionKey)

  const batch = db.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = dbRef.doc()
    batch.set(newDocRef, obj)
  })
}

export const converCollectionsSnapshotToMap = (
  collections: firebase.firestore.DocumentData
) => {
  const transformedCollection = collections.docs.map(
    (doc: firebase.firestore.DocumentSnapshot) => {
      const data = doc.data()

      if (!data) {
        return
      }

      const { title, items } = data

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    }
  )

  return transformedCollection.reduce((accumulator: any, collection: any) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}
