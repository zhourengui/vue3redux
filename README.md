# Vue3Redux

Provide Hooks for projects using Redux in Vue3

## Installation

```
npm install @zhourengui/vue3redux
# or
yarn add @zhourengui/vue3redux
```

## Basic Example

##### Install `@zhourengui/vue3redux` plugin

```typescript
import { createApp } from '@vue/runtime-dom';
import { createVue3redux } from '@zhourengui/vue3redux';

import App from './app.vue';
import { store } from './stores';

const vue3redux = createVue3redux();

const app = createApp(App);

app.use(vue3redux, { store: store });

app.mount('#app');
```

##### Used `@zhourengui/vue3redux` in component

```html
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
  import { useSelector, useDispatch } from '@zhourengui/vue3redux';
  import {
    increment,
    decrement,
    incrementByAmount,
    RootState,
    demoSlice,
    restoreAuthor,
  } from './stores';

  const { counter, author } = useSelector(
    (store: RootState) => store[demoSlice.name]
  );

  const dispatch = useDispatch();
</script>
```

## Examples

Counter: [Source](https://github.com/zhourengui/vue3redux/tree/master/example) | [Sandbox](https://codesandbox.io/p/sandbox/zhourengui-vue3redux-9yu2zd)

## Todo List

- [ ] Add Tests
