<template>
  <h1>Soundgen App</h1>
    
    <div>
      <router-link to='/home'> Home</router-link>
      <router-link to='/videoplayer'> Videoplayer</router-link>
    </div>
    <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
