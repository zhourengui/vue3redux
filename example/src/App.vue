<template>
  <p>Count is: {{ counter }}</p>
  <button @click="() => dispatch(increment())">Increment Count</button>
  <button @click="() => dispatch(decrement())">Decrement Count</button>
  <button @click="() => dispatch(incrementByAmount(100))">
    Increment By Amount
  </button>
  <p>Author: {{ author.name }}, {{ author.github }}</p>
  <button
    @click="
      () =>
        dispatch(
          restoreAuthor({
            name: `Rengui Zhou ${Math.random()}`,
            github: 'https://github.com/zhourengui',
          })
        )
    "
  >
    Change Author
  </button>
</template>

<script setup lang="ts">
import { useSelector, useDispatch, storeToRefs } from '@zhourengui/vue3redux';
import {
  increment,
  decrement,
  incrementByAmount,
  RootState,
  demoSlice,
  restoreAuthor,
} from './stores';

const demoStore = useSelector((store: RootState) => store[demoSlice.name]);
const { counter, author } = storeToRefs(demoStore);

const dispatch = useDispatch();
</script>
