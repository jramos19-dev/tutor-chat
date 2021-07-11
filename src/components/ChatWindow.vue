<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
//installed date-fns so that we could formast the date and time stamp on the messages
// a different way with the age being displayed instead of the time stamp

import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from '@vue/runtime-core'
export default {
  setup() {
    const { error, documents } = getCollection('messages')

    //we fire a function that returns a value
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate())
          //we overwrite the createdAt property and use the new defined time variable
          return { ...doc, createdAt: time }
        })
      }
    })

    //auto scroll to bottom of the messages
    //by creating a template ref and calling it messages, then defining a constant by the same name
    // in my script then created an onUpdated life cycle hook and then the hook takes the value of
    // scrollHeight of the latest message that is being added to my chat window and it makes the
    // last message the new top of the scroll .
    const messages = ref(null)

    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight
    })

    return { error, documents, formattedDocuments, messages }
  },
}
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}

.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}

.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
