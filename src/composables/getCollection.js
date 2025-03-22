//sets up a listener to get the collection

import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

//the docuemnts and the error get called within the
// function this time because we want to have a new version of the
// documents and the error everytime we use this function we will be
// obtaining a different collection and each collection will have its own
//version of the documents and the error if any
const getCollection = (collectionName) => {
  const documents = ref(null)
  const error = ref(null)

  // Create a query reference
  const collectionRef = collection(projectFirestore, collectionName)
  const q = query(collectionRef, orderBy('createdAt'))

  // Set up real-time listener
  const unsubscribe = onSnapshot(q, 
    (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        // Only add documents that have a createdAt field
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      })

      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = 'could not fetch data'
    }
  )

  // Return cleanup function
  const cleanup = () => {
    unsubscribe()
  }

  return { documents, error, cleanup }
}

export default getCollection
