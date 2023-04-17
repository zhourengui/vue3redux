import { computed, ComputedRef, Ref } from 'vue';

/**
 * Creates an object of references with all the state, getters, and plugin-added
 * state properties of the store. Similar to `toRefs()` but specifically
 * designed for vue3redux stores so methods and non reactive properties are
 * completely ignored.
 *
 * @param store - store to extract the refs from
 *
 * @example
 *
 *
 * <template>
 *  <p>Count is: {{ counter }}</p>
 *  <p>Author: {{ author.name }}, {{ author.github }}</p>
 * </template>
 *
 * <script setup>
 *  import { storeToRefs, useSelector } from '@zhourengui/vue3redux';
 *  const demoStore = useSelector((store: RootState) => store[demoSlice.name]);
 *  const { counter, author } = storeToRefs(demoStore);
 * <script>
 */
export const storeToRefs = <T extends object>(store: Ref<T>) => {
  const computedRefs = {} as {
    [K in keyof T]: ComputedRef<T[K]>;
  };

  for (const key in store.value) {
    if (Object.prototype.hasOwnProperty.call(store.value, key)) {
      computedRefs[key] = computed(() => store.value[key]);
    }
  }

  return computedRefs;
};
