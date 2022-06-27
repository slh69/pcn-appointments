<template>
<button type="button" @click="showClient = !showClient" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Client View</button>
  <button type="button" @click="showOffice = !showOffice" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Office View</button>
  <button type="button" @click="showSettings = !showSettings" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Settings</button>
 
 
  <OfficeView v-if="showOffice" />
  <ClientView v-if="showClient" />
  <Settings v-if="showSettings" />


</template>

<script setup>
  import OfficeView from "./components/OfficeView.vue"
  import ClientView from "./components/ClientView.vue"
  import Settings from "./components/Settings.vue"
  import {ref} from 'vue'

  const showOffice = ref(false)
  const showClient = ref(false)
  const showSettings = ref(false)

</script>