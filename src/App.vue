<template>
  <h1>Soundgen App</h1>
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
