//sets up a listener to get the collection

import { ref } from '@vue/reactivity'
import { projectAuth, projectFirestore } from '../firebase/config'

//the docuemnts and the error get called within the
// function this time because we want to have a new version of the
// documents and the error everytime we use this function we will be
// obtaining a different collection and each collection will have its own
//version of the documents and the error if any
const getCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy('createdAt')

  //gets the changes at the moment they happen
  collectionRef.onSnapshot(
    (snap) => {
      let results = []
      snap.docs.forEach((doc) => {
        //here we use doc.data().createdAt because it makes sure that we are using
        // the timestamp that was created on the server and not the local one that was created
        //in the application. because in the front end firebase triggers a local snapshot. so without
        //this it would use the local snapshot  .
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        //we use the ...doc.data() to spread the contents of my doc onto the object the function created
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
  return { documents, error }
}

export default getCollection
