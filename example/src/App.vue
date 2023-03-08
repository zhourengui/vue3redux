<template>
  <p>Count is: {{ counter.value }}</p>
  <button @click="() => dispatch(increment())">Increment Count</button>
  <button @click="() => dispatch(decrement())">Decrement Count</button>
  <button @click="() => dispatch(incrementByAmount(100))">
    Increment By Amount
  </button>
</template>

<script setup lang="ts">
import { useSelector, useDispatch } from '@zhourengui/vue3redux';
import {
  increment,
  decrement,
  incrementByAmount,
  CounterState,
} from './stores';

const counter = useSelector<CounterState>((state) => state.counter);
const dispatch = useDispatch();
</script>
