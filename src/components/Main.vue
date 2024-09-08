<template>
  <div class="app">
    <h1>Async Component Example</h1>
    <button @click="loadComponent">Load Async Component</button>
    <component :is="asyncComponent" v-if="asyncComponent"></component>
  </div>
</template>

<script>
import { shallowRef, defineAsyncComponent } from 'vue'

export default {
  name: 'App',
  setup() {
    const asyncComponent = shallowRef(null)

    const loadComponent = () => {
      console.log(1)

      asyncComponent.value = defineAsyncComponent(() =>
        import('./AsyncComponent.vue')
      )

      console.log(2)
    }

    return {
      asyncComponent,
      loadComponent
    }
  }
}
</script>

<style scoped>
.app {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 20px 0;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
