import { ref } from '@vue/reactivity'
import { projectFirestore } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

//use collection is a composable to do something with the the collection
//like add a new document

const useCollection = (collectionName) => {
  const error = ref(null)

  const addDocument = async (doc) => {
    error.value = null

    try {
      const collectionRef = collection(projectFirestore, collectionName)
      await addDoc(collectionRef, doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'could not send the message'
    }
  }
  return { error, addDoc: addDocument }
}

export default useCollection
