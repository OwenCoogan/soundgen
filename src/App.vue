<template>
  <h1>Soundgen App</h1>
    
    <div id='nav'>
      <router-link to='/home'> Home</router-link>
    </div>
    <router-view />

  <TensorflowWindow/>
  <ActivateCam/>
</template>

<script>
import TensorflowWindow from "@/components/TensorflowWindow"
import ActivateCam from "@/components/ActivateCam"
export default {
  name: 'App',
  components: {
    TensorflowWindow,
    ActivateCam
  }
}
</script>
