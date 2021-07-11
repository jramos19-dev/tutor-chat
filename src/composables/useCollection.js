import { ref } from '@vue/reactivity'
import { projectAuth, projectFirestore } from '../firebase/config'

//use collection is a composable to do something with the the collection
//like add a new document

const useCollection = (collection) => {
  const error = ref(null)

  const addDoc = async (doc) => {
    error.value = null

    try {
      await projectFirestore.collection(collection).add(doc)
    } catch (err) {
      console.log(err.message)
      error.value = 'could not send the messaGE'
    }
  }
  return { error, addDoc }
}

export default useCollection
