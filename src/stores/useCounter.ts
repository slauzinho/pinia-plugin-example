import { defineStore } from 'pinia';

const useCounter = defineStore({
  id: 'counterStore',
  state() {
    return {
      counter: 0,
    };
  },
  actions: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});

export default useCounter;
