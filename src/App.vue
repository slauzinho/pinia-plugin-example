<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ store.counter }}</h1>
  <div>
    <button @click="store.increment()">Increment</button>
    <button @click="store.decrement()">Decrement</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import useCounter from './stores/useCounter';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useCounter();

    return {
      store,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
